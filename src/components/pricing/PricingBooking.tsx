import React from 'react';
import { Row, Col, Button } from 'antd';

const PricingBookingSection = () => {
  return (
    <section className="bg-[#f3fce1] py-10 border border-b-[#9cd161]">
      
      <div className="container mx-auto px-4">
        {/* Heading Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-black">
            Modified plans and pricing as per your need
          </h2>
          <div className="w-full h-[1px] bg-gradient-to-l from-[#ff7f5c] via-[#9cd161] to-[#3734a9] rounded-[0.125rem] mx-auto mt-2"></div>

        </div>

        {/* Content Section */}
        <Row gutter={[16, 16]} className="mt-5 mb-5">
          {/* Image Section */}
          <Col xs={24} lg={6}>
            <div className="bg-contain bg-center bg-no-repeat h-[250px] w-full" style={{ backgroundImage: `url('https://duoinn.com/easyslotbooking/assets/images/pricing/booking_clipart.svg')` }}></div>
          </Col>

          {/* Text Points Section */}
          <Col xs={24} lg={12}>
          <p className="text-[1.0625rem] leading-[1.875rem] font-light text-black mb-6">
  Created for large-scale clients group who are willing to get benefit from dedicated features, custom onboarding and regular notifications.
</p>

<ul className="list-none flex flex-wrap w-full p-0">
  <li className="flex items-center w-1/2 mb-2">
    <img src="https://duoinn.com/easyslotbooking/assets/images/pricing/green-tick.svg" alt="tick" className="w-6 h-6 mr-3" />
    <span className="text-black">Dedicated onboarding</span>
  </li>
  <li className="flex items-center w-1/2 mb-2">
    <img src="https://duoinn.com/easyslotbooking/assets/images/pricing/green-tick.svg" alt="tick" className="w-6 h-6 mr-3" />
    <span className="text-black">Custom features</span>
  </li>
  <li className="flex items-center w-1/2 mb-2">
    <img src="https://duoinn.com/easyslotbooking/assets/images/pricing/green-tick.svg" alt="tick" className="w-6 h-6 mr-3" />
    <span className="text-black">Personalized plans</span>
  </li>
  <li className="flex items-center w-1/2 mb-2">
    <img src="https://duoinn.com/easyslotbooking/assets/images/pricing/green-tick.svg" alt="tick" className="w-6 h-6 mr-3" />
    <span className="text-black">Unique pricing</span>
  </li>
  <li className="flex items-center w-1/2 mb-2">
    <img src="https://duoinn.com/easyslotbooking/assets/images/pricing/green-tick.svg" alt="tick" className="w-6 h-6 mr-3" />
    <span className="text-black">Custom limits</span>
  </li>
  <li className="flex items-center w-1/2 mb-2">
    <img src="https://duoinn.com/easyslotbooking/assets/images/pricing/green-tick.svg" alt="tick" className="w-6 h-6 mr-3" />
    <span className="text-black">Dedicated supported team</span>
  </li>
</ul>

          </Col>

          {/* Button Section */}
          <Col xs={24} lg={6} className="flex items-center justify-center">
            <Button type="primary" className="bg-[#0029db] text-white text-lg font-semibold px-8 py-3 hover:bg-[#001fb3]">
              Book Now
            </Button>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default PricingBookingSection;
