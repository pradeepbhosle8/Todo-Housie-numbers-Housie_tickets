import React,{useState} from 'react'
import { FiChevronDown } from 'react-icons/fi';

const Accordion = ({ items, allowMultiple = false }) => {
   const [openItems, setOpenItems] = useState([]);

   const toggleItem = (index) => {
    if (allowMultiple) {
      setOpenItems(prev =>
        prev.includes(index)
          ? prev.filter(i => i !== index)
          : [...prev, index]
      );
    } else {
      setOpenItems(prev =>
        prev.includes(index) ? [] : [index]
      );
    }
  };


  return (
    <>
      <div className="text-lg font-semibold text-gray-900 w-full" >Accordion</div>
      <div className="space-y-2">
      {items.map((item, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-lg overflow-hidden"
        >
          <button
            onClick={() => toggleItem(index)}
            className="w-full flex items-center justify-between p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <span className="font-medium text-gray-900">{item.title}</span>
            <FiChevronDown
              className={`transform transition-transform ${
                openItems.includes(index) ? 'rotate-180' : ''
              }`}
            />
          </button>
          
          <div
            className={`
              overflow-hidden transition-all duration-300
              ${openItems.includes(index) ? 'max-h-96' : 'max-h-0'}
            `}
          >
            <div className="p-4 bg-white text-gray-700">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  )
}

export default Accordion