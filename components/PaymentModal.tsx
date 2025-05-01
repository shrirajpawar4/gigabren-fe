// components/PaymentModal.tsx
'use client'

import React, { useEffect, useState } from 'react'
import { waitForTransactionReceipt } from 'wagmi/actions'
import { useChainId } from 'wagmi'
import { useReadUsdcTokenContractAllowance, useWriteUsdcTokenContractApprove, useReadUsdcTokenContractBalanceOf, useReadGigaBrainPassPassCost, useWriteGigaBrainPass, useReadGigaBrainPassTotalSupply, useWriteGigaBrainPassMintPass } from '../src/generated/wagmiHooksGen'
import { config } from '@/config'
import { useAppKitAccount } from "@reown/appkit/react";
import { formatUnits } from 'viem'
import SuccessScreen from './SuccessScreen'
import { toast } from 'react-hot-toast'

interface PaymentModalProps {
  isOpen: boolean
  onClose: () => void
}

const USDC_DECIMALS = 6

const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose }) => {
  const chainId = useChainId()
  const { data: passCost, refetch: refetchCost, isLoading: isCostLoading } = useReadGigaBrainPassPassCost()
  const { address } = useAppKitAccount();
  const { refetch: refetchAllowance } = useReadUsdcTokenContractAllowance({
    args: [address as `0x${string}`, chainId === 8453 ? "0xe9e98a29bc63a8c7e35bfbbc858468342aad7b24" : "0x841ef521c0509e3cf26629650472e0f82920953b"],
  })
  const { writeContractAsync: approveUSDC } = useWriteUsdcTokenContractApprove()
  const { writeContractAsync: mint, isPending: isMinting, isSuccess: isMintSuccess, data: mintData } = useWriteGigaBrainPassMintPass()
  const [mintStatus, setMintStatus] = useState('Initializing subscription pass');
  const [showInsufficientBalance, setShowInsufficientBalance] = useState(false);
  const [needsApproval, setNeedsApproval] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [txHash, setTxHash] = useState<string | null>(null);

  // SUPPLY HOOKS
  const { data: totalMinted, isLoading: isSupplyLoading } = useReadGigaBrainPassTotalSupply();
  const MAX_SUPPLY = 42;
  const remaining = typeof totalMinted === 'bigint' ? MAX_SUPPLY - Number(totalMinted) : MAX_SUPPLY;

  // USDC Balance and Allowance
  const { data: usdcBalance, refetch: refetchUsdcBalance } = useReadUsdcTokenContractBalanceOf({
    args: [address as `0x${string}`],
    chainId: chainId as 8453 | 84532,
  });
  const { data: allowance } = useReadUsdcTokenContractAllowance({
    args: [address as `0x${string}`, chainId === 8453 ? "0xe9e98a29bc63a8c7e35bfbbc858468342aad7b24" : "0x841ef521c0509e3cf26629650472e0f82920953b"],
    chainId: chainId as 8453 | 84532,
  });

  useEffect(() => {
    if (isOpen) {
      refetchCost();
      refetchUsdcBalance();
      console.log('Connected network chainId:', chainId);
    }
  }, [isOpen, refetchCost, refetchUsdcBalance, chainId]);
  
  useEffect(() => {
    if (passCost !== undefined && usdcBalance !== undefined) {
      const formattedBalance = Number(formatUnits(usdcBalance, USDC_DECIMALS));
      const formattedCost = Number(formatUnits(passCost, USDC_DECIMALS));
  
      console.log('Balance comparison:', {
        balance: formattedBalance,
        required: formattedCost,
        hasEnough: formattedBalance >= formattedCost,
      });
  
      if (formattedBalance < formattedCost) {
        setShowInsufficientBalance(true);
        return;
      } else {
        setShowInsufficientBalance(false);
      }
  
      const hasEnoughAllowance = allowance && allowance >= passCost;
      setNeedsApproval(!hasEnoughAllowance);
    }
  }, [passCost, usdcBalance, allowance, chainId]);
  

  useEffect(() => {
    if (isMintSuccess && txHash) {
      setShowSuccess(true);
    }
  }, [isMintSuccess, txHash]);

  if (!isOpen) return null
  if (!address) {
    return <div>Please connect your wallet.</div>;
  }

  if (showInsufficientBalance) {
    return (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-[#12141A] rounded-2xl p-8 max-w-md w-full border border-gray-800">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-red-500/20 border border-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 text-red-500" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-2">Insufficient Balance</h2>
            <p className="text-gray-400">You don't have enough USDC to purchase the pass.</p>
          </div>

          <div className="space-y-4 mb-6">
            <div className="bg-[#1A1C23] p-4 rounded-lg">
              <p className="text-sm text-gray-400 mb-1">Required Amount</p>
              <p className="text-emerald-400 font-mono text-sm">
                {isCostLoading ? '...' : passCost ? `${formatUnits(passCost, USDC_DECIMALS)} USDC` : '0 USDC'}
              </p>
            </div>
            
            <div className="bg-[#1A1C23] p-4 rounded-lg">
              <p className="text-sm text-gray-400 mb-1">Your Balance</p>
              <p className="text-emerald-400 font-mono text-sm">
                {usdcBalance ? `${formatUnits(usdcBalance, USDC_DECIMALS)} USDC` : '0 USDC'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-full px-4 py-3 bg-[#1A1C23] text-gray-400 rounded-lg hover:bg-[#1A1C23]/80 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  if (showSuccess && txHash) {
    return <SuccessScreen transactionHash={txHash} onClose={onClose} />;
  }

  const handleApprove = async () => {
    if (!passCost) return;
    try {
      setMintStatus('Approving USDC...');
      await approveUSDC({
        args: [chainId === 8453 ? "0xe9e98a29bc63a8c7e35bfbbc858468342aad7b24" : "0x841ef521c0509e3cf26629650472e0f82920953b", passCost],
      });
      setNeedsApproval(false);
      setMintStatus('USDC Approved');
      toast.success('USDC approval successful!');
    } catch (error) {
      console.error('Approval failed:', error);
      setMintStatus('Approval failed');
      toast.error('USDC approval was cancelled');
    }
  };

  const handleMint = async () => {
    if (!address) return;
    try {
      setMintStatus('Initiating mint...');
      const tx = await mint({
        args: [address as `0x${string}`],
      });
      
      if (tx) {
        setMintStatus('Waiting for transaction confirmation...');
        const loadingToast = toast.loading('Minting your pass...');
        
        try {
          const receipt = await waitForTransactionReceipt(config, {
            hash: tx as `0x${string}`,
          });

          if (receipt.status === 'success') {
            setTxHash(tx as string);
            setShowSuccess(true);
            toast.success('Pass minted successfully!', { id: loadingToast });
          } else {
            toast.error('Transaction was reverted', { id: loadingToast });
            setMintStatus('Transaction reverted');
          }
        } catch (error) {
          console.error('Transaction failed:', error);
          toast.error('Transaction failed or was cancelled', { id: loadingToast });
          setMintStatus('Transaction failed');
        }
      }
    } catch (error) {
      console.error('Minting failed:', error);
      toast.error('Transaction was cancelled');
      setMintStatus('Transaction cancelled');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[#12141A] rounded-2xl p-8 max-w-md w-full border border-gray-800">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-2">Confirm Purchase</h2>
          <p className="text-gray-400">Complete your GIGABRAIN Pass purchase</p>
        </div>

        <div className="space-y-4 mb-6">
          <div className="bg-[#1A1C23] p-4 rounded-lg">
            <p className="text-sm text-gray-400 mb-1">Price</p>
            <p className="text-emerald-400 font-mono text-sm">
              {isCostLoading ? '...' : passCost ? `${formatUnits(passCost, USDC_DECIMALS)} USDC` : '0 USDC'}
            </p>
          </div>
          
          <div className="bg-[#1A1C23] p-4 rounded-lg">
            <p className="text-sm text-gray-400 mb-1">Your Wallet</p>
            <p className="text-emerald-400 font-mono text-sm break-all">
              {address ? `${address.slice(0, 6)}...${address.slice(-4)}` : 'Not connected'}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          {needsApproval ? (
            <button
              onClick={handleApprove}
              disabled={isMinting}
              className="w-full px-4 py-3 bg-gradient-to-r from-emerald-600 to-emerald-400 text-black font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Approve USDC
            </button>
          ) : (
            <button
              onClick={handleMint}
              disabled={isMinting || !address}
              className="w-full px-4 py-3 bg-gradient-to-r from-emerald-600 to-emerald-400 text-black font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isMinting ? 'Minting...' : 'Confirm Purchase'}
            </button>
          )}
          <button
            onClick={onClose}
            className="w-full px-4 py-3 bg-[#1A1C23] text-gray-400 rounded-lg hover:bg-[#1A1C23]/80 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default PaymentModal
