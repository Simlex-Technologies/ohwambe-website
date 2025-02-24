import React, { createContext, ReactNode, FunctionComponent, useEffect, useState, Dispatch, SetStateAction } from "react";
import { catchError } from "../constants/catchError";
import { useFetchDeliveryFees } from "../api/apiClients";
import { DeliveryFee } from "../models/IDeliveryFee";
import { DeliveryType } from "../enums/DeliveryType";
import { DeliveryLocationValidationResponse } from "../models/IDeliveryLocation";

// Define the type for the context data
export type DeliveryFeeContextData = {
    deliveryFees?: DeliveryFee[];
    handleFetchDeliveryFees: () => Promise<void>
    freeDeliveryThreshold: number
    verifiedAddressResponse?: DeliveryLocationValidationResponse
    setVerifiedAddressResponse: Dispatch<SetStateAction<DeliveryLocationValidationResponse | undefined>>
    deliveryMode: DeliveryType
    setDeliveryMode: Dispatch<SetStateAction<DeliveryType>>
};

// Create a context with the specified data type
const DeliveryFeeContext = createContext<DeliveryFeeContextData | undefined>(undefined);

// Create a provider component that takes children as props
type DeliveryFeeProviderProps = {
    children: ReactNode;
};

const DeliveryFeeProvider: FunctionComponent<DeliveryFeeProviderProps> = ({ children }) => {

    const fetchDeliveryFees = useFetchDeliveryFees();

    const [deliveryFees, setDeliveryFees] = useState<DeliveryFee[]>();
    const [freeDeliveryThreshold, setFreeDeliveryThreshold] = useState<number>(0);

    const [verifiedAddressResponse, setVerifiedAddressResponse] = useState<DeliveryLocationValidationResponse>();
    const [deliveryMode, setDeliveryMode] = useState<DeliveryType>(DeliveryType.Standard);

    const handleFetchDeliveryFees = async () => {
        await fetchDeliveryFees()
            .then((response) => {
                setDeliveryFees(response.data);
            })
            .catch((error) => {
                catchError(error);
            })
    };

    // Fetch all delivery fees on component mount
    useEffect(() => {
        if (!deliveryFees) {
            handleFetchDeliveryFees();
        }
        // if we have delivery fees, get the free delivery threshold
        if (deliveryFees) {
            const freeDelivery = deliveryFees.find(fee => fee.deliveryType == DeliveryType.Free);
            if (freeDelivery) {
                setFreeDeliveryThreshold(freeDelivery.orderLimit);
            }
        }
    }, [deliveryFees]);

    // Define the values you want to share
    const sharedData: DeliveryFeeContextData = {
        deliveryFees,
        handleFetchDeliveryFees,
        freeDeliveryThreshold,
        verifiedAddressResponse,
        setVerifiedAddressResponse,
        deliveryMode,
        setDeliveryMode
    };

    return (
        <DeliveryFeeContext.Provider value={sharedData}>
            {children}
        </DeliveryFeeContext.Provider>
    );
};

export { DeliveryFeeProvider, DeliveryFeeContext };

export function useDeliveryFeeContext() {
    const context = React.useContext(DeliveryFeeContext);
    if (context === undefined) {
        throw new Error('useDeliveryFeeContext must be used within a DeliveryFeeProvider');
    }
    return context;
}