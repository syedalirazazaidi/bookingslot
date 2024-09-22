import React from 'react';
import { Layout, Row, Col, Typography, Menu, Button } from 'antd';
import { FacebookOutlined, TwitterOutlined, YoutubeOutlined, InstagramOutlined, GlobalOutlined } from '@ant-design/icons';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

const { Footer } = Layout;
const { Title, Text } = Typography;

const AppFooter: React.FC = () => {
  return (
    <Footer className="bg-gray-100 py-12">
      <div className="mx-24">
        <Row gutter={[16, 16]} className="py-8">
          {/* Logo and About Section */}
          <Col xs={24} sm={12} md={6}>
            <Link to="/">
              <StaticImage
                src="../images/footer-logo.svg"
                alt="EasySlot Booking"
                layout="constrained"
                quality={100}
                className="mb-4"
              />
            </Link>
            <Text className="block text-gray-600 mb-4">
              We help you get your visa slots in a quick, easy, and secure manner. Become a part of our family today for a smoother visa slot booking process.
            </Text>
            <div className="footer_stack_logo">
              <span className="design_text block text-gray-500">Design and Developed by</span>
              <StaticImage
                src="../images/stackadroit-logo-footer.svg"
                alt="Stackadroit LLP"
                className="my-2"
              />
            </div>
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
          </Col>

          {/* Quick Links */}
          <Col xs={24} sm={12} md={4}>
            <Title level={5} className="text-gray-900">Quick Links</Title>
            <Menu className="border-none bg-transparent">
              <Menu.Item><Link to="/about_us">About Us</Link></Menu.Item>
              <Menu.Item><Link to="/features">Features</Link></Menu.Item>
              <Menu.Item><Link to="/pricing">Pricing</Link></Menu.Item>
              <Menu.Item><Link to="#">Download</Link></Menu.Item>
              <Menu.Item><Link to="#">Customer Support</Link></Menu.Item>
              <Menu.Item><Link to="#">Reviews</Link></Menu.Item>
            </Menu>
          </Col>

          {/* Company */}
          <Col xs={24} sm={12} md={4}>
            <Title level={5} className="text-gray-900">Company</Title>
            <Menu className="border-none bg-transparent">
              <Menu.Item><Link to="/success_stories">Success Stories</Link></Menu.Item>
              <Menu.Item><Link to="#">Careers</Link></Menu.Item>
              <Menu.Item><Link to="#">Customer Reviews</Link></Menu.Item>
              <Menu.Item><Link to="#">Agency Partners</Link></Menu.Item>
              <Menu.Item><Link to="/referral">Referral</Link></Menu.Item>
              <Menu.Item><Link to="#">Sitemap</Link></Menu.Item>
              <Menu.Item><Link to="#">Learn</Link></Menu.Item>
            </Menu>
          </Col>

          {/* Support */}
          <Col xs={24} sm={12} md={4}>
            <Title level={5} className="text-gray-900">Support</Title>
            <Menu className="border-none bg-transparent">
              <Menu.Item><Link to="#">Our Support</Link></Menu.Item>
              <Menu.Item><Link to="#">System Status</Link></Menu.Item>
              <Menu.Item><Link to="#">Knowledge Base</Link></Menu.Item>
              <Menu.Item><Link to="/contact-us">Contact Us</Link></Menu.Item>
              <Menu.Item><Link to="#">Write For Us</Link></Menu.Item>
            </Menu>
          </Col>

          {/* Helpful Links */}
          <Col xs={24} sm={12} md={4}>
            <Title level={5} className="text-gray-900">Helpful Links</Title>
            <Menu className="border-none bg-transparent">
              <Menu.Item><Link to="/privacypolicy">Privacy Policy</Link></Menu.Item>
              <Menu.Item><Link to="/terms-condition">Terms & Conditions</Link></Menu.Item>
              <Menu.Item><Link to="/refundpolicy">Refunds & Cancellation</Link></Menu.Item>
              <Menu.Item><Link to="/faqs">FAQs</Link></Menu.Item>
              <Menu.Item><Link to="#">Support</Link></Menu.Item>
            </Menu>
          </Col>
        </Row>

        {/* Footer Featured Products */}
        <div className="foot_featured_products py-6">
          <Title level={4} className="text-gray-900">Our Featured Products</Title>
          <div className="d-flex flex-row footer_text_icon">
            <div className="p-2">
              <span><i className="icon hand mr-2" />Visa Handshake</span>
            </div>
            <div className="p-2">
              <span><i className="icon passport mr-2" />Easy Slotbooking</span>
            </div>
          </div>
        </div>

        {/* Footer Copyright and Links */}
        <Row className="foot_copyright border-t border-gray-200 py-6">
          <Col xs={24} md={12}>
            <Text className="text-sm text-gray-500">
              © 2023 - 2024 ES Booking. All rights reserved.
            </Text>
          </Col>
          <Col xs={24} md={12} className="text-right">
            <Menu mode="horizontal" className="border-none inline-block bg-transparent">
              <Menu.Item><Link to="#">Privacy</Link></Menu.Item>
              <Menu.Item><span className="pipe_sign">|</span></Menu.Item>
              <Menu.Item><Link to="#">Terms of Use</Link></Menu.Item>
              <Menu.Item><span className="pipe_sign">|</span></Menu.Item>
              <Menu.Item><Link to="#">Cookie Preferences</Link></Menu.Item>
              <Menu.Item><span className="pipe_sign">|</span></Menu.Item>
              <Menu.Item><span>Do not sell or share any personal information</span></Menu.Item>
            </Menu>
          </Col>
        </Row>

        {/* Region Selector */}
        <div className="text-right">
          <Button icon={<GlobalOutlined />} className="choose_region">Choose Region</Button>
        </div>

        {/* USA Affiliation Disclaimer */}
        <div className="usa-affiliated py-4 text-center">
          <span>
            Easy Slot Booking is not affiliated, associated, authorized, or endorsed by the US Government or any of its subsidiaries.
          </span>
        </div>
      </div>
    </Footer>
  );
};

export default AppFooter;
