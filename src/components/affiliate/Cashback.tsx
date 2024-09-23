import { Button, Row, Col, Typography } from 'antd';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

const { Title, Text, Paragraph } = Typography;

export default function Cashback() {
  return (
    <section className="text-gray-600 bg-[#F5F5F5]">
      <div className="mx-24 py-24">
        <Row gutter={[16, 16]} align="middle" className="px-5">
          {/* Left Side - Text Content */}
          <Col xs={24} md={12} className="text-center md:text-left">
            <Text className="text-xl text-gray-600 font-thin mb-0">
              Don't sit out this festival of savings.
            </Text>
            <Paragraph className="sm:text-4xl text-3xl font-medium text-gray-900 mt-4 ">
              Get 15% Cash Back
            </Paragraph>

            <Paragraph className="text-xl text-gray-600 -mt-4  font-thin">
              plus 500 for every friend you refer. Only till 5/15
            </Paragraph>
            <div className="flex justify-center mt-6 md:justify-start">
              <Button className="bg-[#2F0559] text-white hover:bg-[#2F0559] px-6 py-6 rounded-3xl">
                Sign In to get started
              </Button>
            </div>
          </Col>

          {/* Right Side - Image */}
          <Col xs={24} md={12} className="flex justify-center">
            <StaticImage
              src="../../images/affi-banner-bg.png"
              alt="hero-img"
              placeholder="blurred"
              layout="constrained"
              className="object-cover object-center rounded"
            />
          </Col>
        </Row>
      </div>
    </section>
  );
}
