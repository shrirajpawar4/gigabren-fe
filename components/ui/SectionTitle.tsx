import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
  return (
    <h3 className="text-[#00FF9D] text-lg font-mono">[ {children} ]</h3>
  );
};

export default SectionTitle; 