import React, { createContext, ReactNode, FunctionComponent, useState } from "react";
import { catchError } from "../constants/catchError";
import { useVerifyCoupon } from "../api/apiClients";
import { Coupon } from "../models/ICoupon";
import { toast } from "sonner";

// Define the type for the context data
export type CouponContextData = {
    couponCode: string
    setCouponCode: React.Dispatch<React.SetStateAction<string>>
    couponDetails: Coupon | null | undefined
    setCouponDetails: React.Dispatch<React.SetStateAction<Coupon | null | undefined>>
    handleVerifyCoupon: () => Promise<void>
    isVerifyingCoupon: boolean
};

// Create a context with the specified data type
const CouponContext = createContext<CouponContextData | undefined>(undefined);

// Create a provider component that takes children as props
type CouponProviderProps = {
    children: ReactNode;
};

const CouponProvider: FunctionComponent<CouponProviderProps> = ({ children }) => {

    const verifyCoupon = useVerifyCoupon();

    const [couponDetails, setCouponDetails] = useState<Coupon | null>();

    const [isVerifyingCoupon, setIsVerifyingCoupon] = useState(false);
    const [couponCode, setCouponCode] = useState('');

    const handleVerifyCoupon = async () => {

        if (!couponCode) {
            toast.error('Please enter a valid coupon code');
            return;
        }

        setIsVerifyingCoupon(true);

        // send api request
        await verifyCoupon({ couponCode })
            .then((response) => {
                console.log("🚀 ~ .verifyCoupon ~ response:", response);
                toast.success(`${couponCode} with ${response.data.discount}% discount applied`);
                setCouponDetails(response.data);
            })
            .catch((error) => {
                console.log("🚀 ~ .verifyCoupon ~ error:", error);
                toast.error('Invalid coupon code');
                setCouponDetails(null);
                setCouponCode('');  
            })
            .finally(() => {
                setIsVerifyingCoupon(false);
            })
    };

    // Define the values you want to share
    const sharedData: CouponContextData = {
        couponCode,
        setCouponCode,
        couponDetails,
        setCouponDetails,
        handleVerifyCoupon,
        isVerifyingCoupon,
    };

    return (
        <CouponContext.Provider value={sharedData}>
            {children}
        </CouponContext.Provider>
    );
};

export { CouponProvider, CouponContext };

export function useCouponContext() {
    const context = React.useContext(CouponContext);
    if (context === undefined) {
        throw new Error('useCouponContext must be used within a CouponProvider');
    }
    return context;
}