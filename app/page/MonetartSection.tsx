import images from '@/public/images'
import Image from 'next/image'
import React from 'react'
import { sectionPadding } from '../styles/styles'

type Props = {}

const MonetarySection = (props: Props) => {
    return (
        <section className={`${sectionPadding} mb-20`}>
            <div className="grid md:grid-cols-2 gap-8 md:gap-20 items-center max-w-6xl mx-auto">
                <div className="space-y-6">
                    <div>
                        <h3 className="text-xl md:text-2xl font-semibold mb-4">
                            <span className="">5.</span> Receive Monetary
                            <br />
                            Supports For Your Event
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            Allow guests to support your celebration with monetary gifts. Ohwambe offers a secure payment feature, enabling loved ones to contribute directly through your event website.
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
                        src={images.support1}
                        alt="Wedding website template preview"
                        fill
                        className="object-contain"
                    />
                </div>
            </div>
        </section>
    )
}

export default MonetarySection