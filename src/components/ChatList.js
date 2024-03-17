import React, { useState } from 'react';
import OpenCloseButton from './OpenCloseButton';

const ChatList = ({ chats }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`w-1/3 bg-gray-200 border-r relative ${isOpen ? '' : 'hidden'}`}>
      <div className="p-4 border-b flex items-center justify-between">
        <h2 className="text-lg font-semibold">Previous Chats</h2>
        <OpenCloseButton onClick={toggleSection} isOpen={isOpen} />
      </div>
      <ul className="overflow-y-auto max-h-96">
        {chats.map((chat) => (
          <li key={chat.id} className="px-4 py-2">{chat.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default ChatList;
