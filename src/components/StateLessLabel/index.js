import React from "react";
import PropTypes from "prop-types";

const StateLessLabel = ({ text, textColor }) => (
  <p style={{ color: textColor }}>{text}</p>
);

StateLessLabel.defaultProps = {
  text: "THIS IS A DEFAULT TEXT FROM A STATELESS COMPONENT",
  textColor: "#00ff00"
};

StateLessLabel.propTypes = {
  text: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired
};

export default StateLessLabel;
