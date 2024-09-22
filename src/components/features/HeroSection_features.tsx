import React from 'react';
import { Typography, Row, Col } from 'antd';
import 'tailwindcss/tailwind.css';

const { Title, Paragraph } = Typography;

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
        <Row gutter={[32, 32]} className="flex-row-reverse no-margin">
          {/* Right Column (Now on the left) */}
          <Col xs={24} md={12}>
            <Title
              style={{
                fontSize: '0.9375rem', // Use inline styles for font size
                fontWeight: 600,
                color: '#1a0681',
              }}
              level={5}
              className="text-[0.9375rem] text-[#1a0681] font-semibold"
            >
              Features
            </Title>
            <div className="feat_main_head">
              <Title
                style={{
                  fontSize: '2.25rem', // Use inline styles for font size
                  lineHeight: '2.65rem',
                  fontWeight: 500,
                  color: '#000',
                }}
                level={2}
                className="text-gray-900"
              >
                Built specifically for the
              </Title>
              <Title
                style={{
                  fontSize: '2.65rem', // Use inline styles for font size
                  fontWeight: 700,
                  letterSpacing: '0.0225rem',
                  color: '#000',
                  marginTop: '0px',
                }}
                level={1}
                className="text-indigo-600"
              >
                users want visa easily
              </Title>
            </div>
            <Paragraph
              style={{
                fontSize: '0.9375rem', // Use inline styles for font size
                lineHeight: '1.875rem',
                fontWeight: 300,
                letterSpacing: '0.00938rem',
                color: '#656565',
              }}
              className="regular_text"
            >
              We bring the breadth of our experience and industry knowledge to
              help your team. Visualize your product roadmap, write feature
              specs, and cross-functional collaboration.
            </Paragraph>
          </Col>

          {/* Left Column (Now on the right) */}
          <Col xs={24} md={12}>
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
                  <Title
                    style={{
                      display: 'flex',
                      width: '100%',
                      margin: '1.5rem 0',
                      fontSize: '1.25rem',
                      fontWeight: 600,
                      color: '#000',
                      letterSpacing: '0.025rem',
                    }}
                    level={4}
                    className="text-gray-900 mt-2"
                  >
                    {item.title}
                  </Title>
                  <p
                    style={{
                      display: 'flex',
                      fontSize: '0.875rem',
                      lineHeight: '1.625rem',
                      fontWeight: 300,
                      color: '#656565',
                      letterSpacing: '0.00875rem',
                    }}
                    className="text-gray-600"
                  >
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
