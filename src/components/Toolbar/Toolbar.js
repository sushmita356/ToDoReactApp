import React from 'react';
import Drawertogglebutton from '../Sidedraw/drawertogglebutton';
import "./Toolbar.css";
import { Link } from 'react-router-dom';

const toolbar = props => (

    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div>
               < Drawertogglebutton click={props.drawerclickhandler}/> 
            </div>
            <div className="toolbar_logo"><a href="/">The logo</a></div>
            <div className="spacer"/>
                <div className="toolbar_navigation_items">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact us</Link>
                        </li>
                        <li>
                            <Link to="/TodoForm">TodoForm</Link>
                        </li>

                    </ul>
                </div>
                

        </nav>
    </header>

);
export default toolbar;
