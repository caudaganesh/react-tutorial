import React from "react";
import PropTypes from "prop-types";
import StateLessLabel from "../StateLessLabel";

const LabelWithTitle = ({ content, title, contentColor }) => (
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

LabelWithTitle.defaultProps = {
  content: "Default Content",
  contentColor: "black"
};

LabelWithTitle.propTypes = {
  title: PropTypes.string.isRequired,
  //   No need to set required if our props has default value
  content: PropTypes.string,
  contentColor: PropTypes.string
};

export default LabelWithTitle;
