import React from 'react'
import { FiCheckCircle, FiAlertCircle, FiInfo, FiXCircle, FiX } from 'react-icons/fi';


const Alertntoast = ({ 
  type = 'info', 
  title, 
  message, 
  onClose,
  dismissible = true 
}) => {

  const types = {
    success: {
      bg: 'bg-green-50',
      border: 'border-green-200',
      text: 'text-green-800',
      icon: <FiCheckCircle className="text-green-400" size={20} />
    },
    error: {
      bg: 'bg-red-50',
      border: 'border-red-200',
      text: 'text-red-800',
      icon: <FiXCircle className="text-red-400" size={20} />
    },
    warning: {
      bg: 'bg-yellow-50',
      border: 'border-yellow-200',
      text: 'text-yellow-800',
      icon: <FiAlertCircle className="text-yellow-400" size={20} />
    },
    info: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      text: 'text-blue-800',
      icon: <FiInfo className="text-blue-400" size={20} />
    }
  };

  const config = types[type];


  return (
    <>
      <div className={`
      ${config.bg} ${config.border} ${config.text}
      border rounded-lg p-4 mb-4
    `}>
      <div className="flex">
        <div className="flex-shrink-0">
          {config.icon}
        </div>
        <div className="ml-3 flex-1">
          {title && (
            <h3 className="text-sm font-medium">{title}</h3>
          )}
          {message && (
            <p className={`text-sm ${title ? 'mt-2' : ''}`}>{message}</p>
          )}
        </div>
        {dismissible && onClose && (
          <div className="ml-auto pl-3">
            <button
              onClick={onClose}
              className="inline-flex rounded-md p-1.5 hover:bg-opacity-20 hover:bg-gray-900 focus:outline-none"
            >
              <FiX size={20} />
            </button>
          </div>
        )}
      </div>
    </div>
    </>
  )
}

// Toast Notification Component
export const Toast = ({ type, message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-4 right-4 z-50 animate-slide-in-right">
      <Alert type={type} message={message} onClose={onClose} />
    </div>
  );
};

export default Alertntoast