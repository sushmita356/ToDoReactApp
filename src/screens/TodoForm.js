import React,{useState} from 'react';
import Toolbar from '../components/Toolbar/Toolbar';
import './screens.css';
function TodoForm(props){
    
    const[input,setInput] = useState('');

    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
    };
    
    return(
        <div>
            <Toolbar/>
            <form className='todo-form' onSubmit={handleSubmit}>
                <input type='text' placeholder="add ToDo" className="todo-input" value={input}  name='text' onChange={handleChange}/>
                <button className="add-todo">add-todo</button>
            </form>

        </div>
    )
}
export default TodoForm;