"use client"

import { motion } from "framer-motion"
import { Icons } from "../component/ui/icons"
import Button from "../component/ui/button"
import HeroBanner from "../reusables/HeroBanner"
import images from "@/public/images"

const plans = [
    {
        name: "Basic",
        description: "Duis mauris ante proin et ultricis integer neque ultricis.",
        features: ["Felis", "Id sit et", "Sed pretium", "Scelerisque fermentum"],
        price: "100k",
        featured: false
    },
    {
        name: "Premium",
        description: "Duis mauris ante proin et ultricis integer neque ultricis.",
        features: ["Felis", "Id sit et", "Sed pretium", "Scelerisque fermentum"],
        price: "100k",
        featured: true
    },
    {
        name: "Gold",
        description: "Duis mauris ante proin et ultricis integer neque ultricis.",
        features: ["Felis", "Id sit et", "Sed pretium", "Scelerisque fermentum"],
        price: "100k",
        featured: false
    }
];
export default function PricingCards() {
    return (
        <section>

            <HeroBanner
                text="Pricing"
                image={images.contact_image} />

            <div className="flex items-center justify-center bg-gray-50 p-8 mb-20">
                <div className="grid md:grid-cols-3 grid-cols-1 gap-8 md:gap-0 w-full max-w-5xl">
                    {plans.map((plan, index) => (
                        <div
                            key={plan.name}
                            className={`${plan.featured ? '-mt-4' : ''}`}
                        >
                            <div className={`rounded-xl ${plan.featured ? 'bg-[#B08D57] ' : 'bg-white'
                                }`}
                            >
                                <div className="p-6">
                                    <h3 className="text-2xl font-semibold mb-10">{plan.name}</h3>
                                    <p className="text-lg opacity-80 mb-8">{plan.description}</p>

                                    <ul className="space-y-3 mb-10">
                                        {plan.features.map((feature) => (
                                            <li key={feature} className="flex items-center gap-2 text-lg">
                                                <div className={`flex items-center justify-center w-5 h-5 rounded-full ${plan.featured ? '' : 'bg-gray-100'
                                                    }`}>
                                                    <Icons.Check />
                                                </div>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="mt-auto">
                                        <div className="flex items-baseline gap-1 mb-4">
                                            <span className="text-2xl">₦</span>
                                            <span className="text-2xl font-semibold">{plan.price}</span>
                                            <span className="text-sm opacity-80">/ Month</span>
                                        </div>

                                        <button
                                            className={`w-1/2 py-2 px-4 rounded-full text-sm font-medium ${plan.featured
                                                    ? 'bg-white text-[#B08D57] hover:scale-95'
                                                    : 'bg-[#B08D57] text-[#fff] border border-[#B08D57] hover:scale-95'
                                                }`}
                                        >
                                            Get the plan
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

