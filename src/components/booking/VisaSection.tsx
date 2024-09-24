import React from 'react';
import { Row, Col } from 'antd';
import { StaticImage } from 'gatsby-plugin-image';

export default function Visa() {
  return (
    <section className="text-gray-600 body-font overflow-hidden py-10">
      <div className="px-28 -py-3">
        <Row gutter={[16, 16]}>
          {/* Image Column */}
          <Col xs={24} md={12}>
            <StaticImage
              src="../../images/why-choose-us.webp"
              alt="visa"
              layout="constrained"
              quality={100}
              className="object-cover"
            />
          </Col>

          {/* Content Column */}
          <Col xs={24} md={12} className="-mt-4">
            <div>
              <p className="py-10 text-[#1A0681] text-[15px] font-semibold">
                Why Choose Us?
              </p>

              <h2 className="text-[28px] text-black font-thin py-1">
                One Application to booking
              </h2>
              <h2 className="text-gray-900 text-4xl title-font font-bold mb-4">
                slots for your possible visa dates
              </h2>
              <p className="mt-4  md:text-[15px] font-extralight text-gray-900 tracking-widest">
                We got your back from all visa category channels, from community
                additions to premium users. Join us and never miss out on an
                available slot, ever.
              </p>
            </div>
            <div className="flex items-start my-8 gap-4">
              <div className="bg-[#D5EDFF] p-5 rounded-full">
                <StaticImage
                  src="../../images/pioneers-icn.svg"
                  alt="visa"
                  layout="constrained"
                  quality={100}
                  className="object-cover w-12 h-12 sm:w-12 sm:h-12 md:w-10 md:h-10 lg:w-10 lg:h-10"
                />
              </div>

              <div>
                <h2 className="text-lg text-black font-semibold">
                  Industry Pioneers
                </h2>
                <p className="mt-2  md:text-[15px] font-extralight text-gray-900 tracking-widest">
                  We were the first ones to provide our customers with visa slot
                  alerts. Doing this longer than anyone else on the market.
                </p>
              </div>
            </div>
            <div className="flex items-start my-8 gap-4">
              <div className="bg-[#CFF4BD] p-5 rounded-full">
                <StaticImage
                  src="../../images/rating-icn.svg"
                  alt="visa"
                  layout="constrained"
                  quality={100}
                  className="object-cover w-12 h-12 sm:w-12 sm:h-12 md:w-10 md:h-10 lg:w-10 lg:h-10"
                />
              </div>

              <div>
                <h2 className="text-lg text-black font-semibold">
                  Spotless Rating
                </h2>
                <p className="mt-2  md:text-[15px] font-extralight text-gray-900 tracking-widest">
                  We provide nothing but exemplary service corroborated by our
                  perfect 5 star rating given by thousands of satisfied
                  customers.
                </p>
              </div>
            </div>
            <div className="flex items-start my-8 gap-4">
              <div className="bg-[#FDC6B3] p-5 rounded-full">
                <StaticImage
                  src="../../images/experienced-icn.svg"
                  alt="visa"
                  layout="constrained"
                  quality={100}
                  className="object-cover w-12 h-12 sm:w-12 sm:h-12 md:w-10 md:h-10 lg:w-10 lg:h-10"
                />
              </div>

              <div>
                <h2 className="text-lg text-black font-semibold">
                  Most Experienced
                </h2>
                <p className="mt-2  md:text-[15px] font-extralight text-gray-900 tracking-widest">
                  We provide nothing but exemplary service corroborated by our
                  perfect 5 star rating given by thousands of satisfied
                  customers.
                </p>
              </div>
            </div>
            <div className="flex items-start my-8 gap-4">
              <div className="bg-[#FFDCF7] p-5 rounded-full">
                <StaticImage
                  src="../../images/versatile-icn.svg"
                  alt="visa"
                  layout="constrained"
                  quality={100}
                  className="object-cover w-12 h-12 sm:w-12 sm:h-12 md:w-10 md:h-10 lg:w-10 lg:h-10"
                />
              </div>

              <div>
                <h2 className="text-lg text-black font-semibold">
                  Most Versatile
                </h2>
                <p className="mt-2  md:text-[15px] font-extralight text-gray-900 tracking-widest">
                  We provide the widest range of features and tools than any
                  other company in this industry. Making sure you stay ahead.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}
