// src/components/FeatureHighlights.tsx
import React from 'react';
import FeatureCard from '../website/FeatureCard';
const FeatureHighlights: React.FC = () => {

  // Example icon placeholder (replace with actual SVG or image component)
const ExampleIcon = (
  <img
    src="https://via.placeholder.com/50" // Replace with your actual icon URL or component
    alt="icon"
    className="w-12 h-12"
  />
);
  return (
    <section className='why_esbooking'>
       <div className='container'>
      <h6 className="section_heading">Why ES Booking</h6>
      <h2 className="my-3 font-normal max-w-[300px]">
                        Visa slot booking made easier with ES Booking
                    </h2>


                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
  <FeatureCard
    icon={"https://duoinn.com/easyslotbooking/assets/images/icons/network-icn.svg"}
    title="Engage your customers dramatically"
    items={[
      '24/7 Customer support',
      'Most user friendly interface',
      'Extensions available for all major browsers',
    ]}
    backgroundColor="bg-white"
  />
  <FeatureCard
    icon={"https://duoinn.com/easyslotbooking/assets/images/icons/folder-icn.svg"}
    title="Store and transfer our safe data account"
    items={[
      'Profitability Boost',
      '24/7 Customer Support',
      'Extensions available for all users of world',
    ]}
    backgroundColor="bg-blue" // Light blue background
  />
  <FeatureCard
    icon={"https://duoinn.com/easyslotbooking/assets/images/icons/lamp-icn.svg"}
    title="Estimate costs and increase productivity"
    items={[
      '24/7 Customer support',
      'Most user friendly interface',
      'Extensions available for all major browser',
    ]}
    backgroundColor="bg-white"
  />
</div>
    </div>
    </section>
   
  );
};

export default FeatureHighlights;