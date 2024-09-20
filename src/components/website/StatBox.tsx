// StatsBox.tsx
import React from 'react';

interface StatsBoxProps {
  imageUrl: string;
  bgColor: string; // Tailwind CSS background color class
  title: string;
  description: string;
}

const StatsBox: React.FC<StatsBoxProps> = ({ imageUrl, bgColor, title, description }) => {
  return (
    <div className="sm:w-[25%] w-full flex flex-col items-center py-[30px] px-[0px] hover:shadow-statBox">
      <span className={`icon_box d-flex ${bgColor} h-[66px] w-[66px] rounded-[12px] flex justify-center items-center `}>
        <img src={imageUrl} height="36" width="36" alt={title} />
      </span>
      <h3>{title}</h3>
      <p className="text-[#5e5e5e] text-center">{description}</p>
    </div>
  );
};

export default StatsBox;