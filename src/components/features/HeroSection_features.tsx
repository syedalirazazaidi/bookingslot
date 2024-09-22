import React from 'react';
import { Row, Col } from 'antd';
import 'tailwindcss/tailwind.css';

const featuresData = [
  {
    title: 'Error Handling',
    description:
      'ES Booking Extension takes care of all the errors popups up while booking the slot, especially on bulk release.',
    icon: 'https://duoinn.com/easyslotbooking/assets/images/icons/features/feat-error-icn.svg',
  },
  {
    title: 'Book date of your choice',
    description:
      'ES Booking Extension takes care of all the errors popups up while booking the slot, especially on bulk release.',
    icon: 'https://duoinn.com/easyslotbooking/assets/images/icons/features/feat-error-icn.svg',
  },
  {
    title: 'Time Saver',
    description:
      'ES Booking Extension takes care of all the errors popups up while booking the slot, especially on bulk release.',
    icon: 'https://duoinn.com/easyslotbooking/assets/images/icons/features/feat-error-icn.svg',
  },
  {
    title: 'Customer support',
    description:
      'ES Booking Extension takes care of all the errors popups up while booking the slot, especially on bulk release.',
    icon: 'https://duoinn.com/easyslotbooking/assets/images/icons/features/feat-error-icn.svg',
  },
  {
    title: 'Trusted by thousands',
    description:
      'ES Booking Extension takes care of all the errors popups up while booking the slot, especially on bulk release.',
    icon: 'https://duoinn.com/easyslotbooking/assets/images/icons/features/feat-error-icn.svg',
  },
  {
    title: 'Protect you from lockout',
    description:
      'ES Booking Extension takes care of all the errors popups up while booking the slot, especially on bulk release.',
    icon: 'https://duoinn.com/easyslotbooking/assets/images/icons/features/feat-error-icn.svg',
  },
];

const FeaturesSectionReversed = () => {
  return (
    <section className="features text-gray-600 bg-white">
      <div className="container px-5 py-24 mx-auto">
        <Row gutter={[32, 32]} className="no-margin flex-row-reverse">
          {/* Left Column (Now on the right) */}
          <Col xs={24} md={12} className="font-sans">
            <div className="text-[0.9375rem] font-semibold text-[#1a0681]">
              Features
            </div>
            <div className="feat_main_head mt-[2rem] mb-[1rem]">
              <div className="text-gray-900 text-[2.25rem] leading-[2.65rem] font-medium">
                Built specifically for the
              </div>
              <div className="font-sans text-[2.65rem] font-semibold tracking-[0.0225rem] text-[#000] mt-0">
                users want visa easily
              </div>
            </div>
            <p className="text-[0.9375rem] leading-[1.875rem] font-light text-[#656565] tracking-[0.00938rem]">
              We bring the breadth of our experience and industry knowledge to help your team. Visualize your product roadmap, write feature specs, and cross-functional collaboration.
            </p>
          </Col>

          {/* Right Column (Now on the left) */}
          <Col xs={24} md={12} className="font-sans">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {featuresData.map((item, index) => (
                <div key={index} className="p-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-[72px] h-[72px] bg-[#6641C5] rounded-full">
                      <img
                        src={item.icon}
                        alt={item.title}
                        title={item.title}
                        className="w-[36px] h-[36px]"
                      />
                    </div>
                  </div>
                  <div className="text-[#000] my-[1.5rem] text-[1.25rem] font-semibold tracking-[0.025rem]">
                    {item.title}
                  </div>
                  <p className="text-[0.875rem] leading-[1.625rem] font-light text-[#656565] tracking-[0.00875rem]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default FeaturesSectionReversed;
