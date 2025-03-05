import axios from 'axios';
import ApiRoutes from './apiRoutes';
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

