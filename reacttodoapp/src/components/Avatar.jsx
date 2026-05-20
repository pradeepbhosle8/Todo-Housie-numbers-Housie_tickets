import React from 'react'

const Avatar = ({ 
  src, 
  alt, 
  size = 'md',
  status,
  initials,
  rounded = true 
}) => {

  const sizes = {
    xs: 'w-6 h-6 text-xs',
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-base',
    lg: 'w-12 h-12 text-lg',
    xl: 'w-16 h-16 text-xl',
    '2xl': 'w-24 h-24 text-2xl'
  };

  const statusColors = {
    online: 'bg-green-400',
    offline: 'bg-gray-400',
    busy: 'bg-red-400',
    away: 'bg-yellow-400'
  };

  const statusSizes = {
    xs: 'w-1.5 h-1.5',
    sm: 'w-2 h-2',
    md: 'w-2.5 h-2.5',
    lg: 'w-3 h-3',
    xl: 'w-4 h-4',
    '2xl': 'w-5 h-5'
  };


  return (
    <>
    <div className="relative inline-block">
      {src ? (
        <img
          src={src}
          alt={alt}
          className={`
            ${sizes[size]}
            ${rounded ? 'rounded-full' : 'rounded-lg'}
            object-cover border-2 border-white shadow-sm
          `}
        />
      ) : (
        <div className={`
          ${sizes[size]}
          ${rounded ? 'rounded-full' : 'rounded-lg'}
          bg-linear-to-br from-blue-400 to-blue-600
          flex items-center justify-center
          text-white font-semibold
          border-2 border-white shadow-sm
        `}>
          {initials || alt?.charAt(0).toUpperCase()}
        </div>
      )}
      
      {status && (
        <span className={`
          absolute bottom-0 right-0
          ${statusSizes[size]}
          ${statusColors[status]}
          border-2 border-white rounded-full
        `} />
      )}
    </div>
    </>
  )
}

// Avatar Group Component
export const AvatarGroup = ({ avatars, max = 3, size = 'md' }) => {
  const displayAvatars = avatars.slice(0, max);
  const remaining = avatars.length - max;

  return (
    <div className="flex -space-x-2">
      {displayAvatars.map((avatar, index) => (
        <div key={index} className="relative">
          <Avatar {...avatar} size={size} />
        </div>
      ))}
      {remaining > 0 && (
        <div className={`
          ${size === 'xs' ? 'w-6 h-6 text-xs' :
            size === 'sm' ? 'w-8 h-8 text-sm' :
            size === 'md' ? 'w-10 h-10 text-base' :
            size === 'lg' ? 'w-12 h-12 text-lg' : 'w-16 h-16 text-xl'}
          rounded-full bg-gray-700 text-white
          flex items-center justify-center
          font-semibold border-2 border-white
        `}>
          +{remaining}
        </div>
      )}
    </div>
  );
};

export default Avatar