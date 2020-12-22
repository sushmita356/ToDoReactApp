import React,{useState} from 'react';

function ArrayHook(){
    const[items,setItems]=useState([]);
    const addItem = () =>{
        setItems([...items,{
            id:items.length,
            value:Math.floor(Math.random()*10 +1)
        }])
    }
    return(
        // <button onClick={addItem}>add item</button>
        <div>
         <button onClick={addItem}>add item</button>
         <ul>
             {items.map(item=>(
              <li key={item.id}>{item.value}</li>   
             ))}
         </ul>

        </div>
        
    )
}
export default ArrayHook;