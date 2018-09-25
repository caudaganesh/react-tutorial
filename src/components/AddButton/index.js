import React from "react";

export default class AddButton extends React.Component {
  componentWillReceiveProps(nextProps) {
    console.log("COMPONENT WILL RECEIVE PROPS", nextProps);
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("COMPONENT DID UPDATE", "PREVPROPS", prevProps);
  }
  render() {
    console.log("CHILD RENDER");
    const { onButtonClick, buttonText, ...otherProps } = this.props;
    return (
      <button
        {...otherProps}
        style={{
          width: 300,
          padding: 24,
          paddingTop: 4,
          paddingBottom: 4,
          margin: 12
        }}
        onClick={onButtonClick}
      >
        <p style={{ fontWeight: 800 }}>{buttonText}</p>
      </button>
    );
  }
}
