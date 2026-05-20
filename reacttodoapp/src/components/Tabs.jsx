import React,{useState} from 'react'

const Tabs = ({ tabs, defaultTab = 0 }) => {

  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <>
     <div className="w-full">
      {/* Tab Headers */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`
                py-4 px-1 border-b-2 font-medium text-sm transition-colors flex items-center cursor-pointer
                ${activeTab === index
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }
              `}
            >
              {tab.icon && <span className="mr-2">{tab.icon}</span>}
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="py-6">
        {tabs[activeTab].content}
      </div>
    </div>
    </>
  )
}

// Pill Style Tabs
export const PillTabs = ({ tabs, defaultTab = 0 }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <div className="w-full">
      <div className="flex space-x-2 bg-gray-100 p-1 rounded-lg">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`
              flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all
              ${activeTab === index
                ? 'bg-white shadow text-blue-600'
                : 'text-gray-600 hover:text-gray-900'
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-6">
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

export default Tabs