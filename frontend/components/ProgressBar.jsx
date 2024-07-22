import React from 'react';

const ProgressBar = ({ progress, maxProgress }) => {
  const percentage = (progress / maxProgress) * 100;

  return (
    <div className="w-full">
      <div className="flex justify-between text-xs text-white mb-1">
        <span>Participant</span>
        <span>{progress}/{maxProgress}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div 
          className="bg-green-500 h-2.5 rounded-full" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;