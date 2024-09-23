import React from 'react';
import { Row, Col, Rate } from 'antd';
import 'tailwindcss/tailwind.css';

const TestimonialSection: React.FC = () => {
  return (
    <section className="pricing_testimonial bg-white py-12">
      <div className="container mx-auto">
        {/* Top Content */}
        <div className="top_content">
          <h6 className="text-[0.9375rem] font-medium text-[#1a0681] tracking-[0.01875rem] mb-2">
            Testimonials
          </h6>

          <h2 className="flex flex-wrap w-[40%] mt-6 mb-3 font-poppins text-[2.25rem] leading-[3.2rem] font-medium text-black tracking-[0.045rem]">
            What our happy <br /> customers <br />
            <b className="text-black">says about pricing</b>
          </h2>

          <div className="flex mt-2">
            <img
              src="https://duoinn.com/easyslotbooking/assets/images/pricing/yellow-clipart.svg"
              alt="yellow-clipart"
              title="yellow-clipart"
              className="yellow_clipart"
            />
          </div>

          {/* Row for Testimonial Content */}
          <Row className="mt-8" gutter={[32, 16]}>
            <Col xs={24} lg={14}>
              <div className="testimonial_content mt-[6rem]">
                <img
                  src="https://duoinn.com/easyslotbooking/assets/images/pricing/quote.svg"
                  alt="quote"
                  className="quote w-[44px] h-[44px] mb-4"
                />
                <p className="block w-[70%] my-6 font-poppins text-[1rem] leading-[2.05rem] font-light text-[#656565] tracking-[0.01125rem]">
                  Life saver for everyone looking to book visa appointment. I
                  have been trying to get a slot for the last two months and
                  could not get one. After using Easy slot booking for a few
                  days I got my slot. Very happy to have this service.
                </p>

                <div className="name_rating mt-4 flex items-center">
                  <h6 className="text-[1rem] leading-[2.25rem] min-w-[25%] font-semibold text-[#091a82] tracking-[0.01rem]">
                    Alok Kumar
                  </h6>

                  <Rate
                    disabled
                    defaultValue={4.5}
                    className="text-[#ffbf00]"
                  />
                </div>
              </div>
            </Col>

            <Col xs={24} lg={10}>
              <div
                className="relative bg-no-repeat bg-right h-[500px]"
                style={{
                  backgroundImage: `url('https://duoinn.com/easyslotbooking/assets/images/pricing/testi-user.png')`,
                }}
              ></div>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
