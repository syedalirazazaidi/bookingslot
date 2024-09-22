import React from 'react';
import { Row, Col } from 'antd';
import 'tailwindcss/tailwind.css';

const countries = [
  {
    name: 'United States',
    imgSrc:
      'https://duoinn.com/easyslotbooking/assets/images/features/feat_united_states.png',
    alt: 'United States of America',
  },
  {
    name: 'Canada',
    imgSrc:
      'https://duoinn.com/easyslotbooking/assets/images/features/feat_canada.png',
    alt: 'Canada',
  },
  {
    name: 'Poland',
    imgSrc:
      'https://duoinn.com/easyslotbooking/assets/images/features/feat_poland.png',
    alt: 'Poland',
  },
];

const ChooseCountrySection = () => {
  return (
    <section className="choose_country text-white bg-[#1a1a3b] py-16">
      <div className="container mx-auto">
        <Row gutter={[16, 16]} className="flex items-center">
          {/* Left Content */}
          <Col 
  xs={24} 
  md={12} 
  lg={8} 
  className="font-sans text-center md:text-left flex flex-col justify-center items-center md:items-start"
>
  <div className="left_content">
    <h6 className="flex sm:justify-start justify-center font-poppins text-[0.9375rem] font-semibold text-[#ff5857] tracking-[0.01875rem] mb-2">
      Choose Country
    </h6>

    <h1 className="flex flex-wrap mt-6 font-poppins text-[1rem] md:text-[2rem] font-semibold leading-[3rem] text-white">
      Apply for a quick Immigration for your preferred country
    </h1>
  </div>
</Col>


          {/* Right Content */}
          <Col
  xs={24}
  md={12}
  lg={16}
  className="flex justify-center items-center font-sans"
>
  <div className="right_countries grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
    {countries.map((country, index) => (
      <div
        key={index}
        className="country_box rounded-lg  text-center flex flex-col"
      >
        <figure className="w-full  overflow-hidden rounded-lg mb-4 flex-shrink-0">
          <img
            src={country.imgSrc}
            alt={country.alt}
            className="w-[270px]  h-[286px] object-contain rounded-lg"
          />
        </figure>
      
      </div>
    ))}
  </div>
</Col>

        </Row>
      </div>
    </section>
  );
};

export default ChooseCountrySection;
