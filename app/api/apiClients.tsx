import axios from 'axios';
import ApiRoutes from './apiRoutes';
// import { BuffetReservationRequest } from '../models/IBuffet';
// import { InitalizePaymentRequest } from '../models/IPayment';
// import { Enquiry } from '../models/Enquiry';
// import { FilterTabs } from '../enums/DishCategory';
// import { LoginRequest } from '../models/ILogin';
// import { CartItemRequest } from '../models/ICart';
// import { UserProfileUpdateRequest } from '../models/IUserProfileResponse';
// import { UserCreationRequest } from '../models/IUser';
// import { ICreateOrder } from '../models/IOrder';
// import { IInPartySizzledOrder } from '../models/IInPartySizzledOrder';
// import { ILuxuryPrivatePalateOrder } from '../models/ILuxuryPrivatePalateOrder';
// import { IDeliveryAddressRequest } from '../models/IDeliveryAddress';
// import { ICustomerUpdateRequest } from '../models/ISachAI';

export const API = axios.create({
    baseURL: ApiRoutes.BASE_URL_TEST
});

export const headerConfig = (token?: string) => {
    if (!token) {
        return {
            "X-API-KEY": process.env.NEXT_PUBLIC_API_KEY
        }
    }

    return {
        "X-API-KEY": process.env.NEXT_PUBLIC_API_KEY,
        Authorization: `Bearer ${token}`,
    }
}


// Function to login
// export function useLogin() {
//     async function login(data: LoginRequest) {

//         // Fire the request
//         const response = await API.post(ApiRoutes.LoginUser, data, { headers: headerConfig() });

//         // Return the response
//         return response;
//     }

//     return login;
// }

// export function useRegisterUser() {
//     async function registerUser(data: UserCreationRequest) {
//         const response = await API.post(ApiRoutes.RegisterUser, data, { headers: headerConfig() });

//         return response;
//     }

//     return registerUser;
// }

// // Function to fetch user profile
// export function useFetchUserProfile() {
//     /**
//      * @returns the response for the api request
//      */
//     async function fetchUserProfile(accessToken: string) {
//         //Fetch message
//         const response = await API.get(ApiRoutes.FetchUserProfile, { headers: headerConfig(accessToken) });

//         //Return response
//         return response;
//     }
//     //return function to fetch new message
//     return fetchUserProfile;
// }

// export function useUpdateUser() {
//     /**
//      * @returns the response for the api request
//      */
//     async function updateUser({ accessToken, data }: { accessToken: string, data: UserProfileUpdateRequest }) {

//         //Fetch message
//         const response = await API.put(ApiRoutes.UpdateUserProfile, data, { headers: headerConfig(accessToken) });

//         //Return response
//         return response;
//     }
//     //return function to fetch new message
//     return updateUser;
// }

// export function useValidateLocation() {
//     async function validateLocation(longitude: string, latitude: string) {
//         const response = await API.get(ApiRoutes.LocationValidation(longitude, latitude), { headers: headerConfig() });

//         return response;
//     }

//     return validateLocation;
// }

// export function useCreateOrder() {
//     async function createOrder(accessToken: string, data: ICreateOrder) {
//         const response = await API.post(ApiRoutes.CreateOrder, data, { headers: headerConfig(accessToken) });

//         return response;
//     }

//     return createOrder;
// }

// export function usePlaceOrder() {
//     async function placeOrder(accessToken: string, orderId: string, data: InitalizePaymentRequest) {
//         const response = await API.post(ApiRoutes.PlaceOrder(orderId), data, { headers: headerConfig(accessToken) });

//         return response;
//     }

//     return placeOrder;
// }

// export function useFetchUserOrders() {
//     async function fetchUserOrders(accessToken: string) {
//         const response = await API.get(ApiRoutes.FetchUserOrders, { headers: headerConfig(accessToken) });

//         return response;
//     }

//     return fetchUserOrders;
// }

// export function useFetchUserOrder() {
//     async function fetchUserOrder(accessToken: string, orderId: string) {
//         const response = await API.get(ApiRoutes.FetchUserOrder(orderId), { headers: headerConfig(accessToken) });

//         return response;
//     }

//     return fetchUserOrder;
// }

// export function useCreateInSizzledPartyOrder() {
//     async function createInSizzledPartyOrder(data: IInPartySizzledOrder) {
//         const response = await API.post(ApiRoutes.CreateInSizzledPartyOrder, data);

//         return response;
//     }

//     return createInSizzledPartyOrder;
// }

// export function useCreatePrivateLuxuryPalateOrder() {
//     async function createPrivateLuxuryPalateOrder(data: ILuxuryPrivatePalateOrder) {
//         const response = await API.post(ApiRoutes.CreateLuxuryPrivatePalateOrder, data);

//         return response;
//     }

//     return createPrivateLuxuryPalateOrder;
// }

// export function useCreateDeliveryAddress() {
//     async function createDeliveryAddress(accessToken: string, data: IDeliveryAddressRequest) {
//         const response = await API.post(ApiRoutes.DeliveryAddress, data, { headers: headerConfig(accessToken) });

//         return response;
//     }

//     return createDeliveryAddress;
// }

// export function useFetchSavedDeliveryAddresses() {
//     async function fetchSavedDeliveryAddresses(accessToken: string) {
//         const response = await API.get(ApiRoutes.DeliveryAddress, { headers: headerConfig(accessToken) });

//         return response;
//     }

//     return fetchSavedDeliveryAddresses;
// }

// export function useAddOrUpdateCustomer() {
//     async function addOrUpdateCustomer(data: ICustomerUpdateRequest) {
//         const response = await API.post(ApiRoutes.AddOrUpdateCustomer, data);

//         return response;
//     }

//     return addOrUpdateCustomer;
// }

// export function useVerifyCoupon() {
//     async function verifyCoupon(data: {couponCode: string}) {
//         const response = await API.get(ApiRoutes.VerifyCoupon(data.couponCode));

//         return response;
//     }

//     return verifyCoupon;
// }

// //#region Buffet

// // Function to fetch buffets
// export function useFetchBuffets() {
//     /**
//      * @returns the response for the api request
//      */
//     async function fetchBuffets() {

//         //Fetch message
//         const response = await API.get(ApiRoutes.FetchBuffets, { headers: headerConfig() });

//         //Return response
//         return response;
//     }
//     //return function to fetch new message
//     return fetchBuffets;
// }

// // Function to fetch buffet
// export function useFetchBuffet() {
//     /**
//      * @returns the response for the api request
//      */
//     async function fetchBuffet(id: string) {

//         //Fetch message
//         const response = await API.get(`${ApiRoutes.FetchBuffet}/${id}`, { headers: headerConfig() });

//         //Return response
//         return response;
//     }
//     //return function to fetch new message
//     return fetchBuffet;
// }

// // Function to create buffet reservation
// export function useCreateBuffetReservation() {
//     /**
//      * @returns the response for the api request
//      */
//     async function createBuffetReservation(data: BuffetReservationRequest) {

//         //Fetch message
//         const response = await API.post(ApiRoutes.CreateBuffetReservation, data, { headers: headerConfig() });

//         //Return response
//         return response;
//     }
//     //return function to fetch new message
//     return createBuffetReservation;
// }

// //#endregion

// //#region Testimonial

// // Function to fetch testimonials
// export function useFetchTestimonials() {
//     /**
//      * @returns the response for the api request
//      */
//     async function fetchTestimonials() {

//         //Fetch message
//         const response = await API.get(ApiRoutes.FetchTestimonials, { headers: headerConfig() });

//         //Return response
//         return response;
//     }
//     //return function to fetch new message
//     return fetchTestimonials;
// }

// //#endregion

// //#region Blog Post

// // Function to fetch blog posts
// export function useFetchBlogPosts() {
//     /**
//      * @returns the response for the api request
//      */
//     async function fetchBlogPosts() {

//         //Fetch message
//         const response = await API.get(ApiRoutes.FetchBlogPosts, { headers: headerConfig() });

//         //Return response
//         return response;
//     }
//     //return function to fetch new message
//     return fetchBlogPosts;
// }

// //#endregion

// //#region Payments

// // Function to fetch reservation
// export function useFetchReservation() {
//     /**
//      * @returns the response for the api request
//      */
//     async function fetchReservation(id: string) {

//         //Fetch message
//         const response = await API.get(`${ApiRoutes.FetchReservation}/${id}`, { headers: headerConfig() });

//         //Return response
//         return response;
//     }
//     //return function to fetch new message
//     return fetchReservation;
// }

// // Function to initialize payment
// export function useInitializePayment() {
//     /**
//      * @returns the response for the api request
//      */
//     async function initializePayment(reservationid: string, data: InitalizePaymentRequest) {

//         //Fetch message
//         const response = await API.post(`${ApiRoutes.InitializePayment}/${reservationid}`, data, { headers: headerConfig() });

//         //Return response
//         return response;
//     }
//     //return function to fetch new message
//     return initializePayment;
// }

// // Function to initialize cash payment
// export function useInitializeCashPayment() {
//     /**
//      * @returns the response for the api request
//      */
//     async function initializeCashPayment(reservationid: string) {

//         //Fetch message
//         const response = await API.post(`${ApiRoutes.InitializeCashPayment}/${reservationid}`, {}, { headers: headerConfig() });

//         //Return response
//         return response;
//     }
//     //return function to fetch new message
//     return initializeCashPayment;
// }

// // Function to verify payment
// export function useVerifyPayment() {
//     /**
//      * @returns the response for the api request
//      */
//     async function verifyPayment(reference: string) {

//         //Fetch message
//         const response = await API.get(`${ApiRoutes.VerifyPayment}/${reference}`, { headers: headerConfig() });

//         //Return response
//         return response;
//     }
//     //return function to fetch new message
//     return verifyPayment;
// }

// //#endregion

// export function useCreateNewsletterSubscriber() {
//     async function createNewsletterSubscriber(emailAddress: string) {
//         return API.post(ApiRoutes.NewsletterSubscriber, { emailAddress }, { headers: headerConfig() });
//     }

//     return createNewsletterSubscriber;
// }

// export function useCreateEnquiry() {
//     async function createEnquiry(formValues: Enquiry) {
//         return API.post(ApiRoutes.Enquiry, formValues, { headers: headerConfig() });
//     }

//     return createEnquiry;
// }

// //#region Dishes

// // Api to fetch daily combo dishes
// export function useFetchDailyComboDishes() {
//     /**
//      * @returns the response for the api request
//      */
//     async function fetchDailyComboDishes(filter: FilterTabs) {
//         const endpoint = filter === FilterTabs.None ? ApiRoutes.FetchDailyComboDishes : `${ApiRoutes.FetchDailyComboDishes}?DishFilter=${filter}`

//         //Fetch message
//         const response = await API.get(endpoint, { headers: headerConfig() });

//         //Return response
//         return response;
//     }
//     //return function to fetch on demand dishes
//     return fetchDailyComboDishes;
// }

// // Api to fetch on demand dishes
// export function useFetchOnDemandDishes() {
//     /**
//      * @returns the response for the api request
//      */
//     async function fetchOnDemandDishes(filter: FilterTabs) {

//         const endpoint = filter === FilterTabs.None ? ApiRoutes.FetchOnDemandDishes : `${ApiRoutes.FetchOnDemandDishes}?DishFilter=${filter}`

//         //Fetch message
//         const response = await API.get(endpoint, { headers: headerConfig() });

//         //Return response
//         return response;
//     }
//     //return function to fetch on demand dishes
//     return fetchOnDemandDishes;
// }

// // Function to fetch a dish
// export function useFetchADish() {
//     /**
//      * @returns the response for the api request
//      */
//     async function fetchADish(id: string) {

//         //Fetch message
//         const response = await API.get(`${ApiRoutes.FetchADish}/${id}`, { headers: headerConfig() });

//         //Return response
//         return response;
//     }
//     //return function to fetch new message
//     return fetchADish;
// }

// // Function to fetch all dish categories
// export function useFetchAllDishCategories() {
//     /**
//      * @returns the response for the api request
//      */
//     async function fetchAllDishCategories() {

//         //Fetch message
//         const response = await API.get(ApiRoutes.FetchAllDishCategories, { headers: headerConfig() });

//         //Return response
//         return response;
//     }
//     //return function to fetch new message
//     return fetchAllDishCategories;
// }

// // Function to fetch dishes in a category
// export function useFetchDishesInCategory() {
//     /**
//      * @returns the response for the api request
//      */
//     async function fetchDishesInCategory(categoryId: string) {

//         //Fetch message
//         const response = await API.get(ApiRoutes.FetchDishesInCategory(categoryId), { headers: headerConfig() });

//         //Return response
//         return response;
//     }
//     //return function to fetch new message
//     return fetchDishesInCategory;
// }

// // Function to fetch similar dishes
// export function useFetchSimilarDishes() {
//     /**
//      * @returns the response for the api request
//      */
//     async function fetchSimilarDishes(dishId: string) {

//         //Fetch message
//         const response = await API.get(ApiRoutes.FetchSimilarDishes(dishId), { headers: headerConfig() });

//         //Return response
//         return response;
//     }
//     //return function to fetch new message
//     return fetchSimilarDishes;
// }

// //#endregion


// //#region Cart

// export function useUpsertCart() {
//     /**
//      * @returns the response for the api request
//      */
//     async function upsertCart(accessToken: string, data: CartItemRequest) {

//         //Fetch message
//         const response = await API.post(ApiRoutes.UpsertCart, data, { headers: headerConfig(accessToken) });

//         //Return response
//         return response;
//     }
//     //return function to fetch new message
//     return upsertCart;
// }

// export function useFetchCartItems() {
//     /**
//      * @returns the response for the api request
//      */
//     async function fetchCartItems(accessToken: string) {

//         //Fetch message
//         const response = await API.get(ApiRoutes.FetchCartItems, {
//             headers: headerConfig(accessToken),
//         })
//         //Return response
//         return response;
//     }
//     //return function to fetch new message
//     return fetchCartItems;
// }

// export function useDeleteCartItem() {
//     /**
//      * @returns the response for the api request
//      */
//     async function deleteCartItem(accessToken: string, id: string) {

//         // Fetch message
//         const response = await API.delete(`${ApiRoutes.DeleteCartItem}/${id}`, { headers: headerConfig(accessToken) });

//         // Return response
//         return response;
//     }

//     // Return function to delete cart item
//     return deleteCartItem;
// }

// export function useFetchDeliveryFees() {
//     /**
//      * @returns the response for the api request
//      */
//     async function fetchDeliveryFees() {

//         // Fetch message
//         const response = await API.get(ApiRoutes.FetchDeliveryFees, { headers: headerConfig() });

//         // Return response
//         return response;
//     }

//     // Return function to fetch delivery fees
//     return fetchDeliveryFees;
// }


// //#endregion