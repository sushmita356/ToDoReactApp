import React,{useState} from 'react';
import './Example.css';

function Simplehook(){
    const[count,setCount] = useState(0);
    return(
        <div className='container'>
            <button className="btn" onClick={()=>setCount(count+1)}>count val={count}</button>
        </div>
    )

}
export default Simplehook;