import React from 'react'
import { sectionPadding } from '../styles/styles'
import Image from 'next/image'
import images from '@/public/images'

type Props = {}

const DigtalSection = (props: Props) => {
    return (
        <section className={`${sectionPadding} mb-20`}>
            <div className="grid md:grid-cols-2 gap-8 md:gap-20 items-center max-w-6xl mx-auto">
                <div className="space-y-6">
                    <div>
                        <h3 className="text-xl md:text-2xl font-semibold mb-4">
                            <span className="">3.</span> Digitalize your
                            <br />
                            Event Invitations and RSVPs
                        </h3> 
                        <p className="text-[#666666] leading-relaxed">
                        Simplify the invitation process with digital invites that can be shared via email, social media, or messaging apps. Guests can RSVP instantly, and.... you can track responses in real time.
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
                        src={images.group_img}
                        alt="Wedding website template preview"
                        fill
                        className="object-contain"
                    />
                </div>
            </div>
        </section>
    )
}

export default DigtalSection