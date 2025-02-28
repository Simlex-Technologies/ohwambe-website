import Image from "next/image"
import images from "@/public/images"
import { div } from "framer-motion/client"
import { sectionPadding } from "../styles/styles"

export default function FeatureSection() {
    return (
        <section className={`${sectionPadding} mb-5 md:mb-20`}>
            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-semibold">
                    <span className="text-secondary">What You Can Do</span> On
                        <br />
                        Ohwambe
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 md:gap-20  items-center max-w-6xl mx-auto">
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl md:text-2xl font-semibold mb-4">
                                <span className="">1.</span> Craft the Perfect
                                <br />
                                Website for Your Event!
                            </h3>
                            <p className="text-[#666666] leading-relaxed">
                                Create customized event websites with ease! Select from beautifully designed templates and input details
                                like event name, date, time, venue, and more. Add personal touches like photos, videos, and messages to
                                share your unique celebration with guests.
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
                            src={images.feature1}
                            alt="Wedding website template preview"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

