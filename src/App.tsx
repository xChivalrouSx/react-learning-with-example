import { useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import Contact from './components/contact-example/';
import ToDoList from './components/todo-list-example/';
import "./style.css";


const App = () => {
  const [pageType, setPageType] = useState("home");

  const NavBarClickHandle = (event: any) => {
    setPageType(event.target.id);
  }

  return (
    <>
      <Navbar bg="dark" variant="dark">        
        <Navbar.Brand id="home" href="#" className="m-2" onClick={NavBarClickHandle}>Examples</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link id="contact" href="#contact" className="m-2" onClick={NavBarClickHandle}>Contact List</Nav.Link>
          <Nav.Link id="todo" href="#todo" className="m-2" onClick={NavBarClickHandle}>To Do List</Nav.Link>
        </Nav>
      </Navbar>
      
      <div className="center-div">
          <Contact cssClass={pageType === "contact" ? "" : "hidden-element"}/>
          <ToDoList cssClass={pageType === "todo" ? "" : "hidden-element"}/>
      </div>  
    </>
  );
}

export default App;
