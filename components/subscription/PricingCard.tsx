import React from 'react';

interface PricingCardProps {
  title: string;
  price: string;
  subtitle: string;
  features: string[];
  buttonText: string;
  onBuyClick: () => void;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  subtitle,
  features,
  buttonText,
  onBuyClick
}) => {
  return (
    <div className="bg-[#12141A] rounded-2xl p-8 border border-gray-800 hover:border-[#00FF9D] transition-colors relative overflow-hidden">
      <div className="absolute top-4 right-4 px-4 py-1 bg-[#1A1C23] rounded-full text-[#00FF9D] text-sm">
        Elite Membership
      </div>
      
      <div className="flex gap-8">
        <div className="flex-1">
          <div className="w-16 h-16 bg-gradient-to-br from-[#00FF9D] to-[#00CC7E] rounded-xl mb-6 flex items-center justify-center">
            <svg className="w-8 h-8 text-black" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-4">{title}</h3>
          <div className="mb-6">
            <div className="text-4xl font-bold text-[#00FF9D]">{price}</div>
            <div className="text-gray-400">{subtitle}</div>
          </div>
          <button 
            onClick={onBuyClick}
            className="w-full bg-[#FFB800] hover:bg-[#FFA500] text-black font-bold py-3 px-6 rounded-lg transition-colors"
          >
            {buttonText}
          </button>
        </div>
        
        <div className="flex-1">
          <h4 className="text-[#00FF9D] font-bold mb-6">Elite Benefits</h4>
          <ul className="space-y-4">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-[#00FF9D] rounded-full mr-3"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PricingCard; 