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
          <Col xs={24} md={9} className='md:-ml-20'>
            <div className="md:py-8">
              <h1 className="text-yellow-400 text-2xl  font-medium mb-4">
                You get 500 INR when your friend uses Easy Slot Booking via your
                shared link.
              </h1>
              <ul className="list-none space-y-6">
                <li>
                  <div className="flex items-center mb-2">
                    <span className="text-indigo-500 text-xl font-bold mr-2">
                      01.
                    </span>
                    <span className="text-lg font-semibold text-white">
                      Invite friends with your link
                    </span>
                  </div>
                  <span className="text-base text-white">
                    Share your personal link however you like - email it, post
                    it, tweet it - so your friend can apply for a student loan.
                  </span>
                </li>
                <li>
                  <div className="flex items-center mb-2">
                    <span className="text-indigo-500 text-xl font-bold mr-2">
                      02.
                    </span>
                    <span className="text-lg font-semibold text-white">
                      Get a cashback reward
                    </span>
                  </div>
                  <span className="text-base text-white">
                    If eligible, you and your Friend will receive a 500 INR
                    check 30 days on or after the first disbursement on your
                    Friend's first appointment booking.
                  </span>
                </li>
                <li>
                  <div className="flex items-center mb-2">
                    <span className="text-indigo-500 text-xl font-bold mr-2">
                      03.
                    </span>
                    <span className="text-lg font-semibold text-white">
                      Refer more friends
                    </span>
                  </div>
                  <span className="text-base text-white">
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
