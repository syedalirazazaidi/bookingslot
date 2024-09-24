import React from 'react';
import { StaticImage } from 'gatsby-plugin-image'; // Import StaticImage from gatsby
import { Row, Col } from 'antd';

export default function Invitefriend() {
  return (
    <section className="text-gray-600 body-font bg-[#362C62]">
      <div className="px-24 py-12">
        <Row className="flex-wrap">
          {/* Image Column */}
          <Col xs={24} md={15}>
            <StaticImage
              src="../../images/affi-purple-bg.webp"
              alt="hero-img"
              placeholder="blurred"
              layout="constrained"
              className="object-cover object-center rounded"
            />
          </Col>

          {/* Content Column */}
          <Col xs={24} md={9} className="md:-ml-20">
            <div className="md:py-8">
              <h1 className="text-yellow-400 text-2xl  font-medium mb-8">
                You get 500 INR when your friend uses Easy Slot Booking via your
                shared link.
              </h1>
              <ul className="list-none space-y-6">
                <li>
                  <div className="flex items-center mb-4 ">
                    <span className="text-[#FFFFFF] text-2xl font-normal mr-2">
                      01.
                    </span>
                    <span className=" text-2xl font-normal text-[#FFFFFF]">
                      Invite friends with your link
                    </span>
                  </div>
                  <span className="text-[15px] font-extralight  text-white">
                    Share your personal link however you like - email it, post
                    it, tweet it - so your friend can apply for a student loan.
                  </span>
                </li>
                <li>
                  <div className="flex items-center  mt-10 mb-4">
                    <span className="text-[#FFFFFF] text-2xl font-normal mr-2">
                      02.
                    </span>
                    <span className="text-[#FFFFFF] text-2xl">
                      Get a cashback reward
                    </span>
                  </div>
                  <span className="text-[15px] font-extralight  text-white">
                    If eligible, you and your Friend will receive a 500 INR
                    check 30 days on or after the first disbursement on your
                    Friend's first appointment booking.
                  </span>
                </li>
                <li>
                  <div className="flex items-center mt-10">
                    <span className="text-[#FFFFFF] text-2xl font-normal mr-2 mb-4">
                      03.
                    </span>
                    <span className="text-[#FFFFFF] text-2xl mb-4 ">
                      Refer more friends
                    </span>
                  </div>
                  <span className="text-[15px] font-extralight  text-white">
                    Invite others and earn up to 2000 INR in cash rewards every
                    year!
                  </span>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}
