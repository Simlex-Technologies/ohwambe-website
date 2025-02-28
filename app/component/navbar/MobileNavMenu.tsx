import { ApplicationRoutes } from "@/app/constants/applicationRoutes"
import Link from "next/link"
import { Dispatch, FunctionComponent, ReactElement, SetStateAction } from "react"
import CustomImage from "../ui/image"
import images from "@/public/images"
import { Icons } from "../ui/icons"
import { navLinkStyle, sectionPadding } from "@/app/styles/styles"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { liVariant, mobileMenuVariant, ulVariant } from "@/app/animations/navbarAnimations"

interface MobileNavMenuProps {
    setMobileNavIsVisible: Dispatch<SetStateAction<boolean>>
}

const MobileNavMenu: FunctionComponent<MobileNavMenuProps> = ({ setMobileNavIsVisible }): ReactElement => {

    const pathname = usePathname()

    const navLinks = [
        {
            text: 'Home',
            link: ApplicationRoutes.Home
        },
        {
            text: 'Pricing',
            link: ApplicationRoutes.Pricing
        }

    ]

    return (
        <motion.div className="fixed w-full h-full bg-black top-0 left-0 md:hidden" variants={mobileMenuVariant({ direction: "fromRight" })}>
            <div className={`flex flex-row justify-between items-center p-4 bg-white relative ${sectionPadding}`}>
                <Link href={ApplicationRoutes.Home}>
                    <div
                        className="w-[137px] h-[50px] relative"
                        onClick={() => {
                            setMobileNavIsVisible(false)
                        }}
                    >
                        <CustomImage className='object-contain' src={images.logo} alt="McNif Logo" />
                    </div>
                </Link>
                <span
                    className="items-center absolute right-8 -bottom-12 justify-center hover:bg-secondary rounded-full p-2 cursor-pointer md:hidden"
                    onClick={() => setMobileNavIsVisible(false)}
                >
                    <Icons.Close />
                </span>
            </div>

            <motion.div variants={ulVariant} className="flex flex-col items-center p-20 gap-7">
                {
                    navLinks.map((navLink, index) => (
                        <Link key={index} className="text-white" href={navLink.link} onClick={() => setMobileNavIsVisible(false)}
                        >
                            <motion.span variants={liVariant} className={navLinkStyle(pathname == navLink.link)} key={index}>
                                {navLink.text}
                            </motion.span>
                        </Link>
                    ))
                }
                <div className="flex flex-col items-end gap-7">
                    <Link href='/signup' onClick={() => setMobileNavIsVisible(false)}>
                        <button className='bg-secondary text-white hover:bg-secondary text-white/80 px-10 rounded-full py-2' title="Sign up" children="Sign up" />
                    </Link>
                    <Link href='/login' onClick={() => setMobileNavIsVisible(false)}>
                        <button title="Login" children=" Login" className='text-white border border-white rounded-full py-2 px-10' />
                    </Link>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default MobileNavMenu