import React, { useState } from 'react';
import axios from '../api';

const AudienceForm = () => {
    const [audienceName, setAudienceName] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/audiences', { name: audienceName, description });
            console.log('Audience created:', response.data);
        } catch (error) {
            console.error('Error creating audience:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Audience Name:
                <input type="text" value={audienceName} onChange={(e) => setAudienceName(e.target.value)} required />
            </label>
            <label>
                Description:
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
            </label>
            <button type="submit">Create Audience</button>
        </form>
    );
};

export default AudienceForm;
