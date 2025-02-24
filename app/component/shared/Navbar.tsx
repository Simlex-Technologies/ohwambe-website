"use client"
import Link from "next/link"
import Image from "next/image"
import images from "@/public/images"
import { sectionPadding } from "@/app/styles/styles"

export default function Navbar() {
    return (
        <header className={`fixed top-0 z-50 w-full shadow bg-white ${sectionPadding}`}>
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Link href="/" className="text-xl font-bold">
                    <Image src={images.logo} alt="logo" width={150} height={50} />
                </Link>

                <div className="flex items-center space-x-7">
                    <Link href="/pricing" className="text-base text-[#515151] hover:text-gray-900">
                        Pricing
                    </Link>
                    <button className="bg-secondary text-white hover:bg-secondary text-white/80 px-10 rounded-full py-2">Sign up</button>
                    <button className="hidden text-[#0A0A0A] border-2 border-[#000000] rounded-full py-2 px-10 md:inline-flex">
                        Login
                    </button>
                </div>
            </div>
        </header>
    )
}

