import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
  return (
    <h3 className="font-bold text-lg bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent transition-all duration-200 group-hover:from-green-500 group-hover:to-emerald-600 sm:text-2xl">
      [ {children} ]
    </h3>
  );
};

export default SectionTitle; 