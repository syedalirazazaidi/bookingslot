import React from 'react';
import { StaticImage } from 'gatsby-plugin-image'; // Import StaticImage from gatsby
import { Row, Col } from 'antd';

export default function Cashreward() {
  return (
    <section className="text-gray-600 body-font bg-[#FFFFFF]">
      <div className="mx-24 mt-80 md:mt-2 md:py-12 ">
        <Row className="flex-wrap">
          {/* Image Column */}

          {/* Content Column */}
          <Col xs={24} md={12} className="">
            <div className="md:py-8">
              <h1 className="text-[#313131] text-3xl font-light leading-relaxed  tracking-wide   mb-8">
                You get 500 INR when your friend uses Easy Slot Booking via your
                shared link.
              </h1>
              <ul className="list-none space-y-6">
                <li>
                  <div className="flex items-center mb-4 ">
                    <span className="bg-[#1A0681] text-white text-2xl font-normal mr-3 rounded-full px-5 py-2">
                      1
                    </span>

                    <span className="text-[28px] font-normal text-black">
                      Invite friends with your link
                    </span>
                  </div>
                  <span className="text-[15px] font-extralight  text-black">
                    Share your personal link however you like - email it, post
                    it, tweet it - so your friend can apply for a student loan.
                  </span>
                </li>
                <li>
                  <div className="flex items-center mb-4 ">
                    <span className="bg-[#1A0681] text-white text-2xl font-normal mr-3 rounded-full px-4 py-2">
                      2
                    </span>

                    <span className=" text-[28px] font-normal text-black">
                      Get a cash reward
                    </span>
                  </div>
                  <span className="text-[15px] font-extralight  text-black">
                    Share your personal link however you like - email it, post
                    it, tweet it - so your friend can apply for a student loan.
                  </span>
                </li>
                <li>
                  <div className="flex items-center mb-4 ">
                    <span className="bg-[#1A0681] text-white text-2xl font-normal mr-3 rounded-full px-4 py-2">
                      3
                    </span>

                    <span className=" text-[28px] font-normal text-black">
                      Refer more friends
                    </span>
                  </div>
                  <span className="text-[15px] font-extralight  text-black">
                    Share your personal link however you like - email it, post
                    it, tweet it - so your friend can apply for a student loan.
                  </span>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={24} md={12}>
            <StaticImage
              src="../../images/referral-right-bg.png"
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
