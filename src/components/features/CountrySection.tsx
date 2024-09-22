import React from 'react';
import { Row, Col } from 'antd';
import 'tailwindcss/tailwind.css';

const countries = [
  {
    name: 'United States',
    imgSrc: 'https://duoinn.com/easyslotbooking/assets/images/features/feat_united_states.png',
    alt: 'United States of America',
  },
  {
    name: 'Canada',
    imgSrc: 'https://duoinn.com/easyslotbooking/assets/images/features/feat_canada.png',
    alt: 'Canada',
  },
  {
    name: 'Poland',
    imgSrc: 'https://duoinn.com/easyslotbooking/assets/images/features/feat_poland.png',
    alt: 'Poland',
  },
];

const ChooseCountrySection = () => {
  return (
    <section className="choose_country text-white bg-[#1a1a3b] py-16">
      <div className="container mx-auto">
        <Row gutter={[16, 16]} className="flex items-center">
          {/* Left Content */}
          <Col xs={24} md={12} lg={8} className="text-left">
            <div className="left_content">
            <h6 className="flex font-poppins text-[0.9375rem] font-semibold text-[#ff5857] tracking-[0.01875rem] mb-2">
  Choose Country
</h6>

<h1 className="flex flex-wrap mt-6 font-poppins text-2xl md:text-5xl font-semibold leading-[3rem] text-white">
  Apply for a quick Immigration for your preferred country
</h1>

            </div>
          </Col>

          {/* Right Content */}
          <Col xs={24} md={12} lg={16} className="flex justify-center items-center">
            <div className="right_countries grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {countries.map((country, index) => (
                <div key={index} className="country_box p-4 bg-white rounded-lg shadow-md text-center">
                  <figure className="w-full h-48 overflow-hidden rounded-lg mb-4">
                    <img
                      src={country.imgSrc}
                      alt={country.alt}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </figure>
                  <h3 className="text-xl font-semibold text-gray-800">{country.name}</h3>
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
