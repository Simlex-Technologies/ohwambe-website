import { ApplicationRoutes } from "@/app/constants/applicationRoutes";
import Link from "next/link";
import { FunctionComponent, ReactElement } from "react";
import CustomImage from "../ui/image";
import images from "@/public/images";
import { Icons } from "../ui/icons";
import { navLinkStyle, sectionPadding } from "@/app/styles/styles";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { liVariant, mobileMenuVariant, ulVariant } from "@/app/animations/navbarAnimations";
import Button from "../ui/button";

interface MobileNavMenuProps {
    setMobileNavIsvisible: React.Dispatch<React.SetStateAction<boolean>>
}

const MobileNavMenu: FunctionComponent<MobileNavMenuProps> = ({ setMobileNavIsvisible }): ReactElement => {

    const pathname = usePathname();

    const navLinks = [
        {
            text: 'Home',
            link: ApplicationRoutes.Home
        },
        {
            text: 'About',
            link: ApplicationRoutes.About
        },
        {
            text: 'Services',
            link: ApplicationRoutes.Services
        },
        {
            text: 'Blog',
            link: ApplicationRoutes.Blog
        },
        {
            text: 'Contact Us',
            link: ApplicationRoutes.Contact
        }
    ];

    return (
        <motion.div className="fixed w-full h-full bg-white top-0 left-0 lg:hidden" variants={mobileMenuVariant({ direction: "fromRight" })}>
            <div className={`flex flex-row justify-between items-center p-4 bg-white relative ${sectionPadding}`}>
                <Link href={ApplicationRoutes.Home}>
                    <div
                        className="w-[137px] h-[50px] relative"
                        onClick={() => {
                            setMobileNavIsvisible(false);
                        }}
                    >
                        <CustomImage className='object-contain' src={images.logo} alt="McNif Logo" />
                    </div>
                </Link>
                <span
                    className="items-center justify-center cursor-pointer lg:hidden"
                    onClick={() => setMobileNavIsvisible(false)}
                >
                    <Icons.CloseIcon />
                </span>
            </div>

            <motion.div variants={ulVariant} className="flex flex-col items-end p-4 gap-7">
                {
                    navLinks.map((navLink, index) => (
                        <Link key={index} href={navLink.link} onClick={() => setMobileNavIsvisible(false)}
                            {...(navLink.text === 'Blog' ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        >
                            <motion.span variants={liVariant} className={navLinkStyle(pathname == navLink.link)} key={index}>
                                {navLink.text}
                            </motion.span>
                        </Link>
                    ))
                }
                <div className="flex flex-col items-end gap-3">
                    <Link href='/buffet' onClick={() => setMobileNavIsvisible(false)}>
                        <Button children="Book a Buffet" className='text-sm' />
                    </Link>
                    <Link href='/order' onClick={() => setMobileNavIsvisible(false)}>
                        <Button children="Order Food" className='text-sm !bg-transparent !text-mcNif-dark-grey !border-2 !border-mcNif-dark-grey border-collapse box-border hover:!bg-gray-200/50' />
                    </Link>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default MobileNavMenu;