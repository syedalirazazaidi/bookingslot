import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Row, Col, Form, Input, Button, Typography, Card } from 'antd';
const { Title, Text } = Typography;

export default function Customer() {
  return (
    <section className="text-gray-600 body-font relative py-12">
      <div className=" px-6 lg:px-24 mx-auto">
        <Row gutter={16} align="middle">
          {/* Feedback Form */}
          <Col
            xs={24}
            md={12}
            className="flex flex-col items-center justify-center text-center"
          >
            <div className="bg-white p-6 w-full">
              <Title level={1} className="text-gray-900">
                Build amazing customer onboarding experiences
              </Title>
              <Text className="mb-5 text-[16px] w-[100px]  text-gray-600 font-thin">
                Boost engagement, spark human connection, and make new hires
                feel welcomed, whether they're in-house or remote!
              </Text>

              <Card
                bordered={true}
                className="w-full p-6 rounded-lg shadow-lg mt-10"
              >
                <p className="text-[18px] font-thin">
                  It only takes 60 seconds to
                  <br />
                  <span className="text-red-500">get a Free demo!</span>
                </p>

                <Form layout="vertical" className="w-full">
                  {/* Name Field */}
                  <Form.Item
                    label="Full Name"
                    name="name"
                    rules={[
                      { required: true, message: 'Please enter your name' },
                    ]}
                  >
                    <Input
                      placeholder="Full Name"
                      className="py-3 bg-[#F1F1F1]"
                    />
                  </Form.Item>

                  {/* Message Field */}
                  <Form.Item
                    label="Contact Number"
                    name="name"
                    rules={[
                      { required: true, message: 'Please enter your name' },
                    ]}
                  >
                    <Input
                      placeholder="Contact Number"
                      className="py-3 bg-[#F1F1F1]"
                    />
                  </Form.Item>

                  {/* Submit Button */}
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="bg-[#2F0559] hover:bg-[#2F0559]"
                  >
                    Write Us
                  </Button>
                </Form>
              </Card>
            </div>
          </Col>

          {/* Image Column */}
          <Col xs={24} md={12}>
            <div className="p-10 flex justify-center items-center">
              <StaticImage
                src="../../images/onboarding-bg.webp"
                alt="App Image"
                layout="constrained"
                placeholder="blurred"
                className="max-w-full"
              />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}
