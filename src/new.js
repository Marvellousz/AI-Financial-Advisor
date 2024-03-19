// import React, { useEffect, useState } from 'react';
// import ReactDOM from "react-dom/client";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import './App.css';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import ChatList from './components/ChatList'; // Assuming ChatList doesn't require routing
// import ChatInput from './components/ChatInput'; // Assuming ChatInput doesn't require routing
// import Dashboard from './Dashboard';
// import Home from './Home';
// import Form from './Form';
// import axios from 'axios';

// function App() {
 
//   const [inputText, setInputText] = useState('');
//   const [chats, setChats] = useState([]);
//   const [calculate,setCalculate] = useState([])
//   const [qns, setQns] = useState({
//     0: 10,
//     1: 11,
//     2: 12,
//     3: 13,
//     4: 14,
//     5: 15,
//     6: 16,
//     7: 17,
//     8: 18,
//     9: 19,
//   });
//   const [responseData, setResponseData] = useState(null);
//   const data = {calculate };
//   console.log(data);
//   const [error, setError] = useState(null);
//   useEffect(() => {
//     handleSubmit();
//   }, [calculate]);

//   const handleSubmit = async () => {
//     const input = "counter1";
//     console.log(data);
  
//     try {
//       const response = await axios.post('http://192.168.197.222:5000/do', JSON.stringify(data), {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
//       setResponseData(response.data);
//     } catch (error) {
//       setError(error);
//       console.error(error); // For debugging purposes
//     }
//   };

//   const handleInputChange = (e) => {
//     setInputText(e.target.value);
//   };

//   const handleSendMessage = () => {
//     if (inputText.trim() !== '') {
//       setChats([...chats, { id: chats.length, text: inputText }]);
//       setInputText('');
//     }
//   };

//   return (
//     <Router>
//       <Routes>
//         <Route exact path="/" element={<Home />} />
//         <Route path="/form" element={<Form calculate={calculate} setCalculate={setCalculate}/>} /> 
//         <Route path="/dashboard" element={<Dashboard calculate={calculate} setCalculate={setCalculate}/>} />
//       </Routes>
//       {/* <div className="chat-container"> 
//         <ChatList chats={chats} />
//         <ChatInput
//           inputText={inputText}
//           handleInputChange={handleInputChange}
//           handleSendMessage={handleSendMessage}
//         />
//       </div> */} 
//     </Router>
//   );
// }

// export default App;

import React, { useEffect, useState } from 'react';
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
import axios from 'axios';

function App() {
 
  const [inputText, setInputText] = useState('');
  const [chats, setChats] = useState([]);
  const [calculate,setCalculate] = useState([])
  const [check,setCheck] = useState(false)
  const [qns, setQns] = useState({
    0: 10,
    1: 11,
    2: 12,
    3: 13,
    4: 14,
    5: 15,
    6: 16,
    7: 17,
    8: 18,
    9: 19,
  });
  const [responseData, setResponseData] = useState(null);
  const data = {calculate};
 
  const [error, setError] = useState(null);
  useEffect(() => {
    handleSubmit();
  }, [calculate]);

  const handleSubmit = async () => {
    const input = "counter1";
    console.log(data);
  
    try {
      const response = await axios.post('http://192.168.197.222:5000/do', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setResponseData(response.data);
    } catch (error) {
      setError(error);
      console.error(error); // For debugging purposes
    }
  };

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
        <Route path="/form" element={<Form calculate={calculate} setCalculate={setCalculate}/>} /> 
        <Route path="/dashboard" element={<Dashboard calculate={calculate} setCalculate={setCalculate}/>} />
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
