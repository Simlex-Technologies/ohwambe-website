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
            name: 'Pricing',
            href: ApplicationRoutes.Pricing
        },
        {
            name: 'Features',
            href: ApplicationRoutes.Features
        },
        {
            name: 'Contact Us',
            href: ApplicationRoutes.Contact
        },
    ];

    return (
        <footer className="pt-8 bg-[#070501] text-white h-full">
            <div className={`${sectionPadding} flex flex-col lg:flex-row md:justify-between md:gap-8 lg:gap-12 grow`}>
                <div className="flex-1 mb-6 lg:mb-0">
                    <Link href='/' className=' w-fit'>
                        <div className='relative w-24'>
                            {/* <CustomImage src={images.} alt='ohwambe-logo' /> */}
                            <span className='text-2xl font-bold'>Ohwambe</span>
                        </div>
                    </Link>
                    <NewsLetterSubscription />
                </div>

                <div className="flex-1 mb-6 lg:mb-0">
                    <h3 className='mb-4 font-bold text-nowrap'>Quick Links</h3>
                    <ul className='flex flex-col gap-5 cursor-pointer text-sm text-nowrap'>
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

                <div className="flex-1 mb-6 lg:mb-0">
                    <h3 className='font-bold'>Get in Touch</h3>
                    <div className='flex flex-col items-start justify-start text-sm '>
                        <Link href='mailto:events@ohwambe.com' className='flex justify-center mr-20 mt-4 gap-2 hover:text-primary'>
                            <Icons.Email />
                            <p className='ml-2'>events@ohwambe.com</p>
                        </Link>
                        <Link href={'tel:+2349047495797'} className='flex items-center justify-center mr-32 mt-4 gap-2 hover:text-primary'>
                            <Icons.Phone />
                            <p className='ml-2'>+2349047495797</p>
                        </Link>
                    </div>
                </div>

                <div className="flex-1 mb-6 lg:mb-0">
                    <h3 className='font-bold'>Follow Us</h3>
                    <div className='flex place-items-start gap-4 mt-4 pb-4 text-sm'>
                        <Link href='https://x.com/' target='_blank' className='flex items-center'>
                            <Icons.X />
                        </Link>
                        <Link href='https://www.linkedin.com/' target='_blank' className='flex items-center'>
                            <Icons.Google />
                        </Link>
                        <Link href='https://www.instagram.com/' target='_blank' className='flex items-center'>
                            <Icons.Instagram />
                        </Link>
                        <Link href='https://www.facebook.com/' target='_blank' className='flex items-center'>
                            <Icons.Facebook />
                        </Link>
                        <Link href='https://g.page/r/' target='_blank' className='flex items-center'>
                            <Icons.Google />
                        </Link>
                        <Link href='' target='_blank' className='flex items-center'>
                            <Icons.Tiktok />
                        </Link>
                        <Link href='https://wa.me/message/' target='_blank' className='flex items-center'>
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
                    <Link href="" target='_blank'>Terms & Conditions</Link>
                    <Link href="" target='_blank'>Privacy Policy</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer