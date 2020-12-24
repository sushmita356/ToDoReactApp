import React from 'react';
import './sidedraw.css';
import { Link } from 'react-router-dom';

const sidedrawer = props =>(

    <nav className="side-draw">
        <ul>
            <li>
            <Link to="/products">Products</Link>
 
            </li>
            <li>
            <Link to="/Users">User</Link>
            </li>
        </ul>
    </nav>
);
export default sidedrawer;