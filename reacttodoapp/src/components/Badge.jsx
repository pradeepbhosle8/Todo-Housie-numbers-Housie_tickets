import React from 'react'
import { FiX } from 'react-icons/fi';


const Badge = ({ 
  children, 
  variant = 'default', 
  size = 'md',
  rounded = true,
  removable = false,
  onRemove,
  dot = false
}) => {

  const variants = {
    default: 'bg-gray-100 text-gray-800',
    primary: 'bg-blue-100 text-blue-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    danger: 'bg-red-100 text-red-800',
    purple: 'bg-purple-100 text-purple-800',
  };

  const sizes = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-sm px-2.5 py-0.5',
    lg: 'text-base px-3 py-1',
  };


  return (
    <>
      <span className={`
      inline-flex items-center gap-1.5 font-medium
      ${variants[variant]}
      ${sizes[size]}
      ${rounded ? 'rounded-full' : 'rounded'}
    `}>
      {dot && (
        <span className={`w-2 h-2 rounded-full ${
          variant === 'default' ? 'bg-gray-500' :
          variant === 'primary' ? 'bg-blue-500' :
          variant === 'success' ? 'bg-green-500' :
          variant === 'warning' ? 'bg-yellow-500' :
          variant === 'danger' ? 'bg-red-500' :
          'bg-purple-500'
        }`} />
      )}
      {children}
      {removable && (
        <button
          onClick={onRemove}
          className="ml-0.5 hover:bg-black hover:bg-opacity-10 rounded-full p-0.5"
        >
          <FiX size={14} />
        </button>
      )}
    </span>
    </>
  )
}

// Notification Badge
export const NotificationBadge = ({ count, max = 99 }) => {
  const displayCount = count > max ? `${max}+` : count;
  
  return (
    <span className="inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full">
      {displayCount}
    </span>
  );
};

export default Badge