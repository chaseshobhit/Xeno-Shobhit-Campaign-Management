import React, { useState } from 'react';

const MessageSender = () => {
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    alert(`Message sent: ${message}`);
  };

  return (
    <div>
      <textarea
        placeholder="Write your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send Message</button>
    </div>
  );
};

export default MessageSender;
