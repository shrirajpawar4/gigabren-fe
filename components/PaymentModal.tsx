// components/PaymentModal.tsx
'use client'

import React, { useEffect, useState } from 'react'
import { waitForTransactionReceipt } from 'wagmi/actions'
import { useChainId } from 'wagmi'
import { useReadUsdcTokenContractAllowance, useWriteUsdcTokenContractApprove, useReadUsdcTokenContractBalanceOf, useReadGigaBrainPassPassCost, useWriteGigaBrainPassMintPass, useReadGigaBrainPassTotalSupply } from '../src/generated/wagmiHooksGen'
import { config } from '@/config'
import { useAppKitAccount } from "@reown/appkit/react";
import { formatUnits } from 'viem'

interface PaymentModalProps {
  isOpen: boolean
  onClose: () => void
}

const USDC_DECIMALS = 6

const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose }) => {
  const chainId = useChainId()
  const { data: passCost, refetch: refetchCost } = useReadGigaBrainPassPassCost()
  const { address: userAddress } = useAppKitAccount();
  const { refetch: refetchAllowance } = useReadUsdcTokenContractAllowance({
    args: [userAddress as `0x${string}`, "0x841ef521c0509e3cf26629650472e0f82920953b"],
  })
  const { writeContractAsync: approveUSDC } = useWriteUsdcTokenContractApprove()
  const { writeContractAsync: mintPass } = useWriteGigaBrainPassMintPass()
  const [loading, setLoading] = useState(false)
  const [isGiftMode, setIsGiftMode] = useState(false);
  const [mintStatus, setMintStatus] = useState('Initializing subscription pass');
  const [showInsufficientBalance, setShowInsufficientBalance] = useState(false);
  const [needsApproval, setNeedsApproval] = useState(false);

  // SUPPLY HOOKS
  const { data: totalMinted, isLoading: isSupplyLoading } = useReadGigaBrainPassTotalSupply();
  const MAX_SUPPLY = 42;
  const remaining = typeof totalMinted === 'bigint' ? MAX_SUPPLY - Number(totalMinted) : MAX_SUPPLY;

  // USDC Balance and Allowance
  const { data: usdcBalance } = useReadUsdcTokenContractBalanceOf({
    args: [userAddress as `0x${string}`],
  });
  const { data: allowance } = useReadUsdcTokenContractAllowance({
    args: [userAddress as `0x${string}`, "0x841ef521c0509e3cf26629650472e0f82920953b"],
  });

  useEffect(() => {
    if (isOpen) {
      refetchCost()
      console.log('Connected network chainId:', chainId)
    }
  }, [isOpen, refetchCost, chainId])

  useEffect(() => {
    if (passCost && usdcBalance) {
      const hasEnoughBalance = Number(usdcBalance) >= Number(passCost);
      if (!hasEnoughBalance) {
        setShowInsufficientBalance(true);
        return;
      }

      const hasEnoughAllowance = allowance && Number(allowance) >= Number(passCost);
      setNeedsApproval(!hasEnoughAllowance);
    }
  }, [passCost, usdcBalance, allowance]);

  if (!isOpen) return null
  if (!userAddress) {
    return <div>Please connect your wallet.</div>;
  }

  const handleApprove = async () => {
    if (!passCost) return;
    try {
      setMintStatus('Approving USDC...');
      await approveUSDC({
        args: ["0x841ef521c0509e3cf26629650472e0f82920953b", passCost],
      });
      setNeedsApproval(false);
      setMintStatus('USDC Approved');
    } catch (error) {
      console.error('Approval failed:', error);
      setMintStatus('Approval failed');
    }
  };

  const handleMint = async () => {
    try {
      setMintStatus('Minting pass...');
      await mintPass({
        args: [userAddress as `0x${string}`],
      });
      onClose();
    } catch (error) {
      console.error('Minting failed:', error);
      setMintStatus('Minting failed');
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-[#0A0B0D] border border-gray-800/50 rounded-xl p-6 sm:p-8 max-w-md w-full mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
            {showInsufficientBalance ? 'Insufficient Balance' : 'Complete Payment'}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {showInsufficientBalance ? (
          <div className="space-y-4">
            <p className="text-gray-300 text-sm sm:text-base">
              You don't have enough USDC to complete this transaction. Please add more USDC to your wallet.
            </p>
            <div className="flex justify-end">
              <button
                onClick={onClose}
                className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-gray-400 text-sm">Total Amount</p>
              <p className="text-2xl sm:text-3xl font-bold text-white">
                {passCost ? formatUnits(passCost, USDC_DECIMALS) : '0'} USDC
              </p>
            </div>

            {needsApproval ? (
              <div className="space-y-4">
                <p className="text-gray-300 text-sm sm:text-base">
                  You need to approve USDC spending before you can mint your pass.
                </p>
                <button
                  onClick={handleApprove}
                  disabled={mintStatus === 'Approving USDC...'}
                  className="w-full px-4 py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-green-400/20 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {mintStatus === 'Approving USDC...' ? 'Approving...' : 'Approve USDC'}
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-gray-300 text-sm sm:text-base">
                  Your USDC has been approved. You can now mint your pass.
                </p>
                <button
                  onClick={handleMint}
                  disabled={mintStatus === 'Minting...'}
                  className="w-full px-4 py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-green-400/20 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {mintStatus === 'Minting...' ? 'Minting...' : 'Mint Pass'}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default PaymentModal
