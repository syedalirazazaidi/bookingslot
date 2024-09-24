import React from 'react';
import { StaticImage } from 'gatsby-plugin-image'; // Import StaticImage from gatsby

export default function Community() {
  return (
    <section className="text-gray-600 bg-[#EAEFFF] body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium py-4 title-font text-gray-900">
            Join the biggest community of Happy User's
          </h1>
          <h2 className="text-sm text-black tracking-widest font-normal title-font mb-1">
            Join our Referral Program now !
          </h2>
        </div>
        <div className="flex flex-wrap justify-center  -m-4">
          <StaticImage
            src="../../images/happy-user-bg.png"
            alt="hero-img"
            placeholder="blurred"
            layout="constrained"
            className="object-cover object-center rounded"
          />
        </div>
      </div>
    </section>
  );
}
