import React, { createContext, ReactNode, FunctionComponent, useState, useContext, useEffect } from "react";
import { CartItemRequest, CartItemResponse } from "../models/ICart";
import { useDeleteCartItem, useFetchCartItems, useUpsertCart } from "../api/apiClients";
import { UserContext, UserContextData } from "./UserContext";
import { StorageKeys } from "../constants/StorageKeys";
import { useSession } from "next-auth/react";
import { useDeliveryFeeContext } from "./DeliveryFeeContext";
import { DeliveryType } from "../enums/DeliveryType";
import { toast } from "sonner";

// Define the type for the context data
interface CartContextType {
    cartItems: CartItemResponse[] | undefined;
    tempCartItems: CartItemRequest[];
    increaseItemQtyInCart: (data: CartItemRequest) => Promise<void>;
    decreaseItemQtyInCart: (data: CartItemRequest) => Promise<void>
    handleFetchCartItems: () => Promise<void>;
    isLoading: boolean;
    deleteItemFromCart: (id: string) => Promise<void>;
    isDeleting: boolean;
    totalAmountOfAllItems: number;
    amountLeftForFreeDelivery: number;
    percentageTillFreeDelivery: number;
}

// Create the Cart Context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Create a provider component that takes children as props
type CartProviderProps = {
    children: ReactNode;
};

export const CartProvider: FunctionComponent<CartProviderProps> = ({ children }) => {

    const upsertCart = useUpsertCart();
    const fetchCartItems = useFetchCartItems();
    const deleteCartItem = useDeleteCartItem();

    const { data: session } = useSession();

    const { fetchUserCredentials } = useContext(UserContext) as UserContextData;
    const { freeDeliveryThreshold, setDeliveryMode } = useDeliveryFeeContext();

    const [cartItems, setCartItems] = useState<CartItemResponse[]>();
    console.log("🚀 ~ cartItems:", cartItems)
    const [tempCartItems, setTempCartItems] = useState<CartItemRequest[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isDeleting, setIsDeleting] = useState<boolean>(false);


    const totalAmountOfAllItems = tempCartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    const amountLeftForFreeDelivery = freeDeliveryThreshold - totalAmountOfAllItems;

    const percentageTillFreeDelivery = (totalAmountOfAllItems / freeDeliveryThreshold) * 100;

    const getUserAccessToken = async (): Promise<string | null> => {
        if (!fetchUserCredentials) return null;
        try {
            const credentials = await fetchUserCredentials(true);
            return credentials?.accessToken || null;
        } catch (error) {
            console.error("Error fetching user credentials:", error);
            return null;
        }
    };

    const handleFetchCartItems = async () => {
        const token = await getUserAccessToken();

        setIsLoading(true);

        if (!token) {
            await retrieveCartItemsLocally();
            return;
        };

        try {
            const response = await fetchCartItems(token);

            const _tempCartItems = response.data.map((item: CartItemResponse) => {
                return {
                    dishId: item.dishId,
                    price: item.discount > 0 ? (item.unitPrice - (item.discount / 100 * item.unitPrice)) : item.unitPrice,
                    quantity: item.quantity
                }
            })
    
            // update the temp cart items state
            setTempCartItems(_tempCartItems);
    
            // save the updated cart items to session storage
            sessionStorage.setItem(StorageKeys.CartItems, JSON.stringify(_tempCartItems));
    
            console.log("🚀 ~ handleFetchCartItems ~ response.data:", response.data)
            // Update the cart state with fetched dats
            setCartItems(response.data); 
        } catch (error) {
        } finally {
            setIsLoading(false);
        }
    };

    const increaseItemQtyInCart = async (data: CartItemRequest) => {
        const token = await getUserAccessToken();

        if (!token) {
            incrementCartItemsLocally(data);
            return;
        };

        // setIsLoading(true);

        await upsertCart(token, data)
            .then((response) => {
                // increase the quantity of the item in the cart locally
                incrementCartItemsLocally(data);

                console.log("🚀 ~ .incremented cart ~ response:", response);

                handleFetchCartItems();
            })
            .catch((error) => {
                if (error.response?.data?.message === "Insufficient dishes in stock") {
                    toast.error("Sorry, we don't have enough of this item in stock");
                }
                console.error("Error adding to cart:", error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    const decreaseItemQtyInCart = async (data: CartItemRequest) => {
        console.log("🚀 ~ decreaseItemQtyInCart ~ data:", data)
        
        const token = await getUserAccessToken();
        console.log("🚀 ~ decreaseItemQtyInCart ~ token:", token)

        if (!token) {
            decreaseCartItemsLocally(data);
            return;
        };

        // setIsLoading(true);

        try {
            const response = await upsertCart(token, data);
            console.log("🚀 ~ decreaseItemQtyInCart ~ response:", response)

            handleFetchCartItems();
        } catch (error) {
            console.error("Error removing from cart:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const deleteItemFromCart = async (id: string) => {
        const token = await getUserAccessToken();
        if (!token) return;

        setIsDeleting(true);

        await deleteCartItem(token, id)
            .then((response) => {
                handleFetchCartItems();
            }).catch((error) => {
                console.error("Error adding to cart:", error);
            })
            .finally(() => {
                setIsDeleting(false);
            })

    };

    const incrementCartItemsLocally = (item: CartItemRequest) => {

        // retrieve the cart items from session storage
        const _cartItems = sessionStorage.getItem(StorageKeys.CartItems);

        // If there are no cart items in session storage, save the new item
        if (!_cartItems || _cartItems === null || _cartItems === "undefined") {
            setTempCartItems([item]);
            sessionStorage.setItem(StorageKeys.CartItems, JSON.stringify([item]));
            return;
        }

        // parse the cart items gotten from session storage
        const cartItems = JSON.parse(_cartItems) as CartItemRequest[];

        // check if the item already exists in the cart items
        const itemExists = cartItems.find((cartItem) => cartItem.dishVariantId === item.dishVariantId);

        // If the item exists, increase the quantity
        if (itemExists) {
            cartItems.map((cartItem) => {
                if (cartItem.dishVariantId === item.dishVariantId) {
                    cartItem.quantity = item.quantity;
                    cartItem.price = item.price * cartItem.quantity;
                }
            });
        } else {
            // If the item does not exist, add the new item to the cart items
            cartItems.push(item);
        }

        // update the temp cart items
        setTempCartItems(cartItems);

        // save the updated cart items to session storage
        sessionStorage.setItem(StorageKeys.CartItems, JSON.stringify(cartItems));
    };

    const decreaseCartItemsLocally = (item: CartItemRequest) => {
        // retrieve the cart items from session storage
        const _cartItems = sessionStorage.getItem(StorageKeys.CartItems);

        // If there are no cart items in session storage, return
        if (!_cartItems || _cartItems === null || _cartItems === "undefined") {
            return;
        }

        // parse the cart items gotten from session storage
        const cartItems = JSON.parse(_cartItems) as CartItemRequest[];

        // check if the item already exists in the cart items
        const itemExists = cartItems.find((cartItem) => cartItem.dishVariantId === item.dishVariantId);

        // If the item exists, decrease the quantity
        if (itemExists) {

            // if it's only one quantity for that item, remove the item from the cart
            if (itemExists.quantity === 1) {
                const updatedCartItems = cartItems.filter((cartItem) => cartItem.dishVariantId !== item.dishVariantId);

                // update the temp cart items
                setTempCartItems(updatedCartItems);

                // save the updated cart items to session storage
                sessionStorage.setItem(StorageKeys.CartItems, JSON.stringify(updatedCartItems));

                return;
            }

            cartItems.map((cartItem) => {
                if (cartItem.dishVariantId === item.dishVariantId) {
                    cartItem.quantity -= item.quantity;
                    cartItem.price = item.price * cartItem.quantity;
                }
            });
        }

        // update the temp cart items
        setTempCartItems(cartItems);

        // save the updated cart items to session storage
        sessionStorage.setItem(StorageKeys.CartItems, JSON.stringify(cartItems));
    };

    const retrieveCartItemsLocally = async () => {
        const _cartItems = sessionStorage.getItem(StorageKeys.CartItems);

        // If there are no cart items in session storage, return an empty array
        if (!_cartItems || _cartItems == null || _cartItems == undefined) {
            return;
        }

        // parse the cart items gotten from session storage
        const cartItems = JSON.parse(_cartItems) as CartItemRequest[];

        // update the temp cart items
        setTempCartItems(cartItems);

        // get token
        const token = await getUserAccessToken();
        console.log("🚀 ~ retrieveCartItemsLocally ~ token:", token)

        if (!token) return;

        // upload each cart item to the server  
        cartItems.map(async (cartItem) => {
            await increaseItemQtyInCart(cartItem);
        });
    };

    useEffect(() => {
        handleFetchCartItems();
    }, []);

    useEffect(() => {
        // if the user is now logged in, upload the cart items to the server
        if (session && tempCartItems.length > 0) {
            tempCartItems.map(async (cartItem) => {
                await increaseItemQtyInCart(cartItem);
            });
        }
    }, [session]);

    useEffect(() => {
        if (percentageTillFreeDelivery >= 100) {
            setDeliveryMode(DeliveryType.Free);
        } else {
            setDeliveryMode(DeliveryType.Standard);
        }
    }, [percentageTillFreeDelivery])

    return (
        <CartContext.Provider
            value={
                {
                    cartItems,
                    tempCartItems,
                    increaseItemQtyInCart: increaseItemQtyInCart,
                    decreaseItemQtyInCart,
                    handleFetchCartItems,
                    isLoading,
                    deleteItemFromCart,
                    isDeleting,
                    totalAmountOfAllItems,
                    amountLeftForFreeDelivery,
                    percentageTillFreeDelivery
                }
            }>
            {children}
        </CartContext.Provider>
    );
};

// Hook to use the CartContext
export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};
