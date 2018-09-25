import React from "react";
import LabelWithTitle from "../../components/LabelWithTitle";
const UserNameLabel = ({ id, userName, textColor }) => (
  <LabelWithTitle
    key={id}
    title="USER NAME"
    content={userName}
    contentColor={textColor}
  />
);

export default UserNameLabel;
