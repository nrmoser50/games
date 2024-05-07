// LinkButton.js
import React from 'react';

const LinkButton = ({ url, label }) => {
    const handleClick = () => {
        window.location.href = url;
    };

    return (
        <button onClick={handleClick}>{label}</button>
    );
}

export default LinkButton;
