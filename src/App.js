import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

//containers
import Home from "./containers/Home";
import Jsx from "./containers/Jsx";
import ComponentsAndProps from "./containers/ComponentsAndProps";
import ConditionalRendering from "./containers/ConditionalRendering";
import StateAndLifecycle from "./containers/StateAndLifecycle";
import EventHandler from "./containers/EventHandler";

import {
  JSX_URL,
  CONDITIONAL_RENDERING_URL,
  COMPONENTS_AND_PROPS_URL,
  STATE_AND_LIFECYCLE_URL,
  EVENT_HANDLER_URL
} from "./constants";

const ROUTES = [
  {
    url: "/",
    component: Home
  },
  {
    url: JSX_URL,
    component: Jsx
  },
  {
    url: COMPONENTS_AND_PROPS_URL,
    component: ComponentsAndProps
  },
  {
    url: CONDITIONAL_RENDERING_URL,
    component: ConditionalRendering
  },
  {
    url: STATE_AND_LIFECYCLE_URL,
    component: StateAndLifecycle
  },
  {
    url: EVENT_HANDLER_URL,
    component: EventHandler
  }
];

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Link to="/">
              <h1 className="App-title">React Tutorial</h1>
            </Link>
          </header>
          <div>
            {ROUTES.map(route => (
              <Route
                exact
                path={route.url}
                component={route.component}
                key={route.url}
              />
            ))}
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
