import React from 'react';
import './App.css';
import TodoForm from './screens/TodoForm';
import Home from './screens/Home';
import About from './screens/About';
import Contact from './screens/Contact';
import{
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
// import Example1 from './components/Simplehook';
// import Objecthook from './components/Objecthook';
import ArrayHook from './components/arrayHook';


function App() {
  return (
    <div className="App">
      <ArrayHook/>
      <Router>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/contact" exact>
            <Contact/>
          </Route>
          <Route path="/TodoForm" exact>
            <TodoForm/>
          </Route>

        </Router>

    </div>
  );
}

export default App;
