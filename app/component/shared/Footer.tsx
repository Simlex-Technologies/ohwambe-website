'use client'

import React from 'react'
import { sectionPadding } from '@/app/styles/styles'
import Link from 'next/link'
import CustomImage from '../ui/image'
import images from '@/public/images'
import { usePathname } from 'next/navigation'
import { ApplicationRoutes } from '@/app/constants/applicationRoutes'
import { Icons } from '../ui/icons'
import NewsLetterSubscription from './NewsLetterSubscription'

type Props = {}

const Footer = (props: Props) => {

    const navLinks = [
        {
            name: 'Home',
            href: ApplicationRoutes.Home
        },
        {
            name: 'About us',
            href: ApplicationRoutes.About
        },
        {
            name: 'Services',
            href: ApplicationRoutes.Services
        },
        {
            name: 'Blog',
            href: ApplicationRoutes.Blog
        },
        {
            name: 'Contact Us',
            href: ApplicationRoutes.Contact
        },
    ];

    return (
        <footer className="pt-8 bg-[#070501] text-white h-full">
            <div className={`${sectionPadding} flex flex-col lg:flex-row md:justify-between md:gap-4 lg:gap-4 grow`}>
                <div>
                    <Link href='/' className='mb-6 w-fit'>
                        <div className='relative w-24 h-14'>
                            <CustomImage src={images.logo} alt='Mcnif-logo' />
                        </div>
                    </Link>
                    <NewsLetterSubscription />
                </div>

                <div className='flex lg:mb-20'>
                    <div className='mb-6 '>
                        <h3 className='mb-4 font-bold'>Quick Links</h3>
                        <ul className='flex flex-col gap-2 cursor-pointer text-sm '>
                            {
                                navLinks.map((link, index) => (
                                    <Link href={link.href} key={index}>
                                        <li className='hover:text-primary'>
                                            {link.name}
                                        </li>
                                    </Link>
                                ))
                            }
                        </ul>
                    </div>
                </div>

                <div className='mb-6 flex flex-col place-items-start lg:-mt-22 '>
                    <h3 className='mb-6 font-bold'>Get in Touch</h3>
                    <div className='flex flex-col items-center text-sm '>
                        <Link href='https://www.google.com/maps/search/?api=1&query=31+-+32+Manchester+St,+B6+4HL+United+Kingdom' target='_blank' className='flex items-center justify-center gap-2 hover:text-primary'>
                            <Icons.Location />
                            <p className='ml-2 max-w-[230px] leading-6'>31-32 Manchester Street B6 4HL, United Kingdom</p>
                        </Link>
                        <Link href='mailto:info@mcnifcuisine.co.uk' className='flex justify-center mr-20 mt-4 gap-2 hover:text-primary'>
                            <Icons.Email />
                            <p className='ml-2'>info@mcnifcuisine.co.uk</p>
                        </Link>
                        <Link href={'tel:+447359543209'} className='flex items-center justify-center mr-32 mt-4 gap-2 hover:text-primary'>
                            <Icons.Phone />
                            <p className='ml-2'>+447359543209</p>
                        </Link>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <h3 className='font-bold'>Follow Us</h3>
                    <div className='flex place-items-start gap-4 mt-4 pb-4 text-sm'>
                        <Link href='https://x.com/Mcnifcuisine' target='_blank' className='flex items-center'>
                            <Icons.Twitter />
                        </Link>
                        <Link href='https://www.linkedin.com/company/mcnif-cuisine/' target='_blank' className='flex items-center'>
                            <Icons.Linkedin />
                        </Link>
                        <Link href='https://www.instagram.com/mcnif_cuisine/' target='_blank' className='flex items-center'>
                            <Icons.Instagram />
                        </Link>
                        <Link href='https://www.facebook.com/profile.php?id=61560046492815' target='_blank' className='flex items-center'>
                            <Icons.Facebook />
                        </Link>
                        <Link href='https://g.page/r/CbzKze4uT8yyEBM/review' target='_blank' className='flex items-center'>
                            <Icons.Google />
                        </Link>
                        {/* <Link href='' target='_blank' className='flex items-center'>
                            <Icons.Tiktok />
                        </Link> */}
                       <Link href='https://wa.me/message/I3HPMTE5AMT7A1' target='_blank' className='flex items-center'>
                            <Icons.Whatsapp />
                        </Link>
                    </div>
                </div>
            </div>
            <div className='mt-2 border-dotted border border-white md:mx-4'></div>
            <div className='flex flex-col-reverse md:flex-row items-center mt-2 justify-between text-sm gap-4 mx-4'>
                <div className='text-sm mt-4 flex items-center justify-center text-center mb-4'>
                    <p>&copy;{new Date().getFullYear()} Ohwambe</p>
                </div>
                <div className='flex items-center gap-20 md:items-center md:justify-between lg:gap-4 md:gap-4 mb-0'>
                    <Link href={ApplicationRoutes.TermsAndConditions} target='_blank'>Terms & Conditions</Link>
                    <Link href={ApplicationRoutes.PrivacyPolicy} target='_blank'>Privacy Policy</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer