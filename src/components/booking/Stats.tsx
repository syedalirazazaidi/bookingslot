import React from 'react';
import { Row, Col, Button, Card } from 'antd';

import { StaticImage } from 'gatsby-plugin-image'; // Import StaticImage from gatsby

const WhatWeDoSection = () => {
  return (
    <div>
      <section className="text-gray-600 body-font bg-[#FFFFFF]">
        <div className="px-28 py-12">
          <div className="flex flex-col text-center w-full mb-20">
            <div className="flex justify-center">
              <Button className="w-32 bg-[#EAE9F4] rounded-3xl py-5 mb-8">
                What we do
              </Button>
            </div>
            <h1 className="sm:text-3xl text-1xl font-medium title-font mb-4 text-gray-900 tracking-wide">
              Flexible services for every stage of <br /> your requirement
            </h1>
          </div>

          <Row gutter={[16, 16]} justify="center" className="text-center">
            <Col xs={24} sm={12} md={6}>
              <Card
                bordered={false} // Removes the border
                className="rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300 relative"
              >
                <div className="absolute top-0 left-0 w-full h-2 rounded-t-lg shadow-lg"></div>{' '}
                {/* Top shadow */}
                <div className="flex justify-center items-center">
                  {/* Icon Container */}
                  <div className="bg-[#FFECFA] rounded-md py-4 px-4 flex justify-center items-center">
                    <StaticImage
                      src="../../images/bulb_icon_1.svg"
                      alt="zigzag"
                      layout="constrained"
                    />
                  </div>
                </div>
                <h2 className="text-[17px] mt-[3px] font-medium text-[#000000]">
                  Easy to Useable
                </h2>
                <p className="mt-4 md:text-1xl font-extralight text-gray-900 tracking-widest">
                  We always try to make our platform easier every time.
                </p>
              </Card>
            </Col>

            <Col xs={24} sm={12} md={6}>
              <Card
                bordered={false} // Removes the border
                className="rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300 relative"
              >
                <div className="absolute top-0 left-0 w-full h-2 rounded-t-lg shadow-lg"></div>{' '}
                {/* Top shadow */}
                <div className="flex justify-center items-center">
                  {/* Icon Container */}
                  <div className="bg-[#E9F5FF] rounded-md py-4 px-4 flex justify-center items-center">
                    <StaticImage
                      src="../../images/users_icon_2.svg"
                      alt="zigzag"
                      layout="constrained"
                    />
                  </div>
                </div>
                <h2 className="text-[17px] mt-[3px] font-medium text-[#000000]">
                  1M+ Users
                </h2>
                <p className="mt-4 md:text-1xl font-extralight text-gray-900 tracking-widest">
                  We always give good feelings and impressions to each of our
                  users{' '}
                </p>
              </Card>
            </Col>

            <Col xs={24} sm={12} md={6}>
              <Card
                bordered={false} // Removes the border
                className="rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300 relative"
              >
                <div className="absolute top-0 left-0 w-full h-2 rounded-t-lg shadow-lg"></div>{' '}
                {/* Top shadow */}
                <div className="flex justify-center items-center">
                  {/* Icon Container */}
                  <div className="bg-[#E4DEFF] rounded-md py-4 px-4 flex justify-center items-center">
                    <StaticImage
                      src="../../images/eye_icon_3.svg"
                      alt="zigzag"
                      layout="constrained"
                    />
                  </div>
                </div>
                <h2 className="text-[17px] mt-[3px] font-medium text-[#000000]">
                  Tranparency Services
                </h2>
                <p className="mt-4 md:text-1xl font-extralight text-gray-900 tracking-widest">
                  No one was harmed because everything was clear
                </p>
              </Card>
            </Col>

            <Col xs={24} sm={12} md={6}>
              <Card
                bordered={false} // Removes the border
                className="rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300 relative"
              >
                <div className="absolute top-0 left-0 w-full h-2 rounded-t-lg shadow-lg"></div>{' '}
                {/* Top shadow */}
                <div className="flex justify-center items-center">
                  {/* Icon Container */}
                  <div className="bg-[#E4DEFF] rounded-md py-4 px-4 flex justify-center items-center">
                    <StaticImage
                      src="../../images/thumb_icon_4.svg"
                      alt="zigzag"
                      layout="constrained"
                    />
                  </div>
                </div>
                <h2 className="text-[17px] mt-[3px] font-medium text-[#000000]">
                  Happy Clients
                </h2>
                <p className="mt-4 md:text-1xl font-extralight text-gray-900 tracking-widest">
                  Happy and satiesfied clients worldwide and still counting
                </p>
              </Card>
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
};

export default WhatWeDoSection;
