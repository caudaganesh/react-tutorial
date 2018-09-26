import React from "react";

// containers
import AddUserForm from "../StateAndLifecycle";
const ADD_USER_FORM = "addUserForm";
const KEY_CODE = {
  DOM_VK_RETURN: 13
};

export default class EventHandler extends React.Component {
  state = {
    textInput: ""
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = e => {
    console.log(e.target.innerWidth);
  };

  handleTextInputChange = changeEvent => {
    this.setState({ textInput: changeEvent.target.value });
  };

  handleKeyPress = keyPressEvent => {
    switch (keyPressEvent.keyCode) {
      case KEY_CODE.DOM_VK_RETURN:
        //  TODO: THIS IS NOT A GOOD PRACTICE! THAT'S WHY WE HAVE TO USE REDUX
        this.refs[ADD_USER_FORM].addUserToList();
        break;
      default:
    }
  };

  onClearTextInput = () => {
    this.setState({ textInput: "" });
  };

  render() {
    const { textInput } = this.state;
    return (
      <div style={{ margin: 12 }}>
        <input
          value={textInput}
          placeholder="INSERT TEXT HERE"
          style={{ padding: 4 }}
          onChange={this.handleTextInputChange}
          onKeyDown={this.handleKeyPress}
          onFocus={() => {
            console.log("FOCUS");
          }}
          onBlur={() => {
            console.log("OBBLUR");
          }}
        />
        <br />

        <AddUserForm
          ref={ADD_USER_FORM}
          userName={textInput}
          buttonDisabled={!textInput}
          onClearTextInput={this.onClearTextInput}
        />
      </div>
    );
  }
}
