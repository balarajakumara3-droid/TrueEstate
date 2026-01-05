import React from 'react';
import { Battery, Wifi, Signal } from 'lucide-react';

interface PhoneMockupProps {
  children: React.ReactNode;
  className?: string;
}

const PhoneMockup: React.FC<PhoneMockupProps> = ({ children, className = '' }) => {
  return (
    <div className={`relative mx-auto border-gray-900 dark:border-gray-900 bg-gray-900 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] md:h-[700px] md:w-[350px] shadow-2xl flex flex-col overflow-hidden ${className}`}>
      {/* Dynamic Island / Notch */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-[25px] w-[100px] bg-black rounded-b-2xl z-50 flex items-center justify-center">
        <div className="h-1.5 w-16 bg-gray-800 rounded-full opacity-50"></div>
      </div>

      {/* Status Bar */}
      <div className="h-8 bg-white w-full flex items-center justify-between px-6 pt-2 z-40 select-none text-xs font-medium text-black">
        <span>9:41</span>
        <div className="flex items-center space-x-1.5">
          <Signal size={12} className="fill-black" />
          <Wifi size={12} />
          <Battery size={12} className="fill-black" />
        </div>
      </div>

      {/* Screen Content */}
      <div className="flex-1 bg-neutral-50 overflow-hidden relative font-sans text-neutral-900 w-full">
        {children}
      </div>

      {/* Home Indicator */}
      <div className="h-4 bg-white w-full flex items-center justify-center z-40 pb-1">
         <div className="w-1/3 h-1 bg-gray-900 rounded-full"></div>
      </div>
      
      {/* Side Buttons (Visual only, CSS borders) */}
      <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[184px] rounded-l-lg"></div>
      <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
    </div>
  );
};

export default PhoneMockup;