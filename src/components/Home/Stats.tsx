import React from 'react';
import RoundedHeading from '../website/RoundHeading';
import StatsBox from '../website/StatBox'; 
const Stats: React.FC = () => {
  return (
    <div className='features_absolute_position'>
        <div className="container ">
      <RoundedHeading text="What we do" />

      <h2 className="mx-auto sm:w-[45%] w-full">
        Flexible services for every stage of your requierment
      </h2>

      <div className="flex md:flex-row flex-col flex-wrap justify-between">
        <StatsBox
          imageUrl="https://duoinn.com/easyslotbooking/assets/images/landing/bulb_icon_1.svg"
          bgColor="bg-pink"
          title="Easy to Useable"
          description="We always try to make our platform easier every time."
        />
        <StatsBox
          imageUrl="https://duoinn.com/easyslotbooking/assets/images/landing/users_icon_2.svg"
          bgColor="bg-blue"
          title="1M+ Users"
          description="We always give good feelings and impressions to each of our users"
        />
        <StatsBox
          imageUrl="https://duoinn.com/easyslotbooking/assets/images/landing/eye_icon_3.svg"
          bgColor="bg-purple"
          title="Tranparency Services"
          description="No one was harmed because everything was clear"
        />
        <StatsBox
          imageUrl="https://duoinn.com/easyslotbooking/assets/images/landing/thumb_icon_4.svg"
          bgColor="bg-orange"
          title="Happy Clients"
          description="Happy and satiesfied clients worldwide and still counting"
        />
      </div>

    </div>
    </div>
  
  );
};

export default Stats;
