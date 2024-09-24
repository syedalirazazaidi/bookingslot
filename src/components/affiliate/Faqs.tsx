import { Link } from 'gatsby';
import React, { useState } from 'react';

export default function FAQ() {
  const [openPanel, setOpenPanel] = useState(null);

  const togglePanel = (panelKey: any) => {
    setOpenPanel(openPanel === panelKey ? null : panelKey);
  };

  return (
    <div className="h-screen">
      <section className="max-w-5xl mx-auto py-10 sm:py-20">
        {/* Heading Section */}
        <div className="flex items-center justify-center flex-col gap-y-2 py-5">
          <h2 className="text-2xl md:text-2xl lg:text-3xl font-medium">
            FAQ's
          </h2>
          <p className="text-[15px] font-light text-[#6E6C6A] ">
            Have questions about Easy slot booking referral program? Let us help
            you answer them.
          </p>
        </div>

        {/* FAQ Section */}
        <div className="w-full px-7 md:px-10 xl:px-2 py-4">
          <div className="mx-auto w-full max-w-5xl bg-white">
            {/* Panel 1 */}
            <div className="p-5 border-b-2 border-gray-200">
              <button
                className="flex justify-between w-full text-left text-[15px] font-medium text-slate-800 focus:outline-none"
                onClick={() => togglePanel(1)}
              >
                <span>What's Easy slot booking's Refer-A-Friend program?</span>
                <svg
                  className={`h-5 w-5 transform transition-transform ${
                    openPanel === 1 ? 'rotate-180' : ''
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openPanel === 1 && (
                <p className="mt-3 text-sm  text-[13px] font-light ">
                  Rakuten offers cash bonuses to our members for spreading the
                  word about earning Cash Back. Just send your friend a unique
                  link by text, email or social media. If someone you refer
                  signs up for Rakuten and makes a qualifying purchase, you can
                  both earn a reward! The purchase requirement and reward amount
                  can vary, but the most current promotion can always be found
                  on this page.{' '}
                </p>
              )}
            </div>

            {/* Panel 2 */}
            <div className="p-5 border-b-2 border-gray-200">
              <button
                className="flex justify-between w-full text-left text-[15px] font-medium text-slate-800 focus:outline-none"
                onClick={() => togglePanel(2)}
              >
                <span>What do my friends need to do?</span>
                <svg
                  className={`h-5 w-5 transform transition-transform ${
                    openPanel === 2 ? 'rotate-180' : ''
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openPanel === 2 && (
                <p className="mt-3 text-sm  text-[13px] font-light">
                  Rakuten offers cash bonuses to our members for spreading the
                  word about earning Cash Back. Just send your friend a unique
                  link by text, email or social media. If someone you refer
                  signs up for Rakuten and makes a qualifying purchase, you can
                  both earn a reward! The purchase requirement and reward amount
                  can vary, but the most current promotion can always be found
                  on this page.{' '}
                </p>
              )}
            </div>

            {/* Panel 3 */}
            <div className="p-5 border-b-2 border-gray-200">
              <button
                className="flex justify-between w-full text-left text-[15px] font-medium text-slate-800 focus:outline-none"
                onClick={() => togglePanel(3)}
              >
                <span>When will I receive my bonus?</span>
                <svg
                  className={`h-5 w-5 transform transition-transform ${
                    openPanel === 3 ? 'rotate-180' : ''
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openPanel === 3 && (
                <p className="mt-3 text-sm  text-[13px] font-light ">
                  Rakuten offers cash bonuses to our members for spreading the
                  word about earning Cash Back. Just send your friend a unique
                  link by text, email or social media. If someone you refer
                  signs up for Rakuten and makes a qualifying purchase, you can
                  both earn a reward! The purchase requirement and reward amount
                  can vary, but the most current promotion can always be found
                  on this page.{' '}
                </p>
              )}
            </div>

            {/* Panel 4 */}
            <div className="p-5 border-b-2 border-gray-200">
              <button
                className="flex justify-between w-full text-left text-[15px] font-medium text-slate-800 focus:outline-none"
                onClick={() => togglePanel(4)}
              >
                <span>What does an expired referral mean?</span>
                <svg
                  className={`h-5 w-5 transform transition-transform ${
                    openPanel === 4 ? 'rotate-180' : ''
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openPanel === 4 && (
                <p className="mt-3 text-sm  text-[13px] font-light ">
                  Rakuten offers cash bonuses to our members for spreading the
                  word about earning Cash Back. Just send your friend a unique
                  link by text, email or social media. If someone you refer
                  signs up for Rakuten and makes a qualifying purchase, you can
                  both earn a reward! The purchase requirement and reward amount
                  can vary, but the most current promotion can always be found
                  on this page.{' '}
                </p>
              )}
            </div>
            <div className="p-5 border-b-2 border-gray-200">
              <button
                className="flex justify-between w-full text-left text-[15px] font-medium text-slate-800 focus:outline-none"
                onClick={() => togglePanel(5)}
              >
                <span>What does a pending referral mean?</span>
                <svg
                  className={`h-5 w-5 transform transition-transform ${
                    openPanel === 5 ? 'rotate-180' : ''
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openPanel === 5 && (
                <p className="mt-3 text-sm  text-[13px] font-light ">
                  Rakuten offers cash bonuses to our members for spreading the
                  word about earning Cash Back. Just send your friend a unique
                  link by text, email or social media. If someone you refer
                  signs up for Rakuten and makes a qualifying purchase, you can
                  both earn a reward! The purchase requirement and reward amount
                  can vary, but the most current promotion can always be found
                  on this page.{' '}
                </p>
              )}
            </div>
            <div className="p-5 border-b-2 border-gray-200">
              <button
                className="flex justify-between w-full text-left text-[15px] font-medium text-slate-800 focus:outline-none"
                onClick={() => togglePanel(6)}
              >
                <span>What does a pending referral mean?</span>
                <svg
                  className={`h-5 w-5 transform transition-transform ${
                    openPanel === 6 ? 'rotate-180' : ''
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openPanel === 6 && (
                <p className="mt-3 text-sm  text-[13px] font-light ">
                  Rakuten offers cash bonuses to our members for spreading the
                  word about earning Cash Back. Just send your friend a unique
                  link by text, email or social media. If someone you refer
                  signs up for Rakuten and makes a qualifying purchase, you can
                  both earn a reward! The purchase requirement and reward amount
                  can vary, but the most current promotion can always be found
                  on this page.{' '}
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center text-[#0266B9]">
          <Link to="/">Read the full FAQ</Link>
        </div>
        <div className="flex items-center justify-center text-[14px]  py-10">
          <Link to="#">
            Can't find an answer? Please chat to our friendly team.
          </Link>
        </div>
      </section>
    </div>
  );
}
