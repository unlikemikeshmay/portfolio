import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from "./components/About";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function BasicExample() {
  return (
    <Router>
      <div id="app">
        <div className="nav_container">
        <div id="Nav">
          <ul>
            <li>
            <Link id="home" to="/">About</Link>
            </li>
            <li>
            <Link id="projects" to="/projects">Projects</Link>
            </li>
            <li>
            <Link id="projects" to="/projects">Contact</Link>
            </li>
         
          
          </ul>
          


        </div>
        </div>
        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <About />
          </Route>
          <Route path="/projects">
          "dicks"
          </Route>
          <Route path="/dashboard">
            "out"
          </Route>
        </Switch>
      </div>
    </Router>
  );
      }