import React, { Component } from "react";

// components
import StateFulLabel from "../../components/StateFulLabel";
import StateLessLabel from "../../components/StateLessLabel";

const labelProps = {
  text: "AWESOME TEXT",
  textColor: "orange"
};

export default class ComponentsAndProps extends Component {
  render() {
    return (
      <div>
        <StateFulLabel />
        <StateLessLabel />
        <br />

        <StateLessLabel
          text="WE PASS THIS TEXT AS PROPS, THE TEXT SHOULD BE REPLACED AND THE COLOR SHOULD BE RED"
          textColor="red"
        />
        <br />
        {/* using object spread operator can save you a lot */}
        <StateLessLabel {...labelProps} />
      </div>
    );
  }
}
