import React, { useState } from 'react';
import Sidebar from './Sidebar';
import ChatWindow from './ChatWindow';
import MessageInput from './MessageInput';
import '../styles/Chat.css';

function Chat() {
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);

  const handleSelectChat = (contact) => {
    console.log("Selected contact:", contact);
    setCurrentChat(contact);

    // Set some sample messages
    setMessages([
      { text: `Hello from ${contact.name}`, sent: false, timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) },
      { text: `How are you?`, sent: false, timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) },
    ]);
  };

  const handleSendMessage = (msg) => {
    const newMessage = {
      text: msg,
      sent: true, // Mark it as sent by the user
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) // Add timestamp
    };

    setMessages([...messages, newMessage]); // Update the messages array

    console.log("Sent message:", newMessage);

    // Simulate a response after a short delay (2 seconds)
    setTimeout(() => {
      const receivedMessage = {
        text: `Auto-reply from ${currentChat.name}`,
        sent: false, // Mark it as received
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prevMessages) => [...prevMessages, receivedMessage]); // Add the received message
    }, 2000);
  };

  const contacts = [
    { name: 'John Doe', avatar: 'path/to/avatar1.jpg' },
    { name: 'Jane Smith', avatar: 'path/to/avatar2.jpg' },
  ];

  // Log current chat details
  console.log("Current chat details:", currentChat);

  return (
    <div className="chat-app">
      {/* Sidebar component for displaying the contact list */}
      <Sidebar contacts={contacts} onSelectChat={handleSelectChat} />

      {/* Conditional rendering of the chat window or the default message */}
      <div className="chat-content">
        {currentChat ? (
          <>
            <ChatWindow messages={messages} />
            <MessageInput onSendMessage={handleSendMessage} />
          </>
        ) : (
          <div className="select-chat-message">
            Select a contact to start messaging
          </div>
        )}
      </div>
    </div>
  );
}

export default Chat;
