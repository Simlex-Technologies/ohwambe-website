import React, { createContext, ReactNode, FunctionComponent, useState, useContext } from "react";
import { BuffetResponse } from "../models/IBuffet";
import { useFetchBuffets } from "../api/apiClients";
import { catchError } from "../constants/catchError";

// Define the type for the context data
export type BuffetContextData = {
    buffets: BuffetResponse[] | undefined;
    handleFetchBuffets: () => Promise<void>
    isFetchingBuffets: boolean
};

// Create a context with the specified data type
const BuffetContext = createContext<BuffetContextData | undefined>(undefined);

// Create a provider component that takes children as props
type BuffetProviderProps = {
    children: ReactNode;
};

const FoodProvider: FunctionComponent<BuffetProviderProps> = ({ children }) => {

    const fetchBuffets = useFetchBuffets();

    const [isFetchingBuffets, setIsFetchingBuffets] = useState(true);
    const [buffets, setBuffets] = useState<BuffetResponse[]>([]);

    // Function to fetch buffets
    const handleFetchBuffets = async () => {

        // Show loader
        setIsFetchingBuffets(true)

        await fetchBuffets()
            .then((response) => {
                // Set the buffets
                setBuffets(response.data)
            })
            .catch((error) => {
                // Display error
                // toast.error('An error occured.')
                catchError(error)
                // const errorMessage = createCustomErrorMessages(error.response?.data)
                // toast.error(errorMessage);
            })
            .finally(() => {
                // Close loader 
                setIsFetchingBuffets(false);
            })
    };

    // Define the values you want to share
    const sharedData: BuffetContextData = {
        buffets,
        handleFetchBuffets: handleFetchBuffets,
        isFetchingBuffets
    };

    return (
        <BuffetContext.Provider value={sharedData}>
            {children}
        </BuffetContext.Provider>
    );
};

export { FoodProvider, BuffetContext };
