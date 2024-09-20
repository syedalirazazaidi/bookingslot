import React from 'react';

// Check Icon SVG Component
const CheckIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="blue"
    className="w-5 h-5 inline-block"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 13l4 4L19 7"
    />
  </svg>
);

// Define the props interface
interface FeatureCardProps {
  icon: string; // URL of the icon image
  title: string; // Title of the feature card
  items: string[]; // Array of items to display in the list
  backgroundColor: string; // Default CSS class for background color
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, items, backgroundColor }) => {
  return (
    <div className={`p-6 rounded-lg w-full ${backgroundColor}`}>
      <img src={icon} className="mb-4" alt={title} />
      <h4 className="text-[1.375rem] font-semibold leading-[2.125rem] text-black">{title}</h4>
      <ul className="my-2">
        {items.map((item, index) => (
          <li
            key={index}
            className={`flex items-start `}
          >
            <CheckIcon />
            <span className="ml-2 text-[0.9375rem] font-light leading-[1.5rem] text-[#5e5e5e]">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeatureCard;