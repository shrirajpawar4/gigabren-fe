import React from 'react';
import { useReadGigaBrainPassPassCost } from '../../src/generated/wagmiHooksGen';
import { formatUnits } from 'viem';
import { useAppKitAccount, useAppKit } from "@reown/appkit/react";
import { toast } from 'react-hot-toast';

interface PricingCardProps {
  title: string;
  subtitle: string;
  features: string[];
  buttonText: string;
  onBuyClick: () => void;
}

const USDC_DECIMALS = 6;

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  subtitle,
  features,
  buttonText,
  onBuyClick
}) => {
  const { data: passCost, isLoading } = useReadGigaBrainPassPassCost();
  const { address } = useAppKitAccount();
  const { open: openConnectModal } = useAppKit();

  const handleBuyClick = () => {
    if (!address) {
      toast.error('Please connect your wallet first');
      openConnectModal();
      return;
    }
    onBuyClick();
  };

  return (
    <div className="bg-[#12141A] rounded-2xl p-8 border border-gray-800 hover:border-emerald-600 transition-colors relative overflow-hidden">
      <div className="flex gap-8">
        <div className="flex-1">
          <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-emerald-400 rounded-xl mb-6 flex items-center justify-center">
            <svg className="w-8 h-8 text-black" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-4">{title}</h3>
          <div className="mb-6">
            <div className="text-4xl font-bold text-emerald-400">
              {isLoading ? '...' : passCost ? `${formatUnits(passCost, USDC_DECIMALS)} USDC` : '0 USDC'}
            </div>
            <div className="text-gray-400">{subtitle}</div>
          </div>
          <button 
            onClick={handleBuyClick}
            className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-emerald-400 text-gray-900 font-semibold rounded-lg hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300 text-xs sm:text-sm transform hover:scale-[1.02]"
          >
            {!address ? 'Connect Wallet' : buttonText}
          </button>
        </div>
        
        <div className="flex-1">
          <h4 className="text-emerald-400 font-bold mb-6">Subscription Benefits</h4>
          <ul className="space-y-4">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></span>
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