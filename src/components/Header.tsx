import React, { useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import { Layout, Menu, Row, Col, Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import './style.css';
import ButtonGroup from 'antd/es/button/button-group';

const { Header } = Layout;

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const showDrawer = () => {
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <Header
      style={{
        backgroundColor: '#FFFFFF',
        padding: '0 90px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.08)',
        borderBottom: '2px solid #e0e0e0',
      }}
    >
      <Row align="middle" justify="space-between" style={{ width: '100%' }}>
        {/* Logo */}
        <Col xs={20} sm={18} md={4}>
          <Link to="/">
            <StaticImage
              src="../images/logo-nw.svg"
              alt="Logo-nw"
              placeholder="blurred"
              layout="fixed"
            />
          </Link>
        </Col>

        {/* Mobile Drawer Toggle Button - Only Visible on Mobile */}
        <Col xs={4} sm={6} md={0} style={{ textAlign: 'right' }}>
          <Button
            type="primary"
            icon={<MenuOutlined />}
            onClick={showDrawer}
            style={{
              border: 'none',
              backgroundColor: 'transparent',
              color: 'red',
            }}
          />
        </Col>

        {/* Desktop Menu - Hidden on Mobile */}
        <Col
          xs={0}
          sm={0}
          md={16}
          style={{ display: 'flex', justifyContent: 'flex-end' }}
          className="desktop-menu"
        >
          <Menu mode="horizontal" style={{ backgroundColor: 'transparent' }}>
            <Menu.Item key="features">
              <Link to="/features">Features</Link>
            </Menu.Item>
            <Menu.Item key="pricing">
              <Link to="/pricing">Pricing</Link>
            </Menu.Item>
            <Menu.Item key="affiliate">
              <Link to="/affiliate">Affiliate</Link>
            </Menu.Item>
            <Menu.Item key="support">
              <Link to="/support">Support</Link>
            </Menu.Item>
            <Menu.Item key="learn">
              <Link to="/learn">Learn</Link>
            </Menu.Item>
            <Menu.Item key="contact-sales">
              <Link to="/contact-sales">Contact Sales</Link>
            </Menu.Item>
            <Menu.Item key="join-now">
              <Button>Join Now</Button>
            </Menu.Item>
          </Menu>
        </Col>
      </Row>

      {/* Drawer for Mobile Menu */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={closeDrawer}
        open={drawerOpen}
      >
        <Menu mode="vertical" style={{ backgroundColor: 'transparent' }}>
          <Menu.Item key="features" onClick={closeDrawer}>
            <Link to="/features">Features</Link>
          </Menu.Item>
          <Menu.Item key="pricing" onClick={closeDrawer}>
            <Link to="/pricing">Pricing</Link>
          </Menu.Item>
          <Menu.Item key="affiliate" onClick={closeDrawer}>
            <Link to="/affiliate">Affiliate</Link>
          </Menu.Item>
          <Menu.Item key="support" onClick={closeDrawer}>
            <Link to="/support">Support</Link>
          </Menu.Item>
          <Menu.Item key="learn" onClick={closeDrawer}>
            <Link to="/learn">Learn</Link>
          </Menu.Item>
          <Menu.Item key="contact-sales" onClick={closeDrawer}>
            <Link to="/contact-sales">Contact Sales</Link>
          </Menu.Item>
        </Menu>
      </Drawer>
    </Header>
  );
}
