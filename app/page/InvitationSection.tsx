import React from 'react'
import { sectionPadding } from '../styles/styles'
import Image from 'next/image'
import images from '@/public/images'

type Props = {}

const InvitationSection = (props: Props) => {
    return (
        <section className={`${sectionPadding} mb-20`}>
            <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
                <div className="order-1 md:order-2 space-y-6">
                    <div>
                        <h3 className="text-xl md:text-2xl font-semibold mb-4">
                            <span className="">2.</span>  Express your Style in
                            <br />
                            Your Invitation Card Design
                        </h3>
                        <p className="text-[#666666] leading-relaxed">
                            Design stunning invitation cards with ease. Choose from an array of professionally designed templates, customize them with your event details, and share the invitations digitally or print them for physical use.
                        </p>
                    </div>
                    <div>
                        <button className="bg-[#C69D66] hover:bg-[#C69D66]/90 text-white rounded-full px-8 py-2.5">
                            Start Creating
                        </button>
                    </div>
                </div>
                <div className="relative h-[400px] md:w-[438px] md:h-[355px] order-2 md:order-1">
                    <Image
                        src={images.feature2}
                        alt="Wedding website template preview"
                        fill
                        className="object-contain"
                    />
                </div>
            </div>
        </section>
    )
}

export default InvitationSection