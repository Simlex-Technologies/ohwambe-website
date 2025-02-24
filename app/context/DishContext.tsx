import React, { createContext, ReactNode, FunctionComponent, useState, useEffect, useCallback } from "react";
import { catchError } from "../constants/catchError";
import { useFetchAllDishCategories, useFetchDishesInCategory } from "../api/apiClients";
import { DishCategoryResponse } from "../models/IDishCategory";
import { DishesResponse, DishVariant } from "../models/IDishes";
import { CartItemRequest } from "../models/ICart";
import { useCart } from "./CartContext";
import { OrderStatus } from "../enums/OrderStatus";
import { IOrderStatus } from "../models/IOrder";
import { getEffectivePrice } from "../constants/helpers";
import { StorageKeys } from "../constants/StorageKeys";

// Define the type for the context data
export type DishContextData = {
    dishCategories: DishCategoryResponse[] | undefined;
    handleFetchDishCategories: () => Promise<void>
    isFetchingDishCategories: boolean
    selectedDishCategory?: DishCategoryResponse
    updateSelectedDishCategory: (dishCategory: DishCategoryResponse | undefined) => void
    dishes?: DishesResponse[]
    isFetchingDishes?: boolean
    handleAddToCart: (dish: DishesResponse, selectedVariant: DishVariant) => Promise<void>
    handleDecrement: (dish: DishesResponse, selectedVariant: DishVariant) => Promise<void>
    handleIncrement: (dish: DishesResponse, selectedVariant: DishVariant) => Promise<void>
};

// Create a context with the specified data type
const DishContext = createContext<DishContextData | undefined>(undefined);

// Create a provider component that takes children as props
type DishProviderProps = {
    children: ReactNode;
};

const DishProvider: FunctionComponent<DishProviderProps> = ({ children }) => {

    const fetchAllDishCategories = useFetchAllDishCategories();
    const fetchDishesInCategory = useFetchDishesInCategory();
    const { decreaseItemQtyInCart, increaseItemQtyInCart } = useCart();

    const [isFetchingDishCategories, setIsFetchingDishCategories] = useState(true);
    const [isFetchingDishes, setIsFetchingDishes] = useState(true);
    const [dishCategories, setDishCategories] = useState<DishCategoryResponse[]>();
    const [selectedDishCategory, setSelectedDishCategory] = useState<DishCategoryResponse>();
    const [dishes, setDishes] = useState<DishesResponse[]>();

    const [selectedDishes, setSelectedDishes] = useState<DishesResponse[] | undefined>();
    const [orderStatus, setOrderStatus] = useState<IOrderStatus>({});

    // Function to fetch all dish categories
    const handleFetchDishCategories = async () => {

        // Show loader
        setIsFetchingDishCategories(true)

        await fetchAllDishCategories()
            .then((response) => {
                setDishCategories(response.data);
            })
            .catch((error) => {
                catchError(error);
            })
            .finally(() => {
                // Close loader 
                setIsFetchingDishCategories(false);
            })
    };

    // Function to fetch all dishes under a category
    const handleFetchDishesInCategory = async (categoryId: string) => {
        // clear dishes
        setDishes(undefined);

        await fetchDishesInCategory(categoryId)
            .then((response) => {
                const _dishes: DishesResponse[] = response.data;

                if (_dishes && _dishes.length > 0) {
                    // sort the variants so they are arranged according to their prices
                    _dishes.forEach(dish => {
                        dish.variants = dish.variants.sort((a, b) => a.price - b.price);
                    });
                }

                setDishes(_dishes);
            })
            .catch((error) => {
                catchError(error);
            })
            .finally(() => {
                setIsFetchingDishes(false);
            })
    };

    const handleAddToCart = async (dish: DishesResponse, selectedVariant: DishVariant) => {

        // find if the dish already exists in the cart
        const existingDish = dishes?.find(item => item.id === dish.id);
        console.log("🚀 ~ setSelectedDishes ~ existingDish:", existingDish);


        // retrieve the cart items from session storage
        const _cartItems = sessionStorage.getItem(StorageKeys.CartItems);

        // get the remaining quantity of the dish variant
        const remainingStock = selectedVariant ? selectedVariant.stock - selectedVariant.stockTaken : 0;

        console.log("🚀 ~ setSelectedDishes ~ remainingStock:", remainingStock);

        // if the stock is 0, return the previous state
        if (remainingStock === 0) {
            return;
        }

        setSelectedDishes((prev) => {
            // if it exists, increment the count
            if (existingDish) {
                return prev?.map(item =>
                    item.id === dish.id
                        ? {
                            ...item,
                            quantity: item.quantity + 1,
                            variants: existingDish.variants.map(variant => variant.id === selectedVariant.id ? { ...variant, stockTaken: variant.stockTaken + 1 } : variant)
                        }
                        : item
                );
            }
            // if it doesn't exist, add it to the cart, with a count of 1
            return prev
                ? [...prev as DishesResponse[], { ...dish, id: dish.id, quantity: 1 }]
                : [{ ...dish, name: dish.name, quantity: 1 }];
        });

        // Change the order status to "Order Added"
        setOrderStatus(prev => (prev ? { ...prev, [dish.name]: OrderStatus.Added } : { [dish.name]: OrderStatus.Added }));

        const data: CartItemRequest = {
            dishId: dish.id,
            price: getEffectivePrice(dish, selectedVariant),
            dishVariantId: selectedVariant.id,
            quantity: 1
        }

        await increaseItemQtyInCart(data)
            .then((response) => {
                setOrderStatus(prev => ({ ...prev, [dish.name]: OrderStatus.Counting }));
            })
            .catch((error) => {
                setOrderStatus(prev => ({ ...prev }));
            })

        // After 2 seconds, change from "Order Added" to increment/decrement controls
        // setTimeout(() => {
        //     setOrderStatus(prev => ({ ...prev, [dish.name]: OrderStatus.Counting }));
        // }, 2000);
    };

    const handleDecrement = async (dish: DishesResponse, selectedVariant: DishVariant) => {

        // Map through the selected dishes, and decrement the count of the selected dish by 1 if it exists, else return the item
        setSelectedDishes((prev) =>
            prev?.map(item =>
                item.name === dish.name && item.quantity > 0
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            ).filter(item => item.quantity > 0) // Then remove dish from the list if count becomes 0
        );


        const data: CartItemRequest = {
            dishId: dish.id,
            price: getEffectivePrice(dish, selectedVariant),
            dishVariantId: selectedVariant.id,
            quantity: dish.quantity - 1
        }

        await decreaseItemQtyInCart(data)
            .then((response) => {
                // If the count is 0, change the order status to "Removed"
                if (orderStatus[dish.name] === OrderStatus.Counting && dish.quantity === 1) {
                    setOrderStatus(prev => ({ ...prev, [dish.name]: OrderStatus.Removed }));
                }
            })
            .catch((error) => {
                console.log("error: ", error);
                setOrderStatus(prev => ({ ...prev }));
            })
    };

    const handleIncrement = async (dish: DishesResponse, selectedVariant: DishVariant) => {

        // Map through the selected dishes, and increment the count of the selected dish by 1 if it exists, else return the item
        setSelectedDishes((prev) =>
            prev ? prev.map(item =>
                item.name === dish.name ? { ...item, quantity: item.quantity + 1 } : item
            ) : [{ ...dish, name: dish.name, quantity: dish.quantity + 1 }]
        );

        const data: CartItemRequest = {
            dishId: dish.id,
            price: getEffectivePrice(dish, selectedVariant),
            dishVariantId: selectedVariant.id,
            quantity: dish.quantity + 1
        };

        await increaseItemQtyInCart(data)
            .then((response) => {
                console.log("response: ", response);
                setOrderStatus(prev => ({ ...prev, [dish.name]: OrderStatus.Counting }));
            })
            .catch((error) => {
                console.log("error: ", error);
                setOrderStatus(prev => ({ ...prev }));
            })
    };

    // Fetch all dish categories on component mount, and when the dishCategories state is undefined
    useEffect(() => {
        if (!dishCategories) {
            handleFetchDishCategories();
        }
    }, [dishCategories]);

    // Fetch all dishes in a category when the selectedDishCategory state changes
    const fetchDishesInCategoryFn = useCallback(() => {
        if (selectedDishCategory) {
            handleFetchDishesInCategory(selectedDishCategory.id);
        }
    }, [selectedDishCategory]); // Memoize based on selectedDishCategory

    useEffect(() => {
        fetchDishesInCategoryFn(); // Calls the memoized function above
    }, [selectedDishCategory]);


    // Set the first dish category as the selectedDishCategory on component mount
    // useEffect(() => {
    //     if (dishCategories && dishCategories.length > 0) {
    //         setSelectedDishCategory(dishCategories[0]);
    //     }
    // }, [dishCategories]);

    // Define the values you want to share
    const sharedData: DishContextData = {
        dishCategories,
        handleFetchDishCategories,
        isFetchingDishCategories,
        selectedDishCategory,
        updateSelectedDishCategory: (dishCategory: DishCategoryResponse | undefined) => setSelectedDishCategory(dishCategory),
        dishes,
        isFetchingDishes,
        handleAddToCart,
        handleDecrement,
        handleIncrement
    };

    return (
        <DishContext.Provider value={sharedData}>
            {children}
        </DishContext.Provider>
    );
};

export { DishProvider, DishContext };

export function useDishContext() {
    const context = React.useContext(DishContext);
    if (context === undefined) {
        throw new Error('useDishContext must be used within a DishProvider');
    }
    return context;
}