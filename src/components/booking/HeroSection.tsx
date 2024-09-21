import React from 'react';
import { Row, Col, Typography, Input, Button } from 'antd';
import { GoogleOutlined, AppleOutlined } from '@ant-design/icons';
import { StaticImage } from 'gatsby-plugin-image'; // Import StaticImage from gatsby

const { Title, Text } = Typography;

const HeroSection: React.FC = () => {
  return (
    <section className="bg-slate-100/15 py-6">
      <div className="  px-28">
        <Row
          gutter={[32, 32]} // Maintain the gutter for spacing between columns
          justify="center"
          align="middle"
          className="flex flex-col-reverse md:flex-row items-center"
        >
          {/* Left Section with Text and Input */}

          <Col
            xs={24}
            md={12}
            className="text-center md:text-left flex flex-col justify-center"
          >
            <div>
              <div className="mb-5">
                <div className="mt-8 md:mt-8 flex items-center">
                  <hr className="w-10 border-t-2 border-gray-900 mr-4" />{' '}
                  {/* Small horizontal line */}
                  <Text className="md:text-[16px] font-thin text-gray-900 tracking-widest">
                    Visa Appointment Alerts
                  </Text>
                </div>
              </div>
              <div className="mb-5">
                <Text className="text-3xl md:text-3xl font-semibold text-gray-900">
                  Get The Visa Appointment -
                </Text>
              </div>

              <Text className="mt-8 md:mt-8 md:text-4xl font-semibold text-gray-900 leading-relaxed">
                Simple, Fast and Reliable
              </Text>
              <Row
                gutter={[16, 16]}
                justify="center"
                align="middle"
                className="w-full mt-8 flex justify-center md:justify-start"
              >
                <Col xs={16} md={16}>
                  <Text
                    className="mt-8 md:mt-8 md:text-1xl font-thin text-gray-900 tracking-widest
                  "
                  >
                    Easy Slot Booking tools helps people get the best possible
                    Visa dates at your fingertips, 100% safe and trusted by
                    thousands.
                  </Text>
                </Col>
              </Row>

              <Row gutter={[16, 16]} className="mt-8 flex flex-col md:flex-row">
                <Col xs={12} sm={8} className="mb-4 md:mb-0">
                  <Button className="bg-[#2F0559] text-[#ffffff]  hover:bg-transparent hover:border-[#2F0559] hover:text-[#2F0559] border border-[#2F0559] flex items-center justify-center px-6 py-6 rounded-3xl">
                    Start Free Trial
                  </Button>
                </Col>
                <Col xs={12} sm={8}>
                  <Button className="bg-[#F5F5F5] text-[#131313] border-none flex items-center justify-center px-12 py-6 rounded-3xl">
                    Watch the Demo
                  </Button>
                </Col>
              </Row>
              <Col xs={12} sm={8} className="mt-8">
                <StaticImage
                  src="../../images/zigzag.svg"
                  alt="zigzag"
                  layout="constrained"
                  quality={100}
                />
              </Col>
              <div className=" mt-6">
                <Col
                  xs={24}
                  md={12}
                  className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
                >
                  <StaticImage
                    src="../../images/hero-users-img.png" // Your image path
                    alt="hero-img"
                    placeholder="blurred"
                    layout="constrained"
                    className="object-cover object-center rounded"
                  />
                </Col>
                <Col xs={16} md={16} className="mt-4">
                  <Text
                    className="mt-12 md:mt-12 md:text-1xl font-thin text-gray-900 tracking-widest
                  "
                  >
                    <b className="font-bold">10,000+</b> people already
                    downloaded ES Slotbooking extension. Get started today!
                  </Text>
                </Col>
              </div>
            </div>
          </Col>

          {/* Right Section with Image */}
          <Col xs={24} md={12} className="w-full lg:w-full">
            <StaticImage
              src="../../images/landing-hero.png" // Your image path
              alt="hero"
              placeholder="blurred"
              layout="constrained"
              width={1250} // Set custom width
              height={1200} // Set custom height
              className="object-cover object-center w-full rounded"
            />
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default HeroSection;
