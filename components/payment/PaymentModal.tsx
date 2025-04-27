import React, { useState } from 'react';
import DailyAccess from './DailyAccess';
import RecipientAddress from './RecipientAddress';
import MintPass from './MintPass';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose }) => {
  const [isGiftMode, setIsGiftMode] = useState(false);
  const [mintStatus, setMintStatus] = useState('Initializing subscription pass');

  if (!isOpen) return null;

  const handleMint = () => {
    // Add minting logic here
    setMintStatus('Processing mint...');
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-[#0A0B0D] border border-gray-800/50 rounded-lg w-full max-w-2xl mx-4">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-800/50">
          <h2 className="text-[#00FF9D] text-xl font-mono">GIGABRAIN PASS v1.0.0</h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <DailyAccess />
          <RecipientAddress 
            isGiftMode={isGiftMode}
            onToggleGiftMode={() => setIsGiftMode(!isGiftMode)}
          />
          <MintPass 
            status={mintStatus}
            onMint={handleMint}
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentModal; 