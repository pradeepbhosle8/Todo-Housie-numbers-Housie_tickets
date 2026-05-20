import React from 'react'

const Card = ({ 
  children, 
  title, 
  subtitle,
  image,
  footer,
  hover = false,
  className = '' 
}) => {


  return (
    <>
      <div className={`
      bg-white rounded-lg shadow-md overflow-hidden
      ${hover ? 'hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1' : ''}
      ${className}
    `}>
      {image && (
        <div className="w-full h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className="p-6">
        {title && (
          <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        )}
        
        {subtitle && (
          <p className="text-gray-600 text-sm mb-4">{subtitle}</p>
        )}
        
        <div className="text-gray-700">
          {children}
        </div>
      </div>
      
      {footer && (
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          {footer}
        </div>
      )}
    </div>
    </>
  )
}

// Product Card Component
export const ProductCard = ({ image, title, price, rating, onAddToCart }) => {
  return (
    <Card 
      image={image}
      hover={true}
      className="max-w-sm"
    >
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <div className="flex items-center justify-between mb-4">
        <span className="text-2xl font-bold text-gray-900">${price}</span>
        <div className="flex items-center">
          <span className="text-yellow-400">★</span>
          <span className="ml-1 text-sm text-gray-600">{rating}</span>
        </div>
      </div>
      <button 
        onClick={onAddToCart}
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Add to Cart
      </button>
    </Card>
  );
};

export default Card