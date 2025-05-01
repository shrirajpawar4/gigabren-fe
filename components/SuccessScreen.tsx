import React from 'react';
import { useAppKitAccount } from "@reown/appkit/react";
import { useReadGigaBrainPassBalanceOf } from '../src/generated/wagmiHooksGen';

interface SuccessScreenProps {
  transactionHash: string;
  onClose: () => void;
}

const SuccessScreen: React.FC<SuccessScreenProps> = ({ transactionHash, onClose }) => {
  const { address } = useAppKitAccount();
  const { data: balance } = useReadGigaBrainPassBalanceOf({
    args: [address as `0x${string}`],
  });

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[#12141A] rounded-2xl p-8 max-w-md w-full border border-emerald-600/20">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-emerald-400 rounded-full mx-auto mb-4 flex items-center justify-center">
            <svg className="w-8 h-8 text-black" viewBox="0 0 24 24">
              <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-2">Mint Successful!</h2>
          <p className="text-gray-400">Your GIGABRAIN Pass has been minted successfully.</p>
        </div>

        <div className="space-y-4 mb-6">
          <div className="bg-[#1A1C23] p-4 rounded-lg">
            <p className="text-sm text-gray-400 mb-1">Transaction Hash</p>
            <p className="text-emerald-400 font-mono text-sm break-all">{transactionHash}</p>
          </div>
          
          <div className="bg-[#1A1C23] p-4 rounded-lg">
            <p className="text-sm text-gray-400 mb-1">Your Balance</p>
            <p className="text-emerald-400 font-mono text-sm">{balance?.toString() || '0'} Passes</p>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <a
            href={`https://basescan.org/tx/${transactionHash}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full px-4 py-3 bg-[#1A1C23] text-emerald-400 rounded-lg hover:bg-[#1A1C23]/80 transition-colors text-center"
          >
            View on BaseScan
          </a>
          <button
            onClick={onClose}
            className="w-full px-4 py-3 bg-gradient-to-r from-emerald-600 to-emerald-400 text-black font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessScreen; 