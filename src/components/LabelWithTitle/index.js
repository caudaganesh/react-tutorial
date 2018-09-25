import React, { Component } from "react";
import PropTypes from "prop-types";
import StateLessLabel from "../StateLessLabel";

export default class LabelWithTitle extends Component {
  static defaultProps = {
    title: "Default Title",
    content: "Default Content"
  };

  //   No need to set required if our props has default value
  static propTypes = {
    title: PropTypes.string,
    content: PropTypes.string
  };

  render() {
    const { title, content, contentColor } = this.props;
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <p style={{ marginRight: 4 }}>
          <b>{title} :</b>
        </p>
        <StateLessLabel text={content} textColor={contentColor} />
      </div>
    );
  }
}
