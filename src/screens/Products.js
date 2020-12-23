import React from 'react';
// import desktopImage from './pineapple-desktop.jpg';
// import mobileImage from './pineapple-mobile.jpg';
import './screens.css';

import img1 from './img1.jpg';
import backgroundImage from './background.jpg';
const App = () => {
    const imageUrl = window.innerWidth >= 1000 ? backgroundImage : img1;

    return (
        <div className="App" style={{backgroundImage: `url(${imageUrl})` }}>
            <div className="App-content">
                <h1>Products</h1>
            </div>
        </div>
    );
};

export default App;
