import React from 'react';
import './screens.css';

import img1 from './img1.jpg';
import backgroundImage from './background.jpg';
const Users= () => {
    const imageUrl = window.innerWidth >= 1000 ? backgroundImage : img1;

    return (
        <div className="App" style={{backgroundImage: `url(${imageUrl})` }}>
            <div className="App-content">
                <h1>Users</h1>
            </div>
        </div>
    );
};

export default Users;
