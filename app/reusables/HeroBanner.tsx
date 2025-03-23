'use client'
import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { sectionPadding } from '@/app/styles/styles'

type Props = {
    image: StaticImageData
    text: React.JSX.Element | string
    subTitle?: React.JSX.Element | string
}

const HeroBanner = ({ image, text, subTitle }: Props) => {
    return (
        <div className='relative grid place-items-center mb-14 md:mb-20 min-h-[350px]'>
            {/* Overlay */}
            <div className="absolute w-full h-full bg-black/60 z-10">
            </div>

            <div className='absolute w-full h-full'>
                <Image
                    src={image}
                    alt='hero image'
                    className='object-cover w-full h-full z-5'
                />
            </div>

            {/* Text content */}
            <div className={`${'absolute bottom-28 font-semibold text-center text-2xl lg:text-4xl z-20 text-primary'} ${sectionPadding}`}>
                {text}
               <p className='text-lg font-semibold mt-2 '>{subTitle}</p> 
            </div>
        </div>
    )
}

export default HeroBanner
