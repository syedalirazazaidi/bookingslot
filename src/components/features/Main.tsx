import React from 'react'
import Banner from './Banner'
import HeroSection from './HeroSection'
import HeroSectionFeatres from './HeroSection_features'
import SupportSection from './Support'
import CountrySection from './CountrySection'

export default function Feature() {
    return (
        <div>
            <HeroSection/>
            <HeroSectionFeatres/>
            <SupportSection/>
            <CountrySection/>
            <Banner/>
        </div>
    )
}
