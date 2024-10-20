// src/components/MessageInput.jsx
import React, { useState } from 'react';
import '../styles/MessageInput.css';

function MessageInput({ onSendMessage }) {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <form className="message-input-container" onSubmit={handleSubmit}>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
        className="message-input"
      />
      <button type="submit" className="send-button">Send</button>
    </form>
  );
}

export default MessageInput;
