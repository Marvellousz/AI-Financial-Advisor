import React, { useState } from 'react';

const FAQ = () => {
  const [isOpen, setIsOpen] = useState({}); // State to track open/closed state of FAQs

  const toggleFAQ = (id) => {
    setIsOpen({ [id]: !isOpen[id] }); // Toggle state for clicked FAQ
  };

  return (
    <div className="bg-gray-100 px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">FAQs</h2>

      <ul className="list-none space-y-4">
        <li>
          <button
            className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 hover:bg-gray-200"
            onClick={() => toggleFAQ('first')}
          >
            <span className="text-xl font-medium text-gray-800">
              How does Sun Finance work?
            </span>
            <svg
              className={`${isOpen['first'] ? 'transform rotate-180' : ''}`}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 5V19L17 14L12 5Z"
                fill="currentColor"
              />
            </svg>
          </button>
          {isOpen['first'] && (
            <div className="px-4 py-4 border border-t-0 border-gray-200 rounded-b-md">
              <p className="text-gray-600 leading-loose">
              Sun Finance uses a combination of AI & deep research algorithms by our research analysts to give you a portfolio of assets which are the best suited for your investment needs.
              </p>
            </div>
          )}
          <button
            className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 hover:bg-gray-200"
            onClick={() => toggleFAQ('second')}
          >
            <span className="text-xl font-medium text-gray-800">
              Why should I use Sun Finance?
            </span>
            <svg
              className={`${isOpen['second'] ? 'transform rotate-180' : ''}`}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 5V19L17 14L12 5Z"
                fill="currentColor"
              />
            </svg>
          </button>
          {isOpen['second'] && (
            <div className="px-4 py-4 border border-t-0 border-gray-200 rounded-b-md">
              <p className="text-gray-600 leading-loose">
              Sun Finance is developed in a way to maximize your returns & minimize your risks. It provides you with SEBI certified Investment advisory.
              </p>
            </div>
          )}
          <button
            className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 hover:bg-gray-200"
            onClick={() => toggleFAQ('third')}
          >
            <span className="text-xl font-medium text-gray-800">
              How is my money investment?
            </span>
            <svg
              className={`${isOpen['third'] ? 'transform rotate-180' : ''}`}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 5V19L17 14L12 5Z"
                fill="currentColor"
              />
            </svg>
          </button>
          {isOpen['third'] && (
            <div className="px-4 py-4 border border-t-0 border-gray-200 rounded-b-md">
              <p className="text-gray-600 leading-loose">
              The money is invested through your broker.
              </p>
            </div>
          )}
          <button
            className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 hover:bg-gray-200"
            onClick={() => toggleFAQ('fourth')}
          >
            <span className="text-xl font-medium text-gray-800">
              Where is my money invested?
            </span>
            <svg
              className={`${isOpen['fourth'] ? 'transform rotate-180' : ''}`}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 5V19L17 14L12 5Z"
                fill="currentColor"
              />
            </svg>
          </button>
          {isOpen['fourth'] && (
            <div className="px-4 py-4 border border-t-0 border-gray-200 rounded-b-md">
              <p className="text-gray-600 leading-loose">
              Your money is invested in the portfolio made by Sun Finance based on your investment profile.
              </p>
            </div>
          )}
          <button
            className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 hover:bg-gray-200"
            onClick={() => toggleFAQ('fifth')}
          >
            <span className="text-xl font-medium text-gray-800">
              Is my money safe with Sun Finance?
            </span>
            <svg
              className={`${isOpen['fifth'] ? 'transform rotate-180' : ''}`}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 5V19L17 14L12 5Z"
                fill="currentColor"
              />
            </svg>
          </button>
          {isOpen['fifth'] && (
            <div className="px-4 py-4 border border-t-0 border-gray-200 rounded-b-md">
              <p className="text-gray-600 leading-loose">
              We do not keep your money, the money is directly invested through your broker and the ETFs are transferred to your demat account, i.e you have the full control of your investments.
              </p>
            </div>
          )}
        </li>
        
          
          
          
      </ul>
    </div>
  );
};

export default FAQ;
