// File: app/page.tsx
'use client';

import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import PricingCard from '../components/subscription/PricingCard';
import PaymentModal from '../components/PaymentModal';
import Footer from '../components/layout/Footer';
import { useAppKitAccount } from "@reown/appkit/react";
import { useReadGigaBrainPassTotalSupply } from '../src/generated/wagmiHooksGen';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const subscriptionPlan = {
    title: 'Monthly Pass',
    subtitle: '30 days of Access',
    features: [
      '30 days of Platform Access',
      'Elite Members-Only Community',
      'Early Access to New Features',
      'Exclusive Investment Opportunities',
      'Reward Program',
      'Direct Access to Founding Team',
      'Benefit from Supply Reduction'
    ],
    buttonText: 'Buy on Base'
  };

  const { address } = useAppKitAccount();
  const { data: totalMinted, refetch: refetchTotalSupply, isLoading: isSupplyLoading } = useReadGigaBrainPassTotalSupply();
  const MAX_SUPPLY = 42;
  const remaining = typeof totalMinted === 'bigint' ? MAX_SUPPLY - Number(totalMinted) : MAX_SUPPLY;
  console.log('Connected wallet address:', address)

  return (
    <main className="min-h-screen bg-[#0A0B0D] text-white">
      <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

      {/* Hero Section */}
      <section className="px-6 py-20 text-center">
        <div className="mb-8">
          <h2 className="text-gray-400 uppercase tracking-wider">SUBSCRIPTION PLANS</h2>
        </div>
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12">
            <svg viewBox="0 0 24 24" className="w-full h-full text-[#00FF9D]">
              <path fill="currentColor" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
        </div>
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#00FF9D] to-[#00CC7E] bg-clip-text text-transparent">
          Select Your Access Level
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
          Access institutional-grade market intelligence and analytics. Choose the plan that best suits your needs.
        </p>
        
        <div className="mb-4 text-[#00FF9D] text-lg font-mono">
          {isSupplyLoading ? 'Loading supply...' : `Remaining Passes: ${remaining}`}
        </div>

        {/* Pricing Card */}
        <div className="max-w-4xl mx-auto">
          <PricingCard 
            {...subscriptionPlan}
            onBuyClick={() => setIsPaymentModalOpen(true)}
          />
        </div>
      </section>

      {/* Footer */}
      <Footer />

      <PaymentModal 
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
      />
    </main>
  );
}