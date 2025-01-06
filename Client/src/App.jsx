import React, { useState } from 'react';
import './App.css';
const url = import.meta.env.VITE_BACKEND_URL

function App() {
    const [responseMessage, setResponseMessage] = useState('');

    const handleButtonClick = () => {
        fetch(url)
            .then(response => {
                if (response.status === 429) {
                    setResponseMessage('Rate limit exceeded. Please try again later.');
                } else if (response.status === 403) {
                    setResponseMessage('Your IP has been blocked.');
                } else if (response.status === 200) {
                    setResponseMessage('Request successful!');
                }
            })
            .catch(error => {
                setResponseMessage('An error occurred.');
            });
    };

    return (
        <div className="container">
            <h1>Anti-DDoS Testing</h1>
            <p>This page is protected by rate-limiting and IP blocking.</p>
            <button className="button" onClick={handleButtonClick}>Send Request</button>
            <p>{responseMessage}</p>
        </div>
    );
}

export default App;
