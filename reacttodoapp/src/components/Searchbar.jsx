import React, {useState} from 'react'
import { FiSearch, FiX } from 'react-icons/fi';

const Searchbar = ({ 
  placeholder = 'Search...', 
  onSearch,
  suggestions = [],
  debounceMs = 300 
}) => {

  const [query, setQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [timer, setTimer] = useState(null);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    setShowSuggestions(true);

    // Debounce search
    if (timer) clearTimeout(timer);
    setTimer(setTimeout(() => {
      onSearch && onSearch(value);
    }, debounceMs));
  };

  const handleClear = () => {
    setQuery('');
    setShowSuggestions(false);
    onSearch && onSearch('');
  };

  const handleSelectSuggestion = (suggestion) => {
    setQuery(suggestion);
    setShowSuggestions(false);
    onSearch && onSearch(suggestion);
  };


  return (
    <>
    <div className="relative w-full max-w-xl">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <FiSearch className="h-5 w-5 text-gray-400" />
        </div>
        
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder={placeholder}
          className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
        />
        
        {query && (
          <button
            onClick={handleClear}
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
          >
            <FiX className="h-5 w-5 text-gray-400 hover:text-gray-600" />
          </button>
        )}
      </div>

      {/* Suggestions Dropdown */}
      {showSuggestions && suggestions.length > 0 && query && (
        <div className="absolute z-10 w-full mt-2 bg-white rounded-lg shadow-lg border border-gray-200 max-h-60 overflow-y-auto">
          {suggestions
            .filter(s => s.toLowerCase().includes(query.toLowerCase()))
            .map((suggestion, index) => (
              <button
                key={index}
                onClick={() => handleSelectSuggestion(suggestion)}
                className="w-full px-4 py-2 text-left hover:bg-gray-100 transition-colors"
              >
                {suggestion}
              </button>
            ))}
        </div>
      )}
    </div>
    </>
  )
}

export default Searchbar