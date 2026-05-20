import React from 'react'
import { FiCheck } from 'react-icons/fi';



const Checkboxnradio = ({ 
  label, 
  checked, 
  onChange, 
  disabled = false,
  indeterminate = false 
}) => {
  return (
    <>
    <label className={`
      inline-flex items-center cursor-pointer
      ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
    `}>
      <div className="relative">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          className="sr-only peer"
        />
        <div className={`
          w-5 h-5 border-2 rounded transition-all
          peer-checked:bg-blue-600 peer-checked:border-blue-600
          ${indeterminate ? 'bg-blue-600 border-blue-600' : 'border-gray-300'}
          ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}
        `}>
          {(checked || indeterminate) && (
            <FiCheck className="text-white w-full h-full p-0.5" strokeWidth={3} />
          )}
        </div>
      </div>
      {label && (
        <span className="ml-2 text-sm text-gray-700">{label}</span>
      )}
    </label>
    </>
  )
}

// Radio Button Component
export const Radio = ({ 
  label, 
  name, 
  checked, 
  onChange, 
  disabled = false 
}) => {
  return (
    <label className={`
      inline-flex items-center cursor-pointer
      ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
    `}>
      <div className="relative">
        <input
          type="radio"
          name={name}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          className="sr-only peer"
        />
        <div className={`
          w-5 h-5 border-2 rounded-full transition-all
          peer-checked:border-blue-600
          ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}
          border-gray-300
        `}>
          {checked && (
            <div className="w-full h-full rounded-full p-1">
              <div className="w-full h-full bg-blue-600 rounded-full" />
            </div>
          )}
        </div>
      </div>
      {label && (
        <span className="ml-2 text-sm text-gray-700">{label}</span>
      )}
    </label>
  );
};

// Switch/Toggle Component
export const Switch = ({ 
  checked, 
  onChange, 
  label,
  disabled = false 
}) => {
  return (
    <label className={`
      inline-flex items-center cursor-pointer
      ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
    `}>
      <div className="relative">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          className="sr-only peer"
        />
        <div className={`
          w-11 h-6 rounded-full transition-colors
          peer-checked:bg-blue-600
          ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}
          bg-gray-200
        `}>
          <div className={`
            absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full
            transition-transform
            ${checked ? 'translate-x-5' : 'translate-x-0'}
          `} />
        </div>
      </div>
      {label && (
        <span className="ml-3 text-sm text-gray-700">{label}</span>
      )}
    </label>
  );
};

export default Checkboxnradio