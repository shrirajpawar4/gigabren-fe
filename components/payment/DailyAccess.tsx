import React from 'react';
import SectionTitle from '../ui/SectionTitle';

interface InfoBoxProps {
  label: string;
  value: string;
}

const InfoBox: React.FC<InfoBoxProps> = ({ label, value }) => (
  <div className="bg-[#12141A] p-4 rounded-lg">
    <div className="text-gray-400 mb-1">{label}</div>
    <div className="text-[#00FF9D] text-xl">{value}</div>
  </div>
);

const DailyAccess: React.FC = () => {
  return (
    <div className="mb-8">
      <SectionTitle>Daily Access</SectionTitle>
      <p className="text-gray-400 mb-6">&gt; Access our platform for 24 hours.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InfoBox label="PRICE:" value="0 BRAIN" />
        <InfoBox label="TOTAL AVAILABLE:" value="0" />
      </div>
    </div>
  );
};

export default DailyAccess; 