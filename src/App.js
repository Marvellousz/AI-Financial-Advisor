import React, { useState } from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ChatList from './components/ChatList'; // Assuming ChatList doesn't require routing
import ChatInput from './components/ChatInput'; // Assuming ChatInput doesn't require routing
import Dashboard from './Dashboard';
import Home from './Home';
import Form from './Form';

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
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/form" element={<Form />} /> 
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      {/* <div className="chat-container"> 
        <ChatList chats={chats} />
        <ChatInput
          inputText={inputText}
          handleInputChange={handleInputChange}
          handleSendMessage={handleSendMessage}
        />
      </div> */} 
    </Router>
  );
}

export default App;
