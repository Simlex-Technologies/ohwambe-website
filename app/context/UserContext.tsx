// import React, { createContext, ReactNode, FunctionComponent, useState, useEffect, Dispatch, SetStateAction } from "react";
// import { catchError } from "../constants/catchError";
// import { fetchUserFromDb } from "../api/services/fetchUserFromDb";
// import { useFetchUserProfile } from "../api/apiClients";
// import { UserCredentialsSub } from "../models/IUser";
// import { UserProfileResponse } from "../models/IUserProfileResponse";
// import { useSearchParams } from "next/navigation";
// import { StorageKeys } from "../constants/StorageKeys";
// /**
//  * The data type for the application context
//  */
// export type UserContextData = {
//     userProfileInformation: UserProfileResponse | null;
//     userCredentials: UserCredentialsSub | null;
//     fetchUserCredentials: (getUserInfo: boolean) => Promise<UserCredentialsSub | null>;
//     fetchUserProfileInformation: () => void;
//     isLoginPromptVisible: boolean;
//     setIsLoginPromptVisible: Dispatch<SetStateAction<boolean>>
//     isSignUpModalVisible: boolean;
//     setIsSignUpModalVisible: Dispatch<SetStateAction<boolean>>
// };

// /**
//  * The context for the application
//  */
// const UserContext = createContext<UserContextData | undefined>(undefined);

// // Create a provider component that takes children as props
// type UserProviderProps = {
//     children: ReactNode;
// };

// const UserProvider: FunctionComponent<UserProviderProps> = ({ children }) => {

//     // Hook to fetch customer 
//     const fetchUserProfile = useFetchUserProfile();
//     const params = useSearchParams();
//     const affiliateCodeParam = params.get('am_id');

//     // Define state for customer data
//     const [userProfileInformation, setUserProfileInformation] = useState<UserProfileResponse | null>(null);
//     const [userCredentials, setUserCredentials] = useState<UserCredentialsSub | null>(null);
//     const [isLoginPromptVisible, setIsLoginPromptVisible] = useState(false);
//     const [isSignUpModalVisible, setIsSignUpModalVisible] = useState(false);
//     // const [isForgotPasswordModalVisible, setIsForgotPasswordModalVisible] = useState(false);
//     // const [isResetPasswordModalVisible, setIsResetPasswordModalVisible] = useState(false);
//     const [affiliateCode, setAffiliateCode] = useState<string | null>(null);
    
//     /**
//      * Function to fetch user credentials from the prisma database
//      * @param getUserInfo is the flag to determine if the user information should be fetched
//      * @returns the user credentials
//      */
//     const fetchUser = async (getUserInfo: boolean) => {

//         if (!getUserInfo) {
//             return null;
//         }

//         const user = await fetchUserFromDb();

//         // Set the user credentials
//         setUserCredentials(user);

//         return user as unknown as UserCredentialsSub;
//     };

//     /**
//      * Function to fetch user's profile information
//      */
//     const fetchUserInformation = async () => {

//         const userInfo = await fetchUser(true);
//         // Retrieve customer
//         await fetchUserProfile(userInfo?.accessToken as string)
//             .then((response) => {

//                 // Set the result
//                 setUserProfileInformation(response.data);
//             })
//             .catch((error) => {

//                 // Set customer to null
//                 setUserProfileInformation(null);

//                 // Log the error
//                 // console.error("Error fetching customer data:", error);

//                 catchError(error);
//             })
//     };

//     useEffect(() => {
//         if (userCredentials === null) {
//             // Fetch user information
//             fetchUser(true);
//         }
//     }, [userCredentials]);

//     useEffect(()=>{
//         fetchUserInformation()
//     },[]);

//     useEffect(() => {
//         if (affiliateCodeParam) {
//             // save it to session storage
//             sessionStorage.setItem(StorageKeys.AffiliateCode, affiliateCodeParam);

//             setAffiliateCode(affiliateCodeParam);
//         }
//     }, [affiliateCodeParam])

//     // Define the values you want to share
//     const sharedData: UserContextData = {
//         userProfileInformation,
//         userCredentials,
//         fetchUserProfileInformation: fetchUserInformation,
//         fetchUserCredentials: fetchUser,
//         isLoginPromptVisible,
//         setIsLoginPromptVisible,
//         isSignUpModalVisible,
//         setIsSignUpModalVisible
//     };

//     return (
//         <UserContext.Provider value={sharedData}>
//             {children}
//         </UserContext.Provider>
//     );
// };

// export { UserProvider, UserContext };

// export function useUserContext() {
//     const context = React.useContext(UserContext);
//     if (context === undefined) {
//         throw new Error('useUser must be used within a UserProvider');
//     }
//     return context;
// }