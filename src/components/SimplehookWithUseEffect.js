import React,{useState,useEffect} from 'react';
import './Example.css';

function SimplehookWithUseEffect(){
    const[count,setCount] = useState(0);
    useEffect(()=>{
        console.log({count}, 'times');
    })
    return(
        <div className='container'>
            <button className="btn" onClick={()=>setCount(count+1)}>count val={count}</button>
        </div>
    )

}
export default SimplehookWithUseEffect;