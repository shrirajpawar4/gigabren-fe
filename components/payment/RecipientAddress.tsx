import React from 'react';
import SectionTitle from '../ui/SectionTitle';

interface RecipientAddressProps {
  isGiftMode?: boolean;
  onToggleGiftMode?: () => void;
}

const RecipientAddress: React.FC<RecipientAddressProps> = ({ 
  isGiftMode = false, 
  onToggleGiftMode 
}) => {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <SectionTitle>RECIPIENT ADDRESS</SectionTitle>
        <button 
          onClick={onToggleGiftMode}
          className="bg-[#12141A] text-gray-400 px-4 py-1 rounded-lg text-sm hover:text-[#00FF9D] transition-colors"
        >
          GIFT MODE {isGiftMode ? 'ON' : 'OFF'}
        </button>
      </div>
    </div>
  );
};

export default RecipientAddress; 