"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import images from "@/public/images";
import Image from "next/image";
import { sectionPseudoStyle } from "../styles/styles";
import Link from "next/link";

const HeroBanner = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Array of content for different event categories
  const content = [
    {
      title: "Weddings",
      description: (
        <p className="text-white">
          Your love story,<br /> 
          <span className="text-primary font-semibold">Perfectly Planned!</span>
        </p>
      ),
      buttonText: "Get Started",
      image: images.hero_image1,
    },
    {
      title: "Birthdays",
      description: (
        <p className="text-white">
          Celebrate Another <br /> 
          <span className="text-primary font-semibold">Year in Style</span>
        </p>
      ),
      buttonText: "Get Started",
      image: images.hero_image2,
    },
    {
      title: "Funerals",
      description: (
        <p className="text-white">
          A Heartfelt Goodbye, <br /> 
          <span className="text-primary font-semibold">Beautifully Arranged</span>
        </p>
      ),
      buttonText: "Explore",
      image: images.hero_image3,
    },
    {
      title: "Corporate Events",
      description: (
        <p className="text-white">
          From Boardrooms <br /> 
          <span className="text-primary font-semibold">to Ballrooms</span>
        </p>
      ),
      buttonText: "Explore",
      image: images.hero_image4,
    },
    {
      title: "Anniversaries",
      description: (
        <p className="text-white">
          Celebrate the Years <br /> 
          <span className="text-primary font-semibold">Relive the Memories</span>
        </p>
      ),
      buttonText: "Explore",
      image: images.hero_image5,
    },
    {
      title: "Housewarming",
      description: (
        <p className="text-white">
          Welcome Home, <br /> 
          <span className="text-primary font-semibold">Celebrate Big</span>
        </p>
      ),
      buttonText: "Explore",
      image: images.hero_image6,
    },
  ];

  // Auto-rotate slider every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % content.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  /**
   * Mobile version of the hero banner
   */
  const MobileVersion = () => (
    <div className="block md:hidden relative w-full h-screen overflow-hidden rounded-[20px]">
      <div
        className={`absolute inset-0 ${sectionPseudoStyle}`}
        style={{
          backgroundImage: `url('/images/hero_img.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "32px",
        }}
      >
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#070501E6] to-[#16140EE6]" />

        <div className="relative z-20 flex flex-col items-center px-4 pt-28">
          {/* Rotating Content */}
          <div className="w-full text-center">
            {content.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: activeIndex === index ? 1 : 0,
                  y: activeIndex === index ? 0 : 20,
                }}
                transition={{ duration: 0.5 }}
                className={`absolute w-full ${activeIndex === index ? "relative" : "hidden"}`}
              >
                <h1 className="text-sm font-bold mb-4 bg-[#4F4127] text-[#FFD07B] py-1 px-4 rounded-full w-fit mx-auto">
                  {item.title}
                </h1>
                <div className="text-2xl mb-6">{item.description}</div>
                <button className="px-6 py-2 bg-primary text-gray-900 rounded-full font-medium hover:bg-primary/50 transition-colors mb-8">
                  {item.buttonText}
                </button>
              </motion.div>
            ))}
          </div>

          {/* Image Slider */}
          <div className="w-full h-[300px] relative mt-4 flex justify-center">
            {content.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: activeIndex === index ? 1 : 0,
                  scale: activeIndex === index ? 1 : 0.8,
                }}
                transition={{ duration: 0.5 }}
                className="absolute w-full h-[240px] overflow-hidden rounded-lg"
              >
                <Image
                  src={item.image}
                  alt={`Slide ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  priority={index === 0} // Ensure the first image loads immediately
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  /**
   * Desktop version of the hero banner
   */
  const DesktopVersion = () => (
    <div className="hidden md:block relative w-full h-[550px] overflow-hidden rounded-[20px]">
      <div
        className={`absolute inset-0 ${sectionPseudoStyle}`}
        style={{
          backgroundImage: `url('/images/hero_img.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "32px",
        }}
      >
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#6e6a61e6] via-[#323029e6] to-[#2e2c27e6]" />

        <div className="relative z-20 max-w-6xl mx-auto h-full flex items-center pb-12">
          {/* Text Content */}
          <div className="w-1/2 p-8">
            {content.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{
                  opacity: activeIndex === index ? 1 : 0,
                  y: activeIndex === index ? 0 : 50,
                }}
                transition={{ duration: 0.5 }}
                className={`absolute ${activeIndex === index ? "block" : "hidden"}`}
              >
                <h1 className="text-sm font-bold mb-4 bg-[#4F4127] text-[#FFD07B] py-1 px-4 rounded-full w-fit">
                  {item.title}
                </h1>
                <h2 className="text-gray-300 mb-6 text-5xl">{item.description}</h2>
                <Link href="/contact" className="px-6 py-2 bg-primary text-gray-900 rounded-full font-medium hover:bg-primary/50 transition-colors">
                  {item.buttonText}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Image Slider */}
          <div className="w-1/2 relative">
            {content.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -50 }}
                animate={{
                  opacity: activeIndex === index ? 1 : 0,
                  y: activeIndex === index ? 0 : -50,
                  scale: activeIndex === index ? 1 : 0.8,
                }}
                transition={{ duration: 0.5 }}
                className="absolute right-6 w-full overflow-hidden rounded-lg"
              >
                <Image
                  src={item.image}
                  alt={`Slide ${index + 1}`}
                  width={600}
                  height={400}
                  objectFit="cover"
                  priority={index === 0}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <MobileVersion />
      <DesktopVersion />
    </>
  );
};

export default HeroBanner;
