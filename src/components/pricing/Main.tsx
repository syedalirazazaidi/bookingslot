import React from 'react';
import HeroSection from './HeroSection';
import TestimonialSection from './TestimonialSection';
import Faq from './Faq';
import PricingBookingSection from './PricingBooking';

export default function Pricing() {
  return (
    <div>
      <HeroSection />
      <PricingBookingSection />

      
      <Faq />
      <TestimonialSection />
    </div>
  );
}
