import React from 'react'
import { HeroSection } from '../../components/new-landingPage/HeroSection'
import { WhySection } from '../../components/new-landingPage/WhySection'
import { HowItWorksSection } from '../../components/new-landingPage/HowItWorksSection'
import { KeyFeaturesSection } from '../../components/new-landingPage/KeyFeatures'

export const HomePage = () => {
    return (
        <div className="bg-[#FDFDFD] min-h-screen">
            <HeroSection />
            <WhySection />
            <HowItWorksSection />
            <KeyFeaturesSection />

        </div>
    )
}
