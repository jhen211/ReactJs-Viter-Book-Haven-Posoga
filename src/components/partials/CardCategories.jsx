import React from 'react'

const CardCategories = ({colorBg, color, svg,  category, count}) => {
  return (
    <>
      <div className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition duration-300">
    <div className={`${colorBg} w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4`}>
          <svg
            className={`"w-8 h-8 ${color}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {svg}
          </svg>
        </div>
        <h3 className="font-bold text-gray-900 mb-1">{category}</h3>
        <p className="text-sm text-gray-600">{count}</p>
      </div>
    </>
  );
}

export default CardCategories
