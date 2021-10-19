import { Nav, Navbar } from "react-bootstrap";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Contact from "./components/contact-example";
import ContextTest from "./components/context-example/";
import { MTable, MTableBug } from "./components/material-table-example";
import ReduxExample from "./components/redux-example";
import SignUpForm from "./components/signup-example";
import TestExample from "./components/test-counter";
import ToDoList from "./components/todo-list-example";
import Weather from "./components/Weather";
import { LoadingProvider } from "./context/LoadingContext";
import "./style.css";

const App = () => {
	return (
		<LoadingProvider>
			<Router>
				<Navbar bg="dark" variant="dark">
					<Link to="/" className="nav-bar-element nav-bar-header">
						Examples
					</Link>
					<Nav className="me-auto">
						<Link to="/weather" className="nav-bar-element">
							Weather
						</Link>
						<Link to="/contact" className="nav-bar-element">
							Contact List
						</Link>
						<Link to="/todo" className="nav-bar-element">
							To Do List
						</Link>
						<Link to="/sign-up" className="nav-bar-element">
							Sign Up
						</Link>
						<Link to="/m-table" className="nav-bar-element">
							Material Table
						</Link>
						<Link to="/m-table-bug" className="nav-bar-element">
							Material Table With Bug
						</Link>
						<Link to="/context-example" className="nav-bar-element">
							Context Example
						</Link>
						<Link to="/test-example" className="nav-bar-element">
							Unit Test Example
						</Link>
						<Link to="/redux" className="nav-bar-element">
							Redux Example
						</Link>
					</Nav>
				</Navbar>

				<div className="center-div">
					<Switch>
						<Route path="/weather" component={Weather} />
						<Route path="/contact" component={Contact} />
						<Route path="/todo" component={ToDoList} />
						<Route path="/sign-up" component={SignUpForm} />
						<Route path="/m-table" component={MTable} />
						<Route path="/m-table-bug" component={MTableBug} />
						<Route path="/context-example" component={ContextTest} />
						<Route path="/test-example" component={TestExample} />
						<Route path="/redux" component={ReduxExample} />
						<Route path="/">
							<h3 style={{ marginTop: 50 }}>
								Welcome my react-learning-with-example app.
							</h3>
						</Route>
					</Switch>
				</div>
			</Router>
		</LoadingProvider>
	);
};

export default App;
