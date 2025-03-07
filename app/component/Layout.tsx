'use client'
import React, { FunctionComponent, Suspense, useEffect, useState } from 'react'
import images from '@/public/images';
// import { ReactQueryProvider } from '@/app/context/ReactQueryProvider';
import { Toaster } from 'sonner';
import { initializeIcons, loadTheme } from "@fluentui/react";
import { usePathname } from 'next/navigation';
// import { useUserContext } from '@/app/context/UserContext';
import Navbar from './shared/Navbar';
import Footer from './shared/Footer';
import CustomImage from './ui/image';
// import LoginModal from './modal/LoginModal';
// import { useUserContext } from '../context/UserContext';
import { useSession } from 'next-auth/react';

type Props = {
    children: React.ReactNode;
    // isSignUpModalVisible: boolean;
    // setIsSignUpModalVisible: (value: boolean) => void;
}

const Layout = ({ children }: Props) => {

    // const { isLoginPromptVisible, isSignUpModalVisible, setIsLoginPromptVisible, setIsSignUpModalVisible } = useUserContext();
    // const { data: session, status } = useSession();
    const pathname = usePathname();
    const [loaderIsVisible, setLoaderIsVisible] = useState(true);

    const iswindow = typeof window !== 'undefined' ? true : false;
    const [isLoginPromptVisible, setIsLoginPromptVisible] = useState(false);

    // Load fluent UI icons
    loadTheme({
        palette: {
            themePrimary: "#f26528",
            themeLighterAlt: "#fef9f6",
            themeLighter: "#fde5db",
            themeLight: "#fbcfbd",
            themeTertiary: "#f7a17c",
            themeSecondary: "#f47742",
            themeDarkAlt: "#da5b25",
            themeDark: "#b84d1f",
            themeDarker: "#883917",
            neutralLighterAlt: "#faf9f8",
            neutralLighter: "#f3f2f1",
            neutralLight: "#edebe9",
            neutralQuaternaryAlt: "#e1dfdd",
            neutralQuaternary: "#d0d0d0",
            neutralTertiaryAlt: "#c8c6c4",
            neutralTertiary: "#a19f9d",
            neutralSecondary: "#605e5c",
            neutralSecondaryAlt: "#8a8886",
            neutralPrimaryAlt: "#3b3a39",
            neutralPrimary: "#323130",
            neutralDark: "#201f1e",
            black: "#000000",
            white: "#ffffff",
        },
        defaultFontStyle: { fontFamily: "Josefin Sans" },
    });

    // Initialize icons
    initializeIcons();

    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Set a timeout to hide the loader after 5 seconds
            const timeout = setTimeout(() => {
                setLoaderIsVisible(false);
            }, 2000);

            // Cleanup function to clear the timeout if the component unmounts or dependencies change
            return () => clearTimeout(timeout);
        }
    }, [iswindow]);

    function useOnline() {
        const [isOnline, setIsOnline] = React.useState(
            typeof navigator !== "undefined" ? navigator.onLine : false
        )

        const setOnline = () => setIsOnline(true)
        const setOffline = () => setIsOnline(false)

        React.useEffect(() => {
            window.addEventListener("online", setOnline)
            window.addEventListener("offline", setOffline)

            return () => {
                window.removeEventListener("online", setOnline)
                window.removeEventListener("offline", setOffline)
            }
        }, [])

        return isOnline
    };

    const authorizedPages = [
        "/order/manage",
        "/order/cart",
        "/order/checkout",
        "/order/payment",
    ];

    // useEffect(() => {
    //     if (!session && status == "unauthenticated") {
    //         // Check if they are in any authorized page
    //         if (authorizedPages.includes(pathname)) {
    //             // Redirect to homepage
    //             window.location.href = "/";
    //         }
    //     }
    // }, [session, status]);

    return (
        <>
            {!loaderIsVisible && (
                <>
                    <Toaster
                        position='bottom-center'
                        richColors
                        closeButton
                        toastOptions={{
                            duration: 3000,
                            unstyled: false,
                        }}
                    />

                    {/* <LoginModal
                        visibility={isLoginPromptVisible}
                        setVisibility={setIsLoginPromptVisible}
                    />
                    <SignUpModal
                        visibility={isSignUpModalVisible}
                        setVisibility={setIsSignUpModalVisible}
                    /> */}

                    <Navbar />
                    <Suspense fallback={<PageLoader />}>
                        {children}
                    </Suspense>
                    <Footer />
                </>
            )}

            {loaderIsVisible && (<PageLoader />)}
        </>
    )
}


const PageLoader: FunctionComponent = () => {
    return (
        <div className='w-[100vw] h-[100vh] min-h-[100vh] grid place-items-center bg-white'>
            <div className='w-40 h-20 animate-pulse transition-all duration-150 ease-in-out object-contain relative'>
                <CustomImage src={images.logo} alt='logo' />
            </div>
        </div>
    );
}

export default Layout