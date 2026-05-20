import React from 'react'
import { FiX } from 'react-icons/fi';


const Sidebardrawer = ({ 
  isOpen, 
  onClose, 
  children, 
  position = 'right',
  width = 'w-64' 
}) => {

  const positions = {
    left: 'left-0',
    right: 'right-0'
  };

  const slideClass = position === 'left' 
    ? (isOpen ? 'translate-x-0' : '-translate-x-full')
    : (isOpen ? 'translate-x-0' : 'translate-x-full');


  return (
    <>
    {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/55 bg-opacity-50 transition-opacity z-40"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 ${positions[position]} ${width} h-full
          bg-white shadow-xl z-50
          transform transition-transform duration-300 ease-in-out
          ${slideClass}
        `}
      >
        {/* Close Button */}
        <div className="p-4 border-b border-gray-200">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <FiX size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 overflow-y-auto h-[calc(100%-73px)]">
          {children}
        </div>
      </div>
    </>
  )
}

export default Sidebardrawer