// import React from 'react';
// import { Collapse } from 'antd';

// const { Panel } = Collapse;

// const FAQSection = () => {
//   return (
//     <section id="faq-section" className="pricing_question py-[150px] bg-[#f5f5f5]">
//       <div className="container mx-auto">
//         <div className="flex flex-col lg:flex-row">
//           {/* Left Column */}
//           <div className="lg:w-1/2 w-full pr-4 mb-8 lg:mb-0">
//             <Collapse
//               accordion
//               expandIconPosition="right"
//               className="bg-transparent border-none"
//             >
//               <Panel header="How does 24/7/365 support work?" key="1" >
//                 <p className="text-gray-600">
//                   Placeholder content for this accordion, which is intended to
//                   demonstrate the accordion-flush class. This is the first item's
//                   accordion body.
//                 </p>
//               </Panel>
//               <Panel
//                 header="Do you charge any tax on monthly invoices?"
//                 key="2"
                
//               >
//                 <p className="text-gray-600">
//                   Placeholder content for this accordion, which is intended to
//                   demonstrate the accordion-flush class. This is the second
//                   item's accordion body.
//                 </p>
//               </Panel>
//               <Panel
//                 header="Do you charge any tax on monthly invoices?"
//                 key="3"
//                 className="border-0"
//               >
//                 <p className="text-gray-600">
//                   Placeholder content for this accordion, which is intended to
//                   demonstrate the accordion-flush class. This is the third item's
//                   accordion body.
//                 </p>
//               </Panel>
//               <Panel header="Can I have separate pricing plans?" key="4" className="border-0">
//                 <p className="text-gray-600">
//                   Placeholder content for this accordion, which is intended to
//                   demonstrate the accordion-flush class. This is the third item's
//                   accordion body.
//                 </p>
//               </Panel>
//               <Panel
//                 header="What payment methods do you accept?"
//                 key="5"
//                 className="border-0"
//               >
//                 <p className="text-gray-600">
//                   Placeholder content for this accordion, which is intended to
//                   demonstrate the accordion-flush class. This is the third item's
//                   accordion body.
//                 </p>
//               </Panel>
//             </Collapse>
//           </div>

//           {/* Right Column */}
//           <div className="lg:w-1/2 w-full pl-4">
//             <Collapse
//               accordion
//               expandIconPosition="right"
//               className="bg-transparent border-none"
//             >
//               <Panel header="Can I launch separate applications?" key="6" className="">
//                 <p className="text-gray-600">
//                   Placeholder content for this accordion, which is intended to
//                   demonstrate the accordion-flush class. This is the first item's
//                   accordion body.
//                 </p>
//               </Panel>
//               <Panel
//                 header="How can I cancel my ES Booking account?"
//                 key="7"
//                 className="border-0"
//               >
//                 <p className="text-gray-600">
//                   Placeholder content for this accordion, which is intended to
//                   demonstrate the accordion-flush class. This is the second
//                   item's accordion body.
//                 </p>
//               </Panel>
//               <Panel
//                 header="What features do you offer and others not?"
//                 key="8"
//                 className="border-0"
//               >
//                 <p className="text-gray-600">
//                   Placeholder content for this accordion, which is intended to
//                   demonstrate the accordion-flush class. This is the third item's
//                   accordion body.
//                 </p>
//               </Panel>
//               <Panel header="What is your refund policy?" key="9" className="border-0">
//                 <p className="text-gray-600">
//                   Placeholder content for this accordion, which is intended to
//                   demonstrate the accordion-flush class. This is the third item's
//                   accordion body.
//                 </p>
//               </Panel>
//               <Panel
//                 header="Do you offer discounts for students or educators?"
//                 key="10"
//                 className="border-0"
//               >
//                 <p className="text-gray-600">
//                   Placeholder content for this accordion, which is intended to
//                   demonstrate the accordion-flush class. This is the third item's
//                   accordion body.
//                 </p>
//               </Panel>
//             </Collapse>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FAQSection;

import React from 'react';
import { Collapse } from 'antd';

const { Panel } = Collapse;

const FAQSection = () => {
  return (
    <section
      id="faq-section"
      className="pricing_question relative z-[111] w-full bg-[#f5f5f5] py-[0px]"
    >
          {/* Background SVG Image */}
      <div className="relative top-[-5rem] min-h-[350px] bg-[url('https://duoinn.com/easyslotbooking/assets/images/pricing/questions_bg.svg')] bg-no-repeat bg-left"></div>

      <div className="container mx-auto relative top-[-10rem] w-[70%]">
        <div className="flex flex-col lg:flex-row">
          {/* Left Column */}
          <div className="lg:w-1/2 w-full pr-4 mb-8 lg:mb-0">
            <Collapse accordion expandIconPosition="right" className="bg-transparent border-none">
              <Panel header="How does 24/7/365 support work?" key="1" className="border-0">
                <p className="text-gray-600">
                  Placeholder content for this accordion, which is intended to demonstrate the
                  accordion-flush class. This is the first item's accordion body.
                </p>
              </Panel>
              <Panel header="Do you charge any tax on monthly invoices?" key="2" className="border-0">
                <p className="text-gray-600">
                  Placeholder content for this accordion, which is intended to demonstrate the
                  accordion-flush class. This is the second item's accordion body.
                </p>
              </Panel>
              <Panel header="Do you charge any tax on monthly invoices?" key="3" className="border-0">
                <p className="text-gray-600">
                  Placeholder content for this accordion, which is intended to demonstrate the
                  accordion-flush class. This is the third item's accordion body.
                </p>
              </Panel>
              <Panel header="Can I have separate pricing plans?" key="4" className="border-0">
                <p className="text-gray-600">
                  Placeholder content for this accordion, which is intended to demonstrate the
                  accordion-flush class. This is the third item's accordion body.
                </p>
              </Panel>
              <Panel header="What payment methods do you accept?" key="5" className="border-0">
                <p className="text-gray-600">
                  Placeholder content for this accordion, which is intended to demonstrate the
                  accordion-flush class. This is the third item's accordion body.
                </p>
              </Panel>
            </Collapse>
          </div>

          {/* Right Column */}
          <div className="lg:w-1/2 w-full pl-4">
            <Collapse accordion expandIconPosition="right" className="bg-transparent border-none">
              <Panel header="Can I launch separate applications?" key="6" className="border-0">
                <p className="text-gray-600">
                  Placeholder content for this accordion, which is intended to demonstrate the
                  accordion-flush class. This is the first item's accordion body.
                </p>
              </Panel>
              <Panel header="How can I cancel my ES Booking account?" key="7" className="border-0">
                <p className="text-gray-600">
                  Placeholder content for this accordion, which is intended to demonstrate the
                  accordion-flush class. This is the second item's accordion body.
                </p>
              </Panel>
              <Panel header="What features do you offer and others not?" key="8" className="border-0">
                <p className="text-gray-600">
                  Placeholder content for this accordion, which is intended to demonstrate the
                  accordion-flush class. This is the third item's accordion body.
                </p>
              </Panel>
              <Panel header="What is your refund policy?" key="9" className="border-0">
                <p className="text-gray-600">
                  Placeholder content for this accordion, which is intended to demonstrate the
                  accordion-flush class. This is the third item's accordion body.
                </p>
              </Panel>
              <Panel header="Do you offer discounts for students or educators?" key="10" className="border-0">
                <p className="text-gray-600">
                  Placeholder content for this accordion, which is intended to demonstrate the
                  accordion-flush class. This is the third item's accordion body.
                </p>
              </Panel>
            </Collapse>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
