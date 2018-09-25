import React, { Component } from "react";

export default class StateFulLabel extends Component {
  // Not required anymore
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       textColor: "#00ff00",
  //       text: "THIS IS A DEFAULT TEXT"
  //     };
  //   }

  state = {
    textColor: "#00ff00",
    text: "THIS IS A DEFAULT TEXT FROM A STATEFULL COMPONENT"
  };

  componentWillMount = () => {
    this.setState({
      textColor: "blue"
    });
  };

  render() {
    // destructuring method example
    const { textColor, text } = this.state;
    return <p style={{ color: textColor }}>{text}</p>;
  }
}
