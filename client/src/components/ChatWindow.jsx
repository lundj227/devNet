// src/components/ChatWindow.jsx
import React from 'react';
import '../styles/ChatWindow.css';

function ChatWindow({ messages }) {
  if (messages.length === 0) {
    return (
      <div className="chat-window">
        <div className="no-chat-message">
          Select a contact to start messaging
        </div>
      </div>
    );
  }

  return (
    <div className="chat-window">
      <div className="messages">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${msg.sent ? 'sent' : 'received'}`}
          >
            {msg.text}
            <span className="timestamp">{msg.timestamp}</span> {/* Display timestamp */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChatWindow;
