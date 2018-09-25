import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import {
  JSX_URL,
  CONDITIONAL_RENDERING_URL,
  COMPONENTS_AND_PROPS_URL,
  STATE_AND_LIFECYCLE_URL,
  EVENT_HANDLER_URL
} from "../../constants";

const MainMenuData = [
  {
    title: "JSX",
    route: JSX_URL
  },
  {
    title: "Components & Props",
    route: COMPONENTS_AND_PROPS_URL
  },
  {
    title: "Conditional Rendering",
    route: CONDITIONAL_RENDERING_URL
  },
  {
    title: "State and Lifecycle",
    route: STATE_AND_LIFECYCLE_URL
  },
  {
    title: "Event Handler",
    route: EVENT_HANDLER_URL
  }
];
// This is an example of stateless component
const MainMenu = () => (
  <div>
    {MainMenuData.map(menu => (
      <div>
        <Link to={menu.route}>
          <button className="button_style">{menu.title}</button>
        </Link>
        <br />
      </div>
    ))}
  </div>
);

export default MainMenu;
