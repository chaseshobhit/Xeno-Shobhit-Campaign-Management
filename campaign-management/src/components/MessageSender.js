import React, { useState } from 'react';
import axios from '../api';

const MessageSender = () => {
    const [message, setMessage] = useState('');
    const [recipient, setRecipient] = useState('');

    const handleSendMessage = async () => {
        try {
            const response = await axios.post('/campaigns/send', { message, recipient });
            console.log('Message sent:', response.data);
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    return (
        <div>
            <h3>Send a Message</h3>
            <label>
                Recipient:
                <input type="text" value={recipient} onChange={(e) => setRecipient(e.target.value)} />
            </label>
            <label>
                Message:
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
            </label>
            <button onClick={handleSendMessage}>Send</button>
        </div>
    );
};

export default MessageSender;
