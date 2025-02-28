import images from '@/public/images'
import Image from 'next/image'
import React from 'react'
import { sectionPadding } from '../styles/styles'

type Props = {}

const SupportSection = (props: Props) => {
   return (
         <section className={`${sectionPadding} mb-20`}>
                 <div className="grid md:grid-cols-2 gap-8  items-center max-w-6xl mx-auto">
 
                     <div className="relative h-[400px] md:w-[438px] md:h-[355px] order-2 md:order-1">
                         <Image
                             src={images.support}
                             alt="Wedding website template preview"
                             fill
                             className="object-contain"
                         />
                     </div>
                     <div className="space-y-6 order-1 md:order-2">
                         <div>
                             <h3 className="text-xl md:text-2xl font-semibold mb-4">
                                 <span className="">4.</span>  Verify Invitations at the Venue 
                                 <br />
                                 with QR Code Guest Verification
                             </h3>
                             <p className="text-[#666666] leading-relaxed">
                             Ensure a smooth check-in experience at your event. Guests receive a unique QR code with their invitation, which can be scanned at the venue to..... manage crowd at your wedding.
                             </p>
                         </div>
                         <div>
                             <button className="bg-[#C69D66] hover:bg-[#C69D66]/90 text-white rounded-full px-8 py-2.5">
                                 Start Creating
                             </button>
                         </div>
                     </div>
                 </div>
         </section>
     )
}

export default SupportSection