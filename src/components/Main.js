import React from 'react';

const Main = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-8xl font-black font- text-gray-900 leading-none text-left bg-white px-8 rounded-lg">
        SUN <br /> FINANCE
      </h1>
      <h2 className="text-3xl px-8 text-left text-gray-300">Your personal AI investment advisor</h2>
      <a
      href="./form1.html"
      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 justify-center mt-12" // Added justify-center class
    >
      Start Investing &#8594;
    </a>
    </div>
  );
};

export default Main;
