import React from 'react';
import '../styles/Sidebar.css';

function Sidebar({ contacts, onSelectChat }) {
  return (
    <div className="sidebar">
      <div className="sidebar-header">Chats</div>
      <ul className="contacts-list">
        {contacts.map((contact, index) => (
          <li
            key={index}
            onClick={() => {
              console.log("Clicked contact:", contact); // Log the clicked contact
              onSelectChat(contact);
            }}
          >
            <img src={contact.avatar} alt={contact.name} className="contact-avatar" />
            <div className="contact-name">{contact.name}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
