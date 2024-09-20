// src/components/FeatureHighlights.tsx
import React from 'react';

const AboutUS: React.FC = () => {
  return (
    <section className="landing_about_us">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
            <div className="aboutus_left d-flex">
              <div className="box_for_content">
                <div
                  style={{ borderRadius: '1.25rem 1.25rem 1.25rem 0' }}
                  className=" flex flex-col items-center justify-center bg-[#9cd161] w-[170px] h-[190px]"
                >
                  <h3 className="text-[2rem] text-center">10K+</h3>
                  <span className="text-[1.125rem] leading-[1.875rem] font-light text-black text-center">
                    Member
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUS;
