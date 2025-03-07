import React from 'react';
import Herosection from './HeroSection';
import Stats from './Stats';
import Heighlight from './Heighlight';
import Slot from './Slot';
import Visa from './VisaSection';
import Management from './Management';
import Customer from './Customer';
import Testimonials from './Testimonials';

export default function Booking() {
  return (
    <div>
      <Herosection />
      <Stats />
      <Heighlight />
      <Slot />
      <Visa />
      <Management />
      <Customer />
      <Testimonials />
    </div>
  );
}
