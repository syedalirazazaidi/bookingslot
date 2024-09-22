import React from 'react';
import { Row, Col, Typography, Button } from 'antd';
import { StaticImage } from 'gatsby-plugin-image';

const { Title, Text } = Typography;

export default function Management() {
  return (
    <section className="py-12 bg-white">
      <div className="px-6 lg:px-24 mx-auto">
        <div className="flex flex-col items-center text-center w-full md:w-3/5 mb-20 mx-auto">
          <div className="flex justify-center">
            <h3 className="text-lg font-semibold text-[#1A0681]">
              Our Features
            </h3>
          </div>
          <h1 className="mt-4 sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            Managing visa slot booking has never been easier
          </h1>
          <p className=" text-[16px] font-thin text-gray-900 ">
            We help you get your visa slots in a quick, easy, and secure manner.
            Become a part of our family today for a smoother visa slot booking
            process.
          </p>
        </div>

        <Row gutter={[24, 24]} align="middle">
          {/* Left Column - Features */}
          <Col xs={24} md={12}>
            <div className="space-y-8">
              {/* Feature 1 */}
              <Row gutter={16} align="middle">
                {/* Column for the Image */}
                <Col xs={6} md={4}>
                  <div className="bg-[#F7D8D8] p-6 rounded-full flex justify-center items-center">
                    <StaticImage
                      src="../../images/error-icn.png"
                      alt="Error Handling"
                      layout="constrained"
                      quality={100}
                      className="object-cover w-12 h-12"
                    />
                  </div>
                </Col>

                {/* Column for the Text */}
                <Col xs={18} md={20}>
                  <Title level={4} className="text-black font-semibold">
                    Error Handling While Booking
                  </Title>
                  <Text className="mt-2 text-[15px] font-thin text-gray-900">
                    ES Booking Extension takes care of all the error pop-ups
                    while booking the slot, especially on bulk release.
                  </Text>
                </Col>
              </Row>

              {/* Feature 2 */}
              <Row gutter={16} align="middle">
                {/* Column for the Image */}
                <Col xs={6} md={4}>
                  <div className="bg-[#E0E4F9] p-6 rounded-full flex justify-center items-center">
                    <StaticImage
                      src="../../images/24x7-icn.png"
                      alt="24X7 Customer Support"
                      layout="constrained"
                      quality={100}
                      className="object-cover w-12 h-12"
                    />
                  </div>
                </Col>

                {/* Column for the Text */}
                <Col xs={18} md={20}>
                  <Title level={4} className="text-black font-semibold">
                    24X7 Customer Support
                  </Title>
                  <Text className="mt-2 text-[15px] font-thin text-gray-900">
                    Premium users will get private discussion channels for all
                    their queries, tricks, and tips for booking an appointment.
                  </Text>
                </Col>
              </Row>

              {/* Feature 3 */}
              <Row gutter={16} align="middle">
                {/* Column for the Image */}
                <Col xs={6} md={4}>
                  <div className="bg-[#FFDCF7] p-6 rounded-full flex justify-center items-center">
                    <StaticImage
                      src="../../images/trusted-icn.png"
                      alt="Trusted by Million Users"
                      layout="constrained"
                      quality={100}
                      className="object-cover w-12 h-12"
                    />
                  </div>
                </Col>

                {/* Column for the Text */}
                <Col xs={18} md={20}>
                  <Title level={4} className="text-black font-semibold">
                    Trusted by Million Users
                  </Title>
                  <Text className="mt-2 text-[15px] font-thin text-gray-900">
                    ES Booking is the first-ever real-time alert service started
                    in 2020 and helped many users book their visa appointments.
                  </Text>
                </Col>
              </Row>
            </div>
          </Col>

          {/* Right Column - Image */}
          <Col xs={24} md={12} className="text-center">
            <StaticImage
              src="../../images/app-img.png"
              alt="App Image"
              layout="constrained"
              placeholder="blurred"
              className="max-w-full"
            />
          </Col>
        </Row>
      </div>
    </section>
  );
}
