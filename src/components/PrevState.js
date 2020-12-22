import React,{useState} from 'react';

function PrevState(){
    let initial =0;
    const[count,setCount]=useState(initial);
    const incrementByFive =()=>{
        for(let i=0;i<5;i++){
            setCount(PrevState=>PrevState+1);
            console.log(PrevState,'previousss');
        }
    }
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={()=>setCount(initial)}>Reset</button>

            <button onClick={()=>setCount(PrevState=>PrevState+1)}>Increment by 1</button>
            <button onClick={()=>setCount(PrevState=>PrevState-1)}>Decrement by 1</button>
            <button onClick={incrementByFive}>Increment by 5</button>


        </div>
    )
}
export default PrevState;