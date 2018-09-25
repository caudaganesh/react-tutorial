import React, { Component } from "react";

const args = "AN AWESOME ARGUMENTS";
const AwesomeLabel = ({ children }) => <p>{children}</p>;
const PLAINTEXT = (
  <p>
    <b>SO MUCH PLAINTEXT</b>
  </p>
);
const IMAGE_URL =
  "https://i.pinimg.com/originals/15/bf/11/15bf11eef01107f7638a016f99875bc8.jpg";
export default class Jsx extends Component {
  toLowerCase = text => {
    return text.toLowerCase();
  };

  render() {
    return (
      <div>
        {/* Simply plain text inside tag */}
        <p>THIS IS JUST A PLAIN TEXT</p>

        {/* Printing args */}
        <p>THIS P TAG IS PRINTING {args}</p>

        {/* Printing args with function execution */}
        <p>
          THIS P TAG PRINTING {this.toLowerCase(args)}, WITH A FUNCTION CALL
          [causing it to be lowercased]
        </p>

        {/* Pass children to custom jsx tag / component */}
        <AwesomeLabel>YOU CAN EVEN MAKE YOUR OWN TAG</AwesomeLabel>
        <br />
        {/* You can pass jxs as argument */}
        <AwesomeLabel>
          You can pass JSX as an argument, showing {PLAINTEXT}
        </AwesomeLabel>
        <br />

        {/* It may contains attributes */}
        <p>THIS IMG TAG HAS AN ATTRIBUTE</p>
        <img
          src="https://i.pinimg.com/originals/15/bf/11/15bf11eef01107f7638a016f99875bc8.jpg"
          alt="some"
        />
        <br />
        <br />

        {/* We can pass arguments to attributes */}
        <p>THIS ONE IS PASSING ARGUMENT TO ATTRIBUTE</p>
        <img src={IMAGE_URL} alt="some" />
      </div>
    );
  }
}
