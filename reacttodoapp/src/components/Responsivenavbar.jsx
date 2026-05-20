import React, { useState } from 'react';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import Dropdown,{DropdownItem} from './Dropdown';

const Responsivenavbar = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-white shadow-lg w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold text-blue-600">Logo</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
              About
            </a>
            
            {/* Dropdown */}
            <Dropdown 
              trigger={
                <button className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition-colors">
                  Services <FiChevronDown />
                </button>
              }
            >
              <DropdownItem>Web Development</DropdownItem>
              <DropdownItem>Mobile Apps</DropdownItem>
              <DropdownItem>UI/UX Design</DropdownItem>
            </Dropdown>
            
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </a>
            
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">
              Home
            </a>
            <a href="#" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">
              About
            </a>
            <a href="#" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">
              Services
            </a>
            <a href="#" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">
              Contact
            </a>
            <button className="w-full text-left px-3 py-2 bg-blue-600 text-white rounded-md">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
    </>
  )
}

export default Responsivenavbar