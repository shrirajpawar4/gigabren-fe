import React from 'react';
import SectionTitle from '../ui/SectionTitle';

interface MintPassProps {
  status?: string;
  onMint?: () => void;
}

const MintPass: React.FC<MintPassProps> = ({ 
  status = 'Initializing subscription pass',
  onMint 
}) => {
  return (
    <>
      <div className="bg-[#12141A] p-4 rounded-lg mb-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-6 h-6 text-gray-400">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <SectionTitle>MINT PASS</SectionTitle>
        </div>
        <p className="text-gray-400 ml-9">&gt; {status}</p>
      </div>

      <button 
        onClick={onMint}
        className="w-full bg-[#00FF9D] hover:bg-[#00CC7E] text-black font-mono py-4 rounded-lg transition-colors"
      >
        MINT PASS
      </button>
    </>
  );
};

export default MintPass; 