'use client'
import React, { useRef, useState } from 'react'
import { Testimony } from '../models/ITestimony';
import images from '@/public/images';
import { sectionPadding, testimonyIconButtonStyle } from '../styles/styles';
import { Icons } from '../component/ui/icons';
import Testimonial from '../component/cards/Testimonial';

type Props = {}

const TestimonialSection = (props: Props) => {

    const data: Testimony[] = [
        {
             image: images.testimonial,
            name: 'Janet Akinloye',
            text: "Ohwambe made planning my wedding so easy and fun! The personalized website and digital invitations were a huge hit with our guests, and the QR code check-in saved us from wide uninvited guests. I can’t imagine planning another event without it!",
            reviewLink: 'https://example.com/review', // add this property
            ratingNumber: 5, // add this property
        },
        {
            image: images.testimonial,
            name: 'David Chuks',
            text: "I used Ohwambe to plan my 40th birthday party, and it was amazing! The interactive map feature ensured all my guests found the venue easily, and the secure payment option allowed them to send monetary gifts seamlessly. What a fantastic platform!",
            reviewLink: 'https://example.com/review', // add this property
            ratingNumber: 5, // add this property
        },
        {
            image: images.testimonial2,
            name: 'Jennifer Sina',
            text: "I loved how Owambe made it simple to design and share beautiful invitation cards. The analytics feature also helped me track RSVPs and ensure everyone was accounted for. Such a lifesaver for busy hosts!",
            reviewLink: 'https://example.com/review', // add this property
            ratingNumber: 5, // add this property
        },
        {
            image: images.testimonial3,
            name: 'Yasmine Yvonne',
            text: "The salad is fresh!!! Don't ask about the sauce again, it's really delicious, it's going to be routine. I recommend this salad to all of you guys! because they really take care of the quality.",
            reviewLink: 'https://example.com/review', // add this property
            ratingNumber: 5, // add this property
        }
    ];

    // Ref for the testimonial container
    const testimonialsRef = useRef<HTMLDivElement>(null);

    /**
     * Function to scroll the testimonial container
     * @param position - The position to scroll the testimonial container to
     */
    function scrollTestimonialContainer(position: 'left' | 'right') {
        if (position == 'left') {
            testimonialsRef?.current?.scroll({
                left: (testimonialsRef.current.scrollLeft -= 280),
                behavior: 'smooth',
            });
        }
        if (position == 'right') {
            testimonialsRef?.current?.scroll({
                left: (testimonialsRef.current.scrollLeft += 280),
                behavior: 'smooth',
            });
        }
    };

    return (
        <section className={`${sectionPadding} py-16 bg-primary/20 `}>
            <div className='flex flex-col md:flex-row gap-10'>
                <div className="flex-1">
                    <h3 className='font-semibold text-2xl lg:text-3xl mb-5 text-black'>Testimonials</h3>
                    <p className='text-sm text-[#666666] leading-6 mb-5'>At Ohwambe, we’re passionate about helping you create unforgettable celebrations with ease. These testimonials showcase how we have transformed event planning into a seamless and enjoyable experience for everyone involved. From weddings to birthdays and beyond, see how Ohwambe is making every celebration extraordinary.</p>

                    <div className="flex items-center gap-6">
                        <span className={testimonyIconButtonStyle} onClick={() => scrollTestimonialContainer('left')}><Icons.LeftArrowIcon /></span>
                        <span className={testimonyIconButtonStyle} onClick={() => scrollTestimonialContainer('right')}><Icons.RightArrowIcon /></span>
                    </div>
                </div>
                <div ref={testimonialsRef} className="flex overflow-x-auto hideScrollBar flex-row gap-6 flex-[2] pt-10">
                    {
                        data.map((testimony, index) => (
                            <Testimonial key={index} testimony={testimony} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default TestimonialSection