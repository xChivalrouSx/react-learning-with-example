import { Nav, Navbar } from 'react-bootstrap';
import {
  BrowserRouter as Router, Link, Route, Switch
} from "react-router-dom";
import Contact from './components/contact-example';
import SignUpForm from './components/signup-example';
import ToDoList from './components/todo-list-example';
import "./style.css";



const App = () => {
  return(
    <Router>
       <Navbar bg="dark" variant="dark">        
         <Link to="/" className="nav-bar-element nav-bar-header">Examples</Link>
         <Nav className="me-auto">
           <Link to="/contact" className="nav-bar-element">Contact List</Link>
           <Link to="/todo" className="nav-bar-element">To Do List</Link>
           <Link to="/sign-up" className="nav-bar-element">Sign Up</Link>
         </Nav>
       </Navbar>
       
       <div className="center-div" >
        <Switch>
          <Route path="/contact" component={Contact} />
          <Route path="/todo" component={ToDoList} />
          <Route path="/sign-up" component={SignUpForm} />
          <Route path="/">
            <h3 style={{marginTop: 50}}>Welcome my react-learning-with-example app.</h3>
          </Route>
        </Switch>
      </div>
      
    </Router>
  );
}

export default App;
