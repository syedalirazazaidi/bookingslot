import React from 'react';
import { Row, Col } from 'antd';
import 'tailwindcss/tailwind.css';

const SupportCustomersSection = () => {
  return (
    <section className="text-gray-600 bg-[#f5f5f5] ">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <Row gutter={[16, 16]} className="flex flex-col md:flex-row items-center ">
          {/* Left Side: Icon, Title, Text, and List */}
          <Col xs={24} md={12} className="md:text-left text-center mb-16 md:mb-0 font-sans">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              {/* Icon */}
              <div className="flex items-center justify-center mb-6">
                <span className="flex justify-center items-center w-[72px] h-[72px] bg-[#2f0559] rounded-full">
                  <img
                    src="https://duoinn.com/easyslotbooking/assets/images/icons/features/feat-error-icn.svg"
                    alt="Support Icon"
                    className="w-8 h-8"
                  />
                </span>
              </div>

              {/* Title */}
              <h6 className="text-[0.9375rem] font-semibold text-[#1a0681] leading-[0.01875rem] my-[1.5rem]">
                #1 Support for customers
              </h6>

              {/* Description */}
              <p className="mb-8 leading-8 text-gray-600 font-light tracking-[0.00938rem] text-[0.9375rem] w-4/5 font-poppins">
  Premium users will get Private discussion channels for all their queries, tricks, and tips for booking an appointment. ES Booking has the highest rated client support for its users. We're here 24 hours a day, every day of the week, including holidays.
</p>


              {/* List of Features */}
              <ul className="list-none text-left">
  <li className="flex items-center mb-4">
    <img
      src="https://duoinn.com/easyslotbooking/assets/images/icons/check-circle.svg"
      alt="Check"
      className="mr-2 w-5 h-5"
    />
    <span className="inline-flex ml-4 font-poppins text-[0.9375rem] font-light text-black tracking-[0.00938rem]">
      Email support and assistance.
    </span>
  </li>
  <li className="flex items-center mb-4">
    <img
      src="https://duoinn.com/easyslotbooking/assets/images/icons/check-circle.svg"
      alt="Check"
      className="mr-2 w-5 h-5"
    />
    <span className="inline-flex ml-4 font-poppins text-[0.9375rem] font-light text-black tracking-[0.00938rem]">
      Live chat for unlimited plan and workspaces.
    </span>
  </li>
  <li className="flex items-center">
    <img
      src="https://duoinn.com/easyslotbooking/assets/images/icons/check-circle.svg"
      alt="Check"
      className="mr-2 w-5 h-5"
    />
    <span className="inline-flex ml-4 font-poppins text-[0.9375rem] font-light text-black tracking-[0.00938rem]">
      Get weekly newsletter updates from EasySlot Booking.
    </span>
  </li>
</ul>

            </div>
          </Col>

          {/* Right Side: Image */}
          <Col xs={24} md={12} className="flex justify-center">
            <div className="relative w-full sm:w-3/4 md:w-full">
              <img
                className="object-cover object-center rounded-lg w-full"
                alt="Support for customers"
                src="https://duoinn.com/easyslotbooking/assets/images/features/feat-cstmr-support.webp"
              />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default SupportCustomersSection;
