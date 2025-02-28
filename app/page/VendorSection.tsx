import images from '@/public/images'
import Image from 'next/image'
import React from 'react'
import { sectionPadding } from '../styles/styles'

type Props = {}

const VendorSection = (props: Props) => {
    return (
        <section className={`${sectionPadding} mb-20`}>
            <div className="grid md:grid-cols-2 gap-8  items-center max-w-6xl mx-auto">

                <div className="relative h-[400px] md:w-[438px] md:h-[355px] order-2 md:order-1">
                    <Image
                        src={images.support2}
                        alt="Wedding website template preview"
                        fill
                        className="object-contain"
                    />
                </div>
                <div className="space-y-6 order-1 md:order-2">
                    <div>
                        <h3 className="text-xl md:text-2xl font-semibold mb-4">
                            <span className="">6.</span>  Get All the Vendors You need
                            <br />
                            For your Event in One Place
                        </h3>
                        <p className="text-[#666666] leading-relaxed">
                        Find and book trusted event professionals in one place. Owambe connects you with caterers, photographers, DJs, event planners, and more. Each vendor profile includes ratings, reviews, and portfolio examples to help you make informed decisions.
                        </p>
                    </div>
                    <div>
                        <button className="bg-[#DBC9A9] hover:bg-[#DBC9A9]/90 text-black rounded-full px-8 py-2.5">
                           Coming Soon
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VendorSection