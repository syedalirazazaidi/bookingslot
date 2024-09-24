import { Button, Row, Col, Typography } from 'antd';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import './styles.css';
const { Title, Text, Paragraph } = Typography;
export default function Influencer() {
  return (
    <section className="bg-[#FFE500] pb-10 md:pb-1">
      <div className="relative h-screen mx-6 md:mx-24">
        <StaticImage
          src="../../images/influancer-bg.svg"
          alt="Background Image"
          layout="fullWidth"
          placeholder="blurred"
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1,
          }}
        />
        {/* Content on top of the background image */}
        <div className="relative z-10 text-center md:text-left flex flex-col justify-center h-full px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl text-black font-bold leading-relaxed tracking-wide -mt-40 md:-mt-60">
            Are You an Influencer?
          </h2>
          <p className="text-sm md:text-[15px] font-extralight text-black mt-4 mb-6 md:mb-10">
            Earn more cash bonuses plus other rewards.
          </p>
          <div>
            <Button
              className="py-3 md:py-5 bg-[#010101] text-white border-none px-6 md:px-12 no-hover"
              style={{ backgroundColor: '#010101', border: 'none' }}
            >
              Apply Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
