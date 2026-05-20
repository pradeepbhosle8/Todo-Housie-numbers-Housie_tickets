import React from 'react'

const Progressbar = ({ 
  value, 
  max = 100, 
  size = 'md',
  color = 'blue',
  showLabel = false,
  animated = false,
  striped = false
}) => {

  const percentage = Math.min((value / max) * 100, 100);
  
  const sizes = {
    xs: 'h-1',
    sm: 'h-2',
    md: 'h-3',
    lg: 'h-4',
    xl: 'h-6'
  };

  const colors = {
    blue: 'bg-blue-600',
    green: 'bg-green-600',
    red: 'bg-red-600',
    yellow: 'bg-yellow-600',
    purple: 'bg-purple-600',
  };


  return (
    <>
       <div className="w-full">
      {showLabel && (
        <div className="flex justify-between mb-1">
          <span className="text-sm font-medium text-gray-700">Progress</span>
          <span className="text-sm font-medium text-gray-700">{Math.round(percentage)}%</span>
        </div>
      )}
      
      <div className={`w-full bg-gray-200 rounded-full overflow-hidden ${sizes[size]}`}>
        <div
          className={`
            ${colors[color]} ${sizes[size]} rounded-full transition-all duration-300 ease-out
            ${striped ? 'bg-linear-to-r from-transparent via-white to-transparent bg-size-[20px_100%]' : ''}
            ${animated ? 'animate-pulse' : ''}
          `}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
    </>
  )
}

// Circular Progress
export const CircularProgress = ({ value, max = 100, size = 120, strokeWidth = 8 }) => {
  const percentage = Math.min((value / max) * 100, 100);
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="transparent"
          className="text-gray-200"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="text-blue-600 transition-all duration-500"
          strokeLinecap="round"
        />
      </svg>
      <span className="absolute text-xl font-semibold text-gray-700">
        {Math.round(percentage)}%
      </span>
    </div>
  );
};

export default Progressbar