import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import images from '@/public/images';
import Image from 'next/image';
import { sectionPseudoStyle } from '../styles/styles';

const HeroBanner = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const content = [
        {
            title: "Weddings",
            description: <p className='text-white'>Your love story,<br /> <span className='text-primary font-semibold'>Perfectly Planned!</span></p>,
            buttonText: "Get Started",
            image: images.hero_image1
        },
        {
            title: "Birthdays",
            description: <p className='text-white'>Celebrate Another <br /> <span className='text-primary font-semibold'>Year in Style</span></p>,
            buttonText: "Get Started",
            image: images.hero_image2
        },
        {
            title: "Funerals",
            description: <p className='text-white'>A Heartfelt Goodbye, <br /> <span className='text-primary font-semibold'>Beautifully Arranged</span></p>,
            buttonText: "Explore",
            image: images.hero_image3
        },
        {
            title: "Corperate Events",
            description: <p className='text-white'>From Boardrooms <br /> <span className='text-primary font-semibold'>to Ballrooms</span></p>,
            buttonText: "Explore",
            image: images.hero_image4
        },
        {
            title: "Anniversaries",
            description: <p className='text-white'>Celebrate the Years <br /> <span className='text-primary font-semibold'>Relive the Memories</span></p>,
            buttonText: "Explore",
            image: images.hero_image5
        },
        {
            title: "Housewarming",
            description: <p className='text-white'>Welcome Home, <br /> <span className='text-primary font-semibold'>Celebrate Big</span></p>,
            buttonText: "Explore",
            image: images.hero_image6
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % content.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    // Mobile Version
    const MobileVersion = () => (
        <div className="block md:hidden relative w-full h-screen overflow-hidden rounded-t-[20px] rounded-b-[20px]">
            <div
                className={`absolute inset-0 !rounded-3xl ${sectionPseudoStyle}`}
                style={{
                    backgroundImage: `url('/images/hero_img.png')`,
                    backgroundSize: 'cover',
                    borderRadius: '32px',
                    overflow: 'hidden',
                    backgroundPosition: 'center',
                }}
            >
                <div
                    className="absolute inset-0 z-10"
                    style={{
                        background: 'linear-gradient(to bottom, rgba(7, 5, 1, 0.9), rgba(22, 20, 14, 0.85))'
                    }}
                />
                <div className="relative z-20 flex flex-col items-center px-4 pt-28">
                    {/* Content */}
                    <div className="w-full text-center">
                        {content.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{
                                    opacity: activeIndex === index ? 1 : 0,
                                    y: activeIndex === index ? 0 : 20
                                }}
                                transition={{ duration: 0.5 }}
                                className={`${activeIndex === index ? 'relative' : 'absolute'} w-full`}
                            >
                                <h1 className="text-sm font-bold mb-4 rounded-full bg-[#4F4127] text-center py-1 text-[#FFD07B] w-fit px-4 mx-auto">
                                    {item.title}
                                </h1>
                                <div className="text-2xl mb-6">
                                    {item.description}
                                </div>
                                <button className="px-6 py-2 bg-primary text-gray-900 rounded-full font-medium hover:bg-primary/50 transition-colors mb-8">
                                    {item.buttonText}
                                </button>
                            </motion.div>
                        ))}
                    </div>
                    
                    {/* Images */}
                    <div className="w-full h-[300px] relative mt-4">
                        {content.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{
                                    opacity: activeIndex === index ? 1 : 0,
                                    scale: activeIndex === index ? 1 : 0.8
                                }}
                                transition={{ duration: 0.5 }}
                                className="absolute left-1/4 -translate-x-1/2 rounded-lg overflow-hidden"
                            >
                                <Image
                                    src={item.image}
                                    alt={`Slide ${index + 1}`}
                                    className="w-full h-[240px] object-cover"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );

    // Desktop Version
    const DesktopVersion = () => (
        <div className="hidden md:block relative w-full h-[550px] overflow-hidden rounded-t-[20px] rounded-b-[20px]">
            <div
                className={`absolute inset-0 !rounded-3xl ${sectionPseudoStyle}`}
                style={{
                    backgroundImage: `url('/images/hero_img.png')`,
                    backgroundSize: 'cover',
                    borderRadius: '32px',
                    overflow: 'hidden',
                    backgroundPosition: 'center',
                }}
            >
                <div
                    className="absolute inset-0 z-10"
                    style={{
                        background: 'linear-gradient(to right, rgba(7, 5, 1, 0.9), rgba(22, 20, 14, 0.85), rgba(49, 47, 43, 0.75))'
                    }}
                />
                <div className="relative z-20 max-w-6xl mx-auto h-full flex items-center">
                    <div className="w-1/2 p-8">
                        {content.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{
                                    opacity: activeIndex === index ? 1 : 0,
                                    y: activeIndex === index ? 0 : 50
                                }}
                                transition={{ duration: 0.5 }}
                                className={`absolute ${activeIndex === index ? 'block' : 'hidden'}`}
                            >
                                <h1 className="text-sm font-bold mb-4 rounded-full bg-[#4F4127] text-center py-1 text-[#FFD07B] w-fit px-4">
                                    {item.title}
                                </h1>
                                <h2 className="text-gray-300 mb-6 text-5xl">
                                    {item.description}
                                </h2>
                                <button className="px-6 py-2 bg-primary text-gray-900 rounded-full font-medium hover:bg-primary/50 transition-colors">
                                    {item.buttonText}
                                </button>
                            </motion.div>
                        ))}
                    </div>

                    <div className="w-1/2 relative">
                        {content.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: -50 }}
                                animate={{
                                    opacity: activeIndex === index ? 1 : 0,
                                    y: activeIndex === index ? 0 : -50,
                                    scale: activeIndex === index ? 1 : 0.8
                                }}
                                transition={{ duration: 0.5 }}
                                className="absolute right-6 rounded-lg overflow-hidden"
                                style={{
                                    transformOrigin: 'center right',
                                }}
                            >
                                <Image
                                    src={item.image}
                                    alt={`Slide ${index + 1}`}
                                    className="w-[600px] h-full object-cover"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <>
            <MobileVersion />
            <DesktopVersion />
        </>
    );
};

export default HeroBanner;