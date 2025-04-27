// components/PaymentModal.tsx
'use client'

import React, { useEffect, useState } from 'react'
import { waitForTransactionReceipt } from 'wagmi/actions'
import { useChainId } from 'wagmi'
import { useReadUsdcTokenContractAllowance, useWriteUsdcTokenContractApprove, useReadGigaBrainPassPassCost, useWriteGigaBrainPassMintPass, useReadGigaBrainPassTotalSupply } from '../src/generated/wagmiHooksGen'
import { config } from '@/config'
import { useAppKitAccount } from "@reown/appkit/react";

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
    args: [userAddress as `0x${string}`, "0xbea09d316cea7fd48b547e9f88a4662bc941e268"],
  })
  const { writeContractAsync: approveUSDC } = useWriteUsdcTokenContractApprove()
  const { writeContractAsync: mintPass } = useWriteGigaBrainPassMintPass()
  const [loading, setLoading] = useState(false)

  // SUPPLY HOOKS
  const { data: totalMinted, isLoading: isSupplyLoading } = useReadGigaBrainPassTotalSupply();
  const MAX_SUPPLY = 42;
  const remaining = typeof totalMinted === 'bigint' ? MAX_SUPPLY - Number(totalMinted) : MAX_SUPPLY;

  useEffect(() => {
    if (isOpen) {
      refetchCost()
      console.log('Connected network chainId:', chainId)
    }
  }, [isOpen, refetchCost, chainId])

  if (!isOpen) return null
  if (!userAddress) {
    return <div>Please connect your wallet.</div>;
  }

  const handleMint = async () => {
    try {
      setLoading(true)
      console.log('Connected network chainId:', chainId)

      const freshCostResult = await refetchCost()
      console.log('freshCostResult:', freshCostResult)
      if (freshCostResult.error) {
        console.error('Error fetching cost:', freshCostResult.error)
      }
      const freshAllowanceResult = await refetchAllowance()
      console.log('freshAllowanceResult:', freshAllowanceResult)
      if (freshAllowanceResult.error) {
        console.error('Error fetching allowance:', freshAllowanceResult.error)
      }

      const freshCost = freshCostResult.data
      const freshAllowance = freshAllowanceResult.data

      if (!freshCost) throw new Error('Cost could not be fetched')
      if (freshAllowance === undefined) throw new Error('Allowance could not be fetched')

      if (freshAllowance < freshCost) {
        const approveTx = await approveUSDC({
          args: ["0xbea09d316cea7fd48b547e9f88a4662bc941e268", freshCost],
        })
        await waitForTransactionReceipt(config, { hash: approveTx })
      }

      const mintTx = await mintPass({
        args: [userAddress as `0x${string}`],
      })
      await waitForTransactionReceipt(config, { hash: mintTx })

      console.log('Pass minted successfully!')
      onClose()
    } catch (error) {
      console.error('Minting failed:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-[#0A0B0D] border border-gray-800/50 rounded-lg w-full max-w-2xl mx-4">
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

        <div className="p-6">
          <div className="mb-8">
            <h3 className="text-[#00FF9D] text-lg font-mono mb-2">[ Monthly Access ]</h3>
            <p className="text-gray-400 mb-6">&gt; Access our platform for 30 days.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#12141A] p-4 rounded-lg">
                <div className="text-gray-400 mb-1">PRICE:</div>
                <div className="text-[#00FF9D] text-xl">
                  {passCost ? `${Number(passCost) / 10 ** USDC_DECIMALS} USDC` : '...'}
                </div>
              </div>
              <div className="bg-[#12141A] p-4 rounded-lg">
                <div className="text-gray-400 mb-1">TOTAL SUPPLY:</div>
                <div className="text-[#00FF9D] text-xl">{remaining}</div>
              </div>
            </div>
          </div>

          <div className="bg-[#12141A] p-4 rounded-lg mb-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-6 h-6 text-gray-400">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-[#00FF9D] font-mono">[ MINT PASS ]</h3>
            </div>
            <p className="text-gray-400 ml-9">&gt; Initialize your subscription</p>
          </div>

          <button onClick={handleMint} disabled={loading} className="w-full bg-[#00FF9D] hover:bg-[#00CC7E] text-black font-mono py-4 rounded-lg transition-colors">
            {loading ? 'Processing...' : 'MINT PASS'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default PaymentModal
