import React from 'react';
import Toolbar from '../components/Toolbar/Toolbar';

class about extends React.Component 
{
    render(){
        return(
            <div>
             <Toolbar/>  
             <p>this is paragarph</p> 
             <p>paragarph</p>
            <button>click me</button>
            </div>
        );
    }
}
export default about;