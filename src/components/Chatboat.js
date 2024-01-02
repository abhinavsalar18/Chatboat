
import React, { useState } from 'react';
import "./chatboat.css";
import {data} from "../constants.js"

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [query, setQuery] = useState('');
  const handleSendMessage = () => {
    for(let idx = 0; idx < data.length; idx++){
      const crnt_query = data[idx]?.query?.toLowerCase();
      const user_query = query?.toLowerCase();
      if(crnt_query.includes(user_query)){
          setMessages([...messages, {query: query, response: data[idx]?.response, }]);
          break;
      }

    }
    setQuery('');
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-messages">
        {messages.map((message, index) => (
          <>
            <div key={index + 113} className='user-message'>
              You: {message.query}
            </div>
            <div key={index} className={'bot-message'}>
              {message.response}
            </div>
            
          </>
        ))}
      </div>
      <div className="chatbot-input">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask a question..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
