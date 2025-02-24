import React from 'react';
import { sectionPadding } from '../styles/styles';
import Image from 'next/image';
import images from '@/public/images';

const WaitListSection = () => {
    return (
        <section className={`${sectionPadding} mb-20`}>
            <div className="flex items-center justify-center p-4">
                <div className="relative w-full rounded-3xl overflow-hidden">
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src={images.wait_list}
                            alt="Palm trees background"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 p-6 md:p-10">
                        {/* Top Button */}
                        <div className="flex justify-center items-center mb-8">
                            <button className="py-2 px-4 rounded-full text-sm font-semibold shadow-lg text-black bg-white hover:bg-white/90">
                                Join Our Waitlist
                            </button>
                        </div>

                        {/* Main Content */}
                        <div className="max-w-2xl mx-auto text-center space-y-6">
                            <h1 className="text-2xl md:text-4xl font-bold text-secondary">Be the First to Experience Ohwambe!</h1>

                            <p className="text-white/90 text-sm md:text-base md:w-[600px] m-auto">
                                We're working hard to bring you the ultimate platform for planning and celebrating life's most memorable
                                events. By joining our waitlist, you'll get exclusive early access and updates before anyone else.
                            </p>

                            {/* Form */}
                            <div className="flex flex-col items-center justify-center sm:flex-row gap-3 max-w-xl mx-auto mt-8 w-full">
                                <input
                                    type="email"
                                    placeholder="Enter email"
                                    className="w-full outline-none px-4 py-2.5 rounded-full bg-gradient-to-r from-white/5 to-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none "
                                />
                                <button className="w-full sm:w-auto text-nowrap px-6 py-2.5 rounded-full bg-secondary text-black font-medium hover:bg-[#F6B84B]/90 transition-colors duration-200">
                                    Join Waitlist
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WaitListSection;