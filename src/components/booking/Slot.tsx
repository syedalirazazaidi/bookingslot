import React from 'react';
import { Row, Col, Button } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import { StaticImage } from 'gatsby-plugin-image';

export default function AboutSection() {
  return (
    <section className="text-gray-600 body-font py-4">
      <div className="px-28 bg-[#F5F5F5] py-14">
        <Row gutter={[16, 16]} align="middle">
          {/* Image Column */}
          <Col xs={24} md={8}>
            <StaticImage
              src="../../images/aboutus-bg.webp"
              alt="aboutus"
              layout="constrained"
              quality={100}
              className="object-cover"
            />
          </Col>

          {/* Text and Button Column */}
          <Col xs={24} md={16} className="-mt-10">
            <div>
              <p className="leading-relaxed text-base text-[16px] py-4 font-medium text-[#1A0681]">
                About Easy Slot Booking
              </p>
              <h2 className="text-[30px] font-semibold text-black">
                Easy Slot Booking for visa appointments
              </h2>
              <p className="mt-4  md:text-[15px] font-extralight text-gray-900 tracking-widest">
                Now never miss the single slot with Easy Slot Booking. Getting a
                visa is always tiresome and problematic, especially when getting
                a US visa. It's tough to get dates as per your choice;
                sometimes, you can get blocked with multiple logins. But if you
                want visa booking quickly, you've come to the right place!
              </p>
              <p className="mt-4  md:text-1xl font-extralight text-gray-900 tracking-widest">
                With chrome extension and Alerts, it becomes easier! Users can
                look over available dates using telegram and the chrome
                extension surveys errors, if any, during slot booking. The
                complete process is done correctly with fast booking. You must
                follow the telegram channel and log in to the portal to get a
                slot as per your choice. One can download the ES Booking chrome
                extension now!
              </p>
              <div className="flex md:mt-4 mt-6 gap-5">
                <Button
                  type="primary"
                  style={{
                    backgroundColor: '#2F0559',
                    borderColor: '#2F0559',
                  }}
                  className="hover:bg-[#2F0559] px-12 py-5 hover:border-[#2F0559] focus:bg-[#2F0559] focus:border-[#2F0559]"
                >
                  Read More
                </Button>
                <Button
                  type="primary"
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderColor: '#FFFFFF',
                  }}
                  className="hover:bg-[#2F0559] text-black px-12 py-5 hover:border-[#2F0559] focus:bg-[#2F0559] focus:border-[#2F0559]"
                >
                  Read More
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}
