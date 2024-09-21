import React from 'react';
import { Layout, Row, Col, Typography, Menu } from 'antd';
import { StaticImage } from 'gatsby-plugin-image'; // Import StaticImage
import { Link } from 'gatsby'; // Gatsby's Link component
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from '@ant-design/icons';

const { Footer } = Layout;
const { Title, Text } = Typography;

// Define a type for the categories
type Category = 'Quick Links' | 'Company' | 'Support' | 'Helpful Links';

const AppFooter: React.FC = () => {
  // Function to return links for each category
  const getLinksForCategory = (category: Category) => {
    switch (category) {
      case 'Quick Links':
        return (
          <>
            <Menu.Item >
              <Link to="/home" >Home</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/aboutus">About Us</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/features">Features</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/pricing">Pricing</Link>
            </Menu.Item>
          </>
        );
      case 'Company':
        return (
          <>
            <Menu.Item>
              <Link to="/aboutus">About Us</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/careers">Careers</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/blog">Blog</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/press">Press</Link>
            </Menu.Item>
          </>
        );
      case 'Support':
        return (
          <>
            <Menu.Item>
              <Link to="/customersupport">Customer Support</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/faq">FAQ</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/contact">Contact Us</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/help">Help Center</Link>
            </Menu.Item>
          </>
        );
      case 'Helpful Links':
        return (
          <>
            <Menu.Item>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/terms-of-service">Terms of Service</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/disclaimer">Disclaimer</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/sitemap">Sitemap</Link>
            </Menu.Item>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <Footer style={{ backgroundColor: 'transparent', padding: '50px 90px' }}>
      <Row gutter={[16, 16]} justify="space-between">
        {/* Logo and Description */}
        <Col xs={24} sm={12} md={6}>
          <div>
            <Link to="/">
              <StaticImage
                src="../images/footer-logo.svg"
                alt="Logo-nw"
                placeholder="blurred"
                layout="fixed"
              />
            </Link>
            <Text style={{ marginTop: '16px', display: 'block' }}>
              Air plant banjo lyft occupy retro adaptogen indego
            </Text>
          </div>
        </Col>

        {/* Footer Categories */}
        <Col xs={24} sm={12} md={18}>
          <Row gutter={[16, 16]}>
            {(['Quick Links', 'Company', 'Support', 'Helpful Links'] as Category[]).map(
              (category, index) => (
                <Col xs={24} sm={12} md={6} key={index}>
                  <Title level={5}>{category}</Title>
                  <Menu style={{ border: 'none' }}>
                    {getLinksForCategory(category)}
                  </Menu>
                </Col>
              )
            )}
          </Row>
        </Col>
      </Row>

      <Row
        style={{
          marginTop: '40px',
          backgroundColor: 'transparent',
          padding: '20px',
        }}
        justify="space-between"
        align="middle"
      >
        <Col xs={24} sm={12}>
          <Text>
            © 2020 Tailblocks —{' '}
            <a
              href="https://twitter.com/knyttneve"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#1890ff' }}
            >
              @knyttneve
            </a>
          </Text>
        </Col>

        {/* Social Icons */}
        <Col xs={24} sm={12} style={{ textAlign: 'right' }}>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookOutlined
              style={{ fontSize: '24px', margin: '0 10px', color: '#555' }}
            />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterOutlined
              style={{ fontSize: '24px', margin: '0 10px', color: '#555' }}
            />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramOutlined
              style={{ fontSize: '24px', margin: '0 10px', color: '#555' }}
            />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinOutlined
              style={{ fontSize: '24px', margin: '0 10px', color: '#555' }}
            />
          </a>
        </Col>
      </Row>
    </Footer>
  );
};

export default AppFooter;
