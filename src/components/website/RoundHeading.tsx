import React from 'react';

interface RoundedHeadingProps {
  text: string; 
}

const RoundedHeading: React.FC<RoundedHeadingProps> = ({ text }) => {
  return (
    <div className="bg-purple rounded-full py-2.5 px-6 text-center mb-5 mx-auto w-fit">
      <h5 className='leading-none'>{text}</h5>
    </div>
  );
};

export default RoundedHeading;