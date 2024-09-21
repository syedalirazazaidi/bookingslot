import React from 'react';
import { Row, Col, Card, Typography } from 'antd';
import { CheckOutlined } from '@ant-design/icons';

import { StaticImage } from 'gatsby-plugin-image'; // Import StaticImage from gatsby

const { Title, Text } = Typography;

export default function Heighlight() {
  return (
    <section className="py-24 bg-white">
      <div className=" px-28 -py-3">
        <div className="text-left w-full mb-12 ">
          <Title
            level={5}
            className="text-[#1A0681] -mt-12 tracking-widest font-medium "
          >
            Why ES Booking
          </Title>
          <div className="text-[34px] mt-10 leading-tight text-[#000000] font-normal">
            Visa slot booking made <br />
            <span className="block mt-2">easier with ES Booking</span>
          </div>
        </div>

        <Row gutter={[16, 16]} justify="center">
          {/* Card 1 */}
          <Col xs={24} md={8} className="mt-10">
            <div className="flex flex-col items-start">
              <StaticImage
                src="../../images/network-icn.svg"
                alt="zigzag"
                layout="constrained"
              />
              <Title
                level={4}
                className=" py-2 text-[15px] w-60 font-medium text-gray-900"
              >
                Engage your customers dramatically
              </Title>
              <div className="flex items-center">
                <CheckOutlined className="text-[#295BEA] " />
                <Text className="ml-2 font-thin text-[16px]">
                  24/7 Customer support
                </Text>
              </div>
              <div className="flex items-center">
                <CheckOutlined className="text-[#295BEA]" />
                <Text className="ml-2 font-thin text-[16px]">
                  Most user friendly interface
                </Text>
              </div>
              <div className="flex items-center">
                <CheckOutlined className="text-[#295BEA] " />
                <Text className="ml-2 font-thin text-[16px]">
                  Extensions available for all major browser
                </Text>
              </div>
            </div>
          </Col>

          {/* Card 2 */}
          <Col xs={24} md={8}>
            <Card
              bordered={false}
              className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-[#F3F8FF]"
            >
              <div className="flex flex-col items-start">
                <StaticImage
                  src="../../images/folder-icn.svg"
                  alt="network"
                  layout="constrained"
                />
                <Title
                  level={4}
                  className=" py-2 text-[15px] w-80 font-medium text-gray-900"
                >
                  Store and transfer our safe data account{' '}
                </Title>
                <div className="flex items-center">
                  <CheckOutlined className="text-[#295BEA] " />
                  <Text className="ml-2 font-thin text-[16px]">
                    Profitability Boost
                  </Text>
                </div>
                <div className="flex items-center">
                  <CheckOutlined className="text-[#295BEA]" />
                  <Text className="ml-2 font-thin text-[16px]">
                    24/7 Customer Support
                  </Text>
                </div>
                <div className="flex items-center">
                  <CheckOutlined className="text-[#295BEA] " />
                  <Text className="ml-2 font-thin text-[16px]">
                    Extensions available for all users of world
                  </Text>
                </div>
              </div>
            </Card>
          </Col>

          {/* Card 3 */}
          <Col xs={24} md={8}>
            <div className="flex flex-col ml-10 items-start mt-5">
              <StaticImage
                src="../../images/lamp-icn.svg"
                alt="zigzag"
                layout="constrained"
              />
              <Title
                level={4}
                className=" py-2 text-[15px] w-80 font-medium text-gray-900"
              >
                Estimate costs and increase productivity{' '}
              </Title>
              <div className="flex items-center">
                <CheckOutlined className="text-[#295BEA] " />
                <Text className="ml-2 font-thin text-[16px]">
                  24/7 Customer support
                </Text>
              </div>
              <div className="flex items-center">
                <CheckOutlined className="text-[#295BEA]" />
                <Text className="ml-2 font-thin text-[16px]">
                  Most user friendly interface
                </Text>
              </div>
              <div className="flex items-center">
                <CheckOutlined className="text-[#295BEA] " />
                <Text className="ml-2 font-thin text-[16px]">
                  Extensions available for all major browser
                </Text>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}
