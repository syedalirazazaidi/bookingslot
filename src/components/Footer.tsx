import React from 'react';
import { Layout, Row, Col, Typography, Menu, Button } from 'antd';
import {
  FacebookOutlined,
  TwitterOutlined,
  YoutubeOutlined,
  InstagramOutlined,
  GlobalOutlined,
} from '@ant-design/icons';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

const { Footer } = Layout;
const { Title, Text } = Typography;

const AppFooter: React.FC = () => {
  return (
    <div>
      <Footer className="bg-gray-100 py-12">
        <div className="mx-24">
          <div className=" mx-auto py-8">
            <div className="flex flex-wrap justify-between">
              {/* Logo and About Section */}
              <div className="w-full md:w-1/4 px-4 mb-6 md:mb-0">
                <Link to="/">
                  <StaticImage
                    src="../images/footer-logo.svg"
                    alt="Easy Slot Booking"
                    layout="constrained"
                    quality={100}
                    className="mb-4"
                  />
                </Link>
                <div className="footer_stack_logo flex items-center gap-2">
                  <span className="block text-gray-500">
                    Design and Developed by
                  </span>
                  <StaticImage
                    src="../images/stackadroit-logo-footer.svg"
                    alt="Stackadroit LLP"
                    className="my-2 "
                  />
                </div>
                <p className="text-[#310C7D]  mb-4">
                  We help you get your visa slots in a quick, easy, and secure
                  manner. Become a part of our family today for a smoother visa
                  slot booking process.
                </p>

                <div className="flex gap-4 mt-4">
                  <a href="#" className="hover:text-gray-900">
                    <FacebookOutlined className="text-2xl" />
                  </a>
                  <a href="#" className="hover:text-gray-900">
                    <TwitterOutlined className="text-2xl" />
                  </a>
                  <a href="#" className="hover:text-gray-900">
                    <YoutubeOutlined className="text-2xl" />
                  </a>
                  <a href="#" className="hover:text-gray-900">
                    <InstagramOutlined className="text-2xl" />
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div className="w-full xs:w-1/2 sm:w-1/2 md:w-1/6 px-4 mb-6 md:mb-0">
                <h5 className="text-[15px] font-semibold text-[#310C7D] mb-4">
                  Quick Links
                </h5>
                <ul className="space-y-2">
                  <li>
                    <Link
                      to="/about_us"
                      className="text-[#310C7D]  hover:text-gray-900"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/features"
                      className="text-[#310C7D]  hover:text-gray-900"
                    >
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/pricing"
                      className="text-[#310C7D]  hover:text-gray-900"
                    >
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="text-[#310C7D]  hover:text-gray-900"
                    >
                      Download
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="text-[#310C7D]  hover:text-gray-900"
                    >
                      Customer Support
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="text-[#310C7D]  hover:text-gray-900"
                    >
                      Reviews
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Company */}
              <div className="w-full xs:w-1/2 sm:w-1/2 md:w-1/6 px-4 mb-6 md:mb-0">
                <h5 className="text-[15px] font-semibold text-[#310C7D]  mb-4">
                  Company
                </h5>
                <ul className="space-y-2">
                  <li>
                    <Link
                      to="/about_us"
                      className="text-[#310C7D]  hover:text-gray-900"
                    >
                      Success Stories
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/features"
                      className="text-[#310C7D]  hover:text-gray-900"
                    >
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/pricing"
                      className="text-[#310C7D]  hover:text-gray-900"
                    >
                      Customer Reviews
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="text-[#310C7D]  hover:text-gray-900"
                    >
                      Agency Partners
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="text-[#310C7D]  hover:text-gray-900"
                    >
                      Referral
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="text-[#310C7D]  hover:text-gray-900"
                    >
                      Sitemap
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="text-[#310C7D]  hover:text-gray-900"
                    >
                      Learn
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Support */}
              <div className="w-full xs:w-1/2 sm:w-1/2 md:w-1/6 px-4 mb-6 md:mb-0">
                <h5 className="text-[15px] font-semibold text-[#310C7D]  mb-4">
                  Support
                </h5>
                <ul className="space-y-2">
                  <li>
                    <Link
                      to="#"
                      className="text-[#310C7D]  hover:text-gray-900"
                    >
                      Our Support
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="text-[#310C7D]  hover:text-gray-900"
                    >
                      System Status
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="text-[#310C7D]  hover:text-gray-900"
                    >
                      Knowledge Base
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact-us"
                      className="text-[#310C7D]  hover:text-gray-900"
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="text-[#310C7D]  hover:text-gray-900"
                    >
                      Write For Us
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Helpful Links */}
              <div className="w-full xs:w-1/2 sm:w-1/2 md:w-1/6 px-4 mb-6 md:mb-0">
                <h5 className="text-[15px] font-semibold text-[#310C7D] mb-4">
                  Helpful Links
                </h5>
                <ul className="space-y-2">
                  <li>
                    <Link
                      to="/privacypolicy"
                      className="text-[#310C7D]  hover:text-gray-900"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/terms-condition"
                      className="text-[#310C7D]  hover:text-gray-900"
                    >
                      Terms & Conditions
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/refundpolicy"
                      className="text-[#310C7D]  hover:text-gray-900"
                    >
                      Refunds & Cancellation
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/faqs"
                      className="text-[#310C7D]  hover:text-gray-900"
                    >
                      FAQs
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="text-[#310C7D]  hover:text-gray-900"
                    >
                      Support
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Footer Featured Products */}
          <div className="py-6 text-center">
            <h4 className="text-gray-900 text-[18px] font-medium">
              Our Featured Products
            </h4>
            <div className="flex justify-center space-x-4 mt-4">
              <div className="p-2">
                <span className="flex items-center justify-center">
                  <StaticImage
                    src="../images/foot-hand-icn.svg"
                    alt="Visa Handshake"
                    placeholder="blurred"
                    layout="fixed"
                    width={30}
                    height={30}
                    className="mr-2"
                  />
                  Visa Handshake
                </span>
              </div>
              <div className="p-2">
                <span className="flex items-center justify-center">
                  <StaticImage
                    src="../images/foot-passport-icn.svg"
                    alt="Visa Handshake"
                    placeholder="blurred"
                    layout="fixed"
                    width={30}
                    height={30}
                    className="mr-2"
                  />{' '}
                  Easy Slotbooking
                </span>
              </div>
            </div>
          </div>

          {/* Footer Copyright and Links */}
          <Row className=" border-t gap-10  border-gray-200 py-6">
            <Col xs={24} md={6}>
              <Text className="text-sm text-gray-500">
                © 2023 - 2024 ES Booking. All rights reserved.
              </Text>
            </Col>
            <div className="text-center">
              <div className="inline-block">
                <Link to="#" className="text-gray-600 hover:text-gray-900">
                  Privacy
                </Link>
                <span className="mx-2 text-gray-400">|</span>
                <Link to="#" className="text-gray-600 hover:text-gray-900">
                  Terms of Use
                </Link>
                <span className="mx-2 text-gray-400">|</span>
                <Link to="#" className="text-gray-600 hover:text-gray-900">
                  Cookie Preferences
                </Link>
                <span className="mx-2 text-gray-400">|</span>
                <span className="text-gray-600">
                  Do not sell or share any personal information
                </span>
              </div>
            </div>

            <Col xs={24} md={4} className="text-right">
              <Button
                icon={<GlobalOutlined />}
                className="py-4 bg-[#2F0559] text-[#FFFFFF]"
              >
                Choose Region
              </Button>
            </Col>
          </Row>

          {/* Region Selector */}

          {/* USA Affiliation Disclaimer */}
        </div>
      </Footer>
      <div className=" bg-[#050826] text-[13px] py-4 text-center text-[#878985]">
        <span>
          Easy Slot Booking is not affiliated, associated, authorized, or
          endorsed by the US Government or any of its subsidiaries.
        </span>
      </div>
    </div>
  );
};

export default AppFooter;
