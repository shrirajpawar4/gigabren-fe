import React, { useEffect, useState } from "react";
// import { useAppKitWallet } from "@reown/appkit-wallet-button/react";
import { useAppKit, useDisconnect, useAppKitAccount } from "@reown/appkit/react";


interface NavbarProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, toggleMenu }) => {
  const { open } = useAppKit();
  const { disconnect } = useDisconnect();
  const { isConnected } = useAppKitAccount();


  const renderButton = () => {
    if (!isConnected) {
      return (
        <button
          onClick={() => open()}
          className="bg-[#00FF9D] text-black px-4 py-2 rounded-lg"
        >
          Connect Wallet
        </button>
      );
    } else {
      return (
        <div className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-2 md:space-y-0">
          <button
            onClick={() => disconnect()}
            className="bg-[#00FF9D] text-black px-4 py-2 rounded-lg"
          >
            Disconnect wallet
          </button>
        </div>
      );
    }
  };


  return (
    <nav className="flex justify-between items-center px-6 py-4">
      <div className="flex items-center">
        <div className="text-2xl font-bold text-[#00FF9D]">GIGABRAIN</div>
      </div>

      <div className="hidden md:flex items-center space-x-8">{renderButton()}</div>

      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
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
        <div className="absolute top-16 left-0 right-0 bg-black border-b border-gray-800 py-4 px-6 md:hidden z-10">
          {renderButton()}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
