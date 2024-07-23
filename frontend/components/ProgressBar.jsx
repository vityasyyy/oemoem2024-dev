// components/ProgressBar.js
import React from 'react';

const ProgressBar = ({ enrolledBy, slots }) => {
    const progress = (enrolledBy.length / slots) * 100;

    return (
        <div className="w-full bg-gray-300 rounded-full h-2.5">
            <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: `${progress}%` }}
            ></div>
            <p className="text-center text-sm mt-1">{`${enrolledBy.length} / ${slots} slots filled`}</p>
        </div>
    );
};

export default ProgressBar;
