import React from 'react';

const ChatInput = ({ inputText, handleInputChange, handleSendMessage }) => {
  return (
    <div className="w-2/3 p-4">
      <textarea
        className="w-full h-32 p-2 border rounded mb-2"
        placeholder="Type your message here..."
        value={inputText}
        onChange={handleInputChange}
      ></textarea>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={handleSendMessage}
      >
        Send
      </button>
    </div>
  );
}

export default ChatInput;
