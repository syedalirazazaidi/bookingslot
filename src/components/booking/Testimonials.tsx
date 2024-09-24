import React from 'react';
import { Row, Col, Typography } from 'antd';

const { Title, Text } = Typography;

export default function Testimonials() {
  return (
    <section className="text-gray-600 bg-[#F5F5F5] body-font py-24">
      <div className=" mx-24 px-5">
        {/* Header Section */}
        <div className="mx-auto text-center w-full md:w-1/2 mb-20">
          <p className="text-[15px] font-semibold text-[#1A0690]">
            Testimonials
          </p>
          <Title
            level={2}
            className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"
          >
            Here's Why Our Customers Love Us
          </Title>
          <p className="lg:w-full mx-auto font-extralight leading-relaxed text-base">
            From 24/7 support that acts as your extended team to incredibly fast
            website performance, there are plenty of reasons why our users keep
            recommending us!
          </p>
        </div>

        {/* Card Gallery */}
        <Row gutter={[16, 16]} className="-m-4">
          {/* Card 1 */}
          <Col xs={24} sm={12} lg={8}>
            <div className="px-8 rounded-md py-10 relative z-10 border-1 border-gray-200 bg-[#FFFFFF] ">
              <Text className="tracking-widest text-sm font-medium text-indigo-500 mb-1">
                THE SUBTITLE
              </Text>
              <Title level={4} className="text-gray-900 mb-3">
                Shooting Stars
              </Title>
              <Text className="leading-relaxed">
                Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                microdosing tousled waistcoat.
              </Text>
            </div>
          </Col>

          {/* Card 2 */}
          <Col xs={24} sm={12} lg={8}>
            <div className="px-8 rounded-md py-10 relative z-10 border-1 border-gray-200 bg-[#FFFFFF] ">
              <Text className="tracking-widest text-sm font-medium text-indigo-500 mb-1">
                THE SUBTITLE
              </Text>
              <Title level={4} className="text-gray-900 mb-3">
                Shooting Stars
              </Title>
              <Text className="leading-relaxed">
                Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                microdosing tousled waistcoat.
              </Text>
            </div>
          </Col>

          {/* Card 3 */}
          <Col xs={24} sm={12} lg={8}>
            <div className="px-8 rounded-md py-10 relative z-10 border-1 border-gray-200 bg-[#FFFFFF] ">
              <Text className="tracking-widest text-sm font-medium text-indigo-500 mb-1">
                THE SUBTITLE
              </Text>
              <Title level={4} className="text-gray-900 mb-3">
                Shooting Stars
              </Title>
              <Text className="leading-relaxed">
                Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                microdosing tousled waistcoat.
              </Text>
            </div>
          </Col>

          {/* Card 4 */}
          <Col xs={24} sm={12} lg={8}>
            <div className="px-8 rounded-md py-10 relative z-10 border-1 border-gray-200 bg-[#FFFFFF] ">
              <Text className="tracking-widest text-sm font-medium text-indigo-500 mb-1">
                THE SUBTITLE
              </Text>
              <Title level={4} className="text-gray-900 mb-3">
                Shooting Stars
              </Title>
              <Text className="leading-relaxed">
                Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                microdosing tousled waistcoat.
              </Text>
            </div>
          </Col>

          {/* Card 5 */}
          <Col xs={24} sm={12} lg={8}>
            <div className="px-8 rounded-md py-10 relative z-10 border-1 border-gray-200 bg-[#FFFFFF] ">
              <Text className="tracking-widest text-sm font-medium text-indigo-500 mb-1">
                THE SUBTITLE
              </Text>
              <Title level={4} className="text-gray-900 mb-3">
                Holden Caulfield
              </Title>
              <Text className="leading-relaxed">
                Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                microdosing tousled waistcoat.
              </Text>
            </div>
          </Col>

          {/* Card 6 */}
          <Col xs={24} sm={12} lg={8}>
            <div className="px-8 rounded-md py-10 relative z-10 border-1 border-gray-200 bg-[#FFFFFF] ">
              <Text className="tracking-widest text-sm font-medium text-indigo-500 mb-1">
                THE SUBTITLE
              </Text>
              <Title level={4} className="text-gray-900 mb-3">
                Alper Kamu
              </Title>
              <Text className="leading-relaxed">
                Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                microdosing tousled waistcoat.
              </Text>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}
