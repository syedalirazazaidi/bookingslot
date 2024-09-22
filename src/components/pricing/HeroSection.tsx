
import React, { useState } from 'react';
import { Row, Col, Card, Button, Switch, Select } from 'antd';
import 'tailwindcss/tailwind.css';

const { Option } = Select;

const HeroSection: React.FC = () => {
  const [isPremium, setIsPremium] = useState(true);
  const [billingOption, setBillingOption] = useState('monthly');

  const handleSwitchChange = (checked: boolean) => {
    setIsPremium(checked);
  };

  const handleBillingOptionChange = (value: string) => {
    setBillingOption(value);
  };

  return (
    <section className="bg-white py-12">
      <div className="mx-auto text-center container">
        {/* Hero Section */}
        <div className="mb-8 flex flex-col justify-center items-center">
          <h6 className="text-[0.9375rem] font-semibold text-[#1a0681] tracking-[0.01875rem] mb-2">
            Pricing Plans
          </h6>

          <h2 className="flex flex-wrap w-[38%] my-4 font-poppins text-[2.25rem] leading-[3rem] font-semibold text-black text-center tracking-[0.0225rem]">
            Our pricing is simple with no hidden fees
          </h2>

          <p className="text-[0.9375rem] leading-[1.625rem] font-light text-[#656565] tracking-[0.00938rem] mt-4 mb-6">
            Our pricing plans are designed to be affordable, flexible, and tailored to your unique needs.
          </p>
        </div>

        {/* Pricing Tab and Switcher */}
        <div className="mb-[70px] flex justify-between items-center mx-auto max-w-4xl">
          <div className="flex items-center space-x-4">
            <span className={`${isPremium ? 'font-semibold' : ''}`}>Premium</span>
            <Switch
              checked={isPremium}
              onChange={handleSwitchChange}
              className="mx-2"
            />
            <span className={`${!isPremium ? 'font-semibold' : ''}`}>Standard</span>
          </div>

          {/* Dropdown for Monthly/Hourly */}
          <Select defaultValue="monthly" className="w-48" onChange={handleBillingOptionChange}>
            <Option value="monthly">Monthly</Option>
            <Option value="hourly">Hourly</Option>
          </Select>
        </div>

        {/* Pricing Cards */}
        <Row gutter={[16, 16]} justify="center">
  {/* Card 1 */}
  <Col xs={24} md={8}>
    <Card
      title={
        <div className="flex items-center">
          <i className="inline-flex mt-1 mr-1 text-2xl text-[#091e42]">₹</i>
          <h2 className="inline-flex text-[2.575rem] font-bold text-[#091e42] tracking-[0.0475rem] mr-1">
            {billingOption === 'monthly' ? '0' : '0'}
          </h2>
          <span className="inline-flex mt-[10px] text-[1.125rem] font-normal text-gray-600 tracking-[0.01125rem]">
            {billingOption === 'monthly' ? 'INR/mo' : 'INR/hr'}
          </span>
        </div>
      }
      bordered={false}
      className="shadow-lg rounded-[6px] p-6 border border-gray-300 transition-all duration-300 ease-in-out h-full"
    >
      <p className="text-gray-600 mb-4">Start-up plan: Includes taxes, DO hosting charges</p>
      <ul className="pl-5 text-left mb-6 text-[#33336f] space-y-2">
  <li className="flex justify-between w-full pb-[5px]">
    <span className="inline-flex font-poppins text-[0.8125rem] font-normal text-[#091e42] tracking-[0.00813rem]">
      RAM
    </span>
    <span className="inline-flex justify-start w-[15%] font-poppins text-[0.8125rem] font-semibold text-black tracking-[0.00813rem]">
      1GB
    </span>
  </li>
  <li className="flex justify-between w-full pb-[5px]">
    <span className="inline-flex font-poppins text-[0.8125rem] font-normal text-[#091e42] tracking-[0.00813rem]">
      Processor
    </span>
    <span className="inline-flex justify-start w-[15%] font-poppins text-[0.8125rem] font-semibold text-black tracking-[0.00813rem]">
      1 Core
    </span>
  </li>
  <li className="flex justify-between w-full pb-[5px]">
    <span className="inline-flex font-poppins text-[0.8125rem] font-normal text-[#091e42] tracking-[0.00813rem]">
      Storage
    </span>
    <span className="inline-flex justify-start w-[15%] font-poppins text-[0.8125rem] font-semibold text-black tracking-[0.00813rem]">
      25GB
    </span>
  </li>
  <li className="flex justify-between w-full pb-[5px]">
    <span className="inline-flex font-poppins text-[0.8125rem] font-normal text-[#091e42] tracking-[0.00813rem]">
      Bandwidth
    </span>
    <span className="inline-flex justify-start w-[15%] font-poppins text-[0.8125rem] font-semibold text-black tracking-[0.00813rem]">
      1TB
    </span>
  </li>
</ul>

      <Button
        type="primary"
        className="w-full h-[42.5px] mb-6 block py-[8px] px-[20px] text-[15px] font-medium text-[#0029db] uppercase bg-transparent border-2 border-[#0029db] rounded-[6px] shadow-[2px_4px_8px_rgba(0,_0,_0,_0.2)] transition-all duration-300 ease-in-out hover:bg-[#001fb3] hover:border-[#001fb3]"
      >
        Start Free
      </Button>
      <div>
        <h4 className="w-full my-[10px] text-[16px] leading-[16px] text-[#2d3283] text-center font-semibold mb-4">
          All Plans Come With:
        </h4>
        <ul className="list-disc pl-5 text-left text-[13px] leading-[20px] text-[#33336f] space-y-2">
          <li>Cloudflare Add-on <span className="inline-block px-[6px] py-[3px] text-[13px] font-bold leading-[13px] text-white align-middle bg-[#0b2cb1] rounded-[6px]">
  NEW
</span>
</li>
          <li>24/7/365 Support</li>
          <li>Free SSL</li>
          <li>Free Migration</li>
          <li>Unlimited Application Installation</li>
          <li>Team Management</li>
          <li>Dedicated Firewalls</li>
          <li>24/7 Real-time Monitoring</li>
          <li>Automated Backups</li>
          <li>Staging Environment</li>
          <li>Optimized With Advanced Caches</li>
          <li>Auto Healing</li>
          <li>Regular Security Patching</li>
          <li>HTTP/2 Enabled Servers</li>
          <li>SSH and SFTP Access</li>
        </ul>
      </div>
    </Card>
  </Col>

  {/* Card 2 with Most Popular Badge */}
  <Col xs={24} md={8} className="relative">
    <div className="absolute flex justify-center items-center top-[-44px] left-[8px] w-[352px] h-[46px] py-2 text-white text-center bg-[#2b3081] rounded-t-lg z-10 text-[16px] font-semibold uppercase">
      Most Popular
    </div>
    <Card
      title={
        <div className="flex items-center">
          <i className="inline-flex mt-1 mr-1 text-2xl text-[#091e42]">₹</i>
          <h2 className="inline-flex text-[2.575rem] font-bold text-[#091e42] tracking-[0.0475rem] mr-1">
            {billingOption === 'monthly' ? '3000' : '1200'}
          </h2>
          <span className="inline-flex mt-[10px] text-[1.125rem] font-normal text-gray-600 tracking-[0.01125rem]">
            {billingOption === 'monthly' ? 'INR/mo' : 'INR/hr'}
          </span>
        </div>
      }
      bordered={false}
      className="shadow-lg rounded-[0px] p-6 border border-gray-300 transition-all duration-300 ease-in-out h-full relative z-0"
    >
      <p className="text-gray-600 mb-4">Excluding Taxes. Includes DO Hosting Charges</p>
      <ul className="pl-5 text-left mb-6 text-[#33336f] space-y-2">
  <li className="flex justify-between w-full pb-[5px]">
    <span className="inline-flex font-poppins text-[0.8125rem] font-normal text-[#091e42] tracking-[0.00813rem]">
      RAM
    </span>
    <span className="inline-flex justify-start w-[15%] font-poppins text-[0.8125rem] font-semibold text-black tracking-[0.00813rem]">
      4GB
    </span>
  </li>
  <li className="flex justify-between w-full pb-[5px]">
    <span className="inline-flex font-poppins text-[0.8125rem] font-normal text-[#091e42] tracking-[0.00813rem]">
      Processor
    </span>
    <span className="inline-flex justify-start w-[15%] font-poppins text-[0.8125rem] font-semibold text-black tracking-[0.00813rem]">
      2 Core
    </span>
  </li>
  <li className="flex justify-between w-full pb-[5px]">
    <span className="inline-flex font-poppins text-[0.8125rem] font-normal text-[#091e42] tracking-[0.00813rem]">
      Storage
    </span>
    <span className="inline-flex justify-start w-[15%] font-poppins text-[0.8125rem] font-semibold text-black tracking-[0.00813rem]">
      80GB
    </span>
  </li>
  <li className="flex justify-between w-full pb-[5px]">
    <span className="inline-flex font-poppins text-[0.8125rem] font-normal text-[#091e42] tracking-[0.00813rem]">
      Bandwidth
    </span>
    <span className="inline-flex justify-start w-[15%] font-poppins text-[0.8125rem] font-semibold text-black tracking-[0.00813rem]">
      4TB
    </span>
  </li>
</ul>

      <Button
        type="primary"
        className="w-full h-[42.5px] mb-6 block py-[8px] px-[20px] text-[15px] font-medium text-white uppercase bg-[#0029db] border-2 border-[#0029db] rounded-[6px] shadow-[2px_4px_8px_rgba(0,_0,_0,_0.2)] transition-all duration-300 ease-in-out hover:bg-[#001fb3] hover:border-[#001fb3]"
      >
        Start Free
      </Button>
      <div>
        <h4 className="w-full my-[10px] text-[16px] leading-[16px] text-[#2d3283] text-center font-semibold mb-4">
          All Plans Come With:
        </h4>
        <ul className="list-disc pl-5 text-left text-[13px] leading-[20px] text-[#33336f] space-y-2">
          <li>Cloudflare Add-on <span className="inline-block px-[6px] py-[3px] text-[13px] font-bold leading-[13px] text-white align-middle bg-[#0b2cb1] rounded-[6px]">
  NEW
</span>
</li>
          <li>24/7/365 Support</li>
          <li>Free Object Cache Pro</li>
          <li>Free SSL</li>
          <li>Free Migration</li>
          <li>Unlimited Application Installation</li>
          <li>Team Management</li>
          <li>Dedicated Firewalls</li>
          <li>24/7 Real-time Monitoring</li>
          <li>Automated Backups</li>
          <li>Staging Environment</li>
          <li>Optimized With Advanced Caches</li>
          <li>Auto Healing</li>
          <li>Regular Security Patching</li>
          <li>HTTP/2 Enabled Servers</li>
          <li>SSH and SFTP Access</li>
        </ul>
      </div>
    </Card>
  </Col>

  {/* Card 3 */}
  <Col xs={24} md={8}>
    <Card
      title={
        <div className="flex items-center">
          <i className="inline-flex mt-1 mr-1 text-2xl text-[#091e42]">₹</i>
          <h2 className="inline-flex text-[2.575rem] font-bold text-[#091e42] tracking-[0.0475rem] mr-1">
            {billingOption === 'monthly' ? '8000' : '2000'}
          </h2>
          <span className="inline-flex mt-[10px] text-[1.125rem] font-normal text-gray-600 tracking-[0.01125rem]">
            {billingOption === 'monthly' ? 'INR/mo' : 'INR/hr'}
          </span>
        </div>
      }
      bordered={false}
      className="shadow-lg rounded-[6px] p-6 border border-gray-300 transition-all duration-300 ease-in-out h-full"
    >
      <p className="text-gray-600 mb-4">Excluding Taxes. Includes DO Hosting Charges</p>
      <ul className="pl-5 text-left mb-6 text-[#33336f] space-y-2">
  <li className="flex justify-between w-full pb-[5px]">
    <span className="inline-flex font-poppins text-[0.8125rem] font-normal text-[#091e42] tracking-[0.00813rem]">
      RAM
    </span>
    <span className="inline-flex justify-start w-[15%] font-poppins text-[0.8125rem] font-semibold text-black tracking-[0.00813rem]">
      8GB
    </span>
  </li>
  <li className="flex justify-between w-full pb-[5px]">
    <span className="inline-flex font-poppins text-[0.8125rem] font-normal text-[#091e42] tracking-[0.00813rem]">
      Processor
    </span>
    <span className="inline-flex justify-start w-[15%] font-poppins text-[0.8125rem] font-semibold text-black tracking-[0.00813rem]">
      4 Core
    </span>
  </li>
  <li className="flex justify-between w-full pb-[5px]">
    <span className="inline-flex font-poppins text-[0.8125rem] font-normal text-[#091e42] tracking-[0.00813rem]">
      Storage
    </span>
    <span className="inline-flex justify-start w-[15%] font-poppins text-[0.8125rem] font-semibold text-black tracking-[0.00813rem]">
      160GB
    </span>
  </li>
  <li className="flex justify-between w-full pb-[5px]">
    <span className="inline-flex font-poppins text-[0.8125rem] font-normal text-[#091e42] tracking-[0.00813rem]">
      Bandwidth
    </span>
    <span className="inline-flex justify-start w-[15%] font-poppins text-[0.8125rem] font-semibold text-black tracking-[0.00813rem]">
      5TB
    </span>
  </li>
</ul>

<Button
        type="primary"
        className="w-full h-[42.5px] mb-6 block py-[8px] px-[20px] text-[15px] font-medium text-[#0029db] uppercase bg-transparent border-2 border-[#0029db] rounded-[6px] shadow-[2px_4px_8px_rgba(0,_0,_0,_0.2)] transition-all duration-300 ease-in-out hover:bg-[#001fb3] hover:border-[#001fb3]"
      >
        Start Free
      </Button>
      <div>
        <h4 className="w-full my-[10px] text-[16px] leading-[16px] text-[#2d3283] text-center font-semibold mb-4">
          All Plans Come With:
        </h4>
        <ul className="list-disc pl-5 text-left text-[13px] leading-[20px] text-[#33336f] space-y-2">
          <li>Cloudflare Add-on <span className="inline-block px-[6px] py-[3px] text-[13px] font-bold leading-[13px] text-white align-middle bg-[#0b2cb1] rounded-[6px]">
  NEW
</span>
</li>
          <li>24/7/365 Support</li>
          <li>Free Object Cache Pro</li>
          <li>Free SSL</li>
          <li>Free Migration</li>
          <li>Unlimited Application Installation</li>
          <li>Team Management</li>
          <li>Dedicated Firewalls</li>
          <li>24/7 Real-time Monitoring</li>
          <li>Automated Backups</li>
          <li>Staging Environment</li>
          <li>Optimized With Advanced Caches</li>
          <li>Auto Healing</li>
          <li>Regular Security Patching</li>
          <li>HTTP/2 Enabled Servers</li>
          <li>SSH and SFTP Access</li>
        </ul>
      </div>
    </Card>
  </Col>
</Row>



      </div>
    </section>
  );
};

export default HeroSection;
