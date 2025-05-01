import React, { useEffect, useState } from "react";
// import { useAppKitWallet } from "@reown/appkit-wallet-button/react";
import { useAppKit, useDisconnect, useAppKitAccount } from "@reown/appkit/react";
import { Space_Mono } from 'next/font/google';

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

interface NavbarProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, toggleMenu }) => {
  const { open } = useAppKit();
  const { disconnect } = useDisconnect();
  const { isConnected } = useAppKitAccount();

  const buttonStyle = `block font-mono tracking-wider text-sm px-4 py-2 sm:px-5 sm:py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-green-400/20 transition-all duration-300 transform hover:scale-[1.02] ${spaceMono.className}`;

  const renderButton = () => {
    if (!isConnected) {
      return (
        <button
          onClick={() => open()}
          className={buttonStyle}
        >
          CONNECT_WALLET
        </button>
      );
    } else {
      return (
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0">
          <button
            onClick={() => disconnect()}
            className={buttonStyle}
          >
            DISCONNECT_WALLET
          </button>
        </div>
      );
    }
  };

  return (
    <nav className="flex justify-between items-center px-4 sm:px-6 py-4">
      <div className="flex items-center">
        <span className="font-bold text-lg sm:text-2xl text-emerald-400 transition-all duration-200 group-hover:from-green-500 group-hover:to-emerald-600">
          Gigabrain
        </span>
      </div>

      <div className="hidden sm:flex items-center space-x-4 sm:space-x-8">
        {renderButton()}
      </div>

      <div className="sm:hidden">
        <button 
          onClick={toggleMenu} 
          className="text-white focus:outline-none p-2"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-[#0A0B0D] border-b border-gray-800/50 py-4 px-4 sm:px-6 sm:hidden z-10">
          {renderButton()}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
