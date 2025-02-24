"use client"
import React from 'react'
import HeroHero from './Herosection'
import HeroBanner from './Herosection'
import CelebrationSection from './CelebrationSection'
import WaitListSection from './WaitListSection'
import FeatureSection from './FeatureSection'
import InvitationSection from './InvitationSection'
import DigtalSection from './DigtalSection'
import SupportSection from './SupportSection'
import MonetarySection from './MonetartSection'
import VendorSection from './VendorSection'
import NavigateSection from './NavigateSection'
import TestimonialSection from './TestimonialSection'
import BlogSection from './BlogSection'

type Props = {}

const Homepage = (props: Props) => {
    return (
        <>
            <HeroBanner />
            <CelebrationSection />
            <WaitListSection />
            <FeatureSection />
            <InvitationSection />
            <DigtalSection />
            <SupportSection />
            <MonetarySection />
            <VendorSection />
            <NavigateSection />
            <TestimonialSection />
            <BlogSection />
        </>
    )
}

export default Homepage