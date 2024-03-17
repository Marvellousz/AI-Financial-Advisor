import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ChatList from './components/ChatList';
import ChatInput from './components/ChatInput';
import Dashboard from './Dashboard';

function App() {
  const [inputText, setInputText] = useState('');
  const [chats, setChats] = useState([]);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputText.trim() !== '') {
      setChats([...chats, { id: chats.length, text: inputText }]);
      setInputText('');
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-grow">
        <ChatList chats={chats} />
        <ChatInput
          inputText={inputText}
          handleInputChange={handleInputChange}
          handleSendMessage={handleSendMessage}
        />
        <Dashboard />
      </div>
      <Footer />
    </div>
  );
}

export default App;
