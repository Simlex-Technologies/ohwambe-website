import React from 'react'
import { sectionPadding } from '../styles/styles'
import Image from 'next/image'
import images from '@/public/images'

type Props = {}

const NavigateSection = (props: Props) => {
    return (
        <section className={`${sectionPadding} mb-20`}>
            <div className="grid md:grid-cols-2 gap-8 md:gap-20 items-center max-w-6xl mx-auto">
                <div className="space-y-6">
                    <div>
                        <h3 className="text-xl md:text-2xl font-semibold mb-4">
                            <span className="">7.</span> Real Time Map to 
                            <br />
                            Navigate your Guest to the Venue
                        </h3>
                        <p className="text-[#666666] leading-relaxed">
                        With interactive maps integrated into the platform, your guests can easily navigate to your event venue without the hassle of making phone calls for directions. These maps provide accurate details, including the venue location, nearby landmarks, parking areas, and even accommodations.
                        </p>
                    </div>
                    <div>
                        <button className="bg-[#C69D66] hover:bg-[#C69D66]/90 text-white rounded-full px-8 py-2.5">
                            Start Creating
                        </button>
                    </div>
                </div>

                <div className="relative h-[400px] md:w-[438px] md:h-[355px]">
                    <Image
                        src={images.smartphone}
                        alt="Wedding website template preview"
                        fill
                        className="object-contain"
                    />
                </div>
            </div>
        </section>
    )
}

export default NavigateSection