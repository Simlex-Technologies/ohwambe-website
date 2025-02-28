import images from "@/public/images"
import Image from "next/image"
import { sectionPadding } from "../styles/styles"
import { motion } from "framer-motion"

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
}

const imageVariants = {
  hidden: { opacity: 0, rotate: -10 },
  visible: { opacity: 1, rotate: 0, transition: { duration: 0.8 } }
}

export default function CelebrationSection() {
  return (
    <section className={`${sectionPadding} mb-20`}>
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16 lg:py-20">
        <motion.h2
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="text-3xl md:text-4xl font-medium tracking-tight text-center mb-16"
        >
          Celebrate <span className="text-secondary">Life's Moments </span> <br /> in Style
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={imageVariants}
            className="relative md:w-[450px] h-[300px]"
          >
            <div className="absolute inset-0 bg-white rounded-lg shadow-lg transform -rotate-6">
              <div className="absolute inset-0 p-3">
                <Image
                  src={images.celebration}
                  alt="Celebratory drink"
                  fill
                  className="object-cover rounded-md md:w-[400px] h-[300px]"
                  priority
                />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="space-y-4"
          >
            <span className="text-gray block leading-relaxed">
              Every celebration deserves to be remembered and filled with style that makes your story uniquely yours. From
              intimate gatherings to grand celebrations, we're here to make every moment special. Let us help you create
              the perfect setting for your next celebration.
            </span>
            <p className="text-gray leading-relaxed">
              We believe in the details that make each moment memorable. Through our carefully curated selection of
              premium products and services, we ensure your celebration reflects your personal style while creating
              lasting memories.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}