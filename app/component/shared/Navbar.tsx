"use client"
import Link from "next/link"
import Image from "next/image"
import images from "@/public/images"
import { sectionPadding } from "@/app/styles/styles"
import { useState } from "react"
import MobileNavMenu from "../navbar/MobileNavMenu"
import { Icons } from "../ui/icons"

export default function Navbar() {
    const [mobileNavIsVisible, setMobileNavIsVisible] = useState(false)
    return (
        <header className={`fixed top-0 z-50 w-full shadow bg-white ${sectionPadding}`}>
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Link href="/" className="text-xl font-bold">
                    <Image src={images.logo} alt="logo" width={150} height={50} />
                </Link>

                <div className="hidden md:flex items-center space-x-7">
                    <Link href="/pricing" className="text-base text-[#515151] hover:text-gray-900">
                        Pricing
                    </Link>
                    <button className="bg-secondary text-white hover:bg-secondary text-white/80 px-10 rounded-full py-2">Sign up</button>
                    <button className="text-[#0A0A0A] border-2 border-[#000000] rounded-full py-2 px-10">
                        Login
                    </button>
                </div>
                <button 
                    className="md:hidden z-50"
                    onClick={() => setMobileNavIsVisible(true)}
                    title="Open mobile navigation menu"
                >
                
                    <Icons.Hamburger />
                </button>
            </div>

            {mobileNavIsVisible && (
                <div className="md:hidden">
                    <MobileNavMenu setMobileNavIsVisible={setMobileNavIsVisible} />
                </div>
            )}
        </header>
    )
}