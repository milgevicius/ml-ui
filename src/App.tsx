import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Builder from "./components/Builder/Builder";

function App() {
  return (
      <Router>
        <div>
          {/*<ul>*/}
          {/*  <li>*/}
          {/*    <Link to="/">Home</Link>*/}
          {/*  </li>*/}
          {/*  <li>*/}
          {/*    <Link to="/builder">About</Link>*/}
          {/*  </li>*/}
          {/*  <li>*/}
          {/*    <Link to="/dashboard">Dashboard</Link>*/}
          {/*  </li>*/}
          {/*</ul>*/}

          <Switch>
            <Route exact path="/">
              <Builder />
            </Route>
            <Route path="/builder">
              <About />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

function About() {
  return (
      <div>
        <h2>About</h2>
      </div>
  );
}

function Dashboard() {
  return (
      <div>
        <h2>Dashboard</h2>
      </div>
  );
}

export default App;
