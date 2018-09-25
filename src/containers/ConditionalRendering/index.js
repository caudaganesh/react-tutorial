import React, { Component } from "react";

// components
import LabelWithTitle from "../../components/LabelWithTitle";

const USERS = [
  {
    userName: "TOPED_1",
    isActive: false,
    textColor: "brown",
    isSuperUser: true,
    id: 1
  },
  {
    userName: "TOPED_2",
    isActive: true,
    textColor: "magenta",
    id: 2
  },
  {
    userName: "TOPED_3",
    isActive: true,
    textColor: "blue",
    id: 3
  }
];

export default class ConditionalRendering extends Component {
  render() {
    return (
      <div>
        {/* IF CLAUSE */}
        <p style={{ color: "purple" }}>
          <b>
            CONDITIONAL RENDERING USING IF CLAUSE || SHOWING ONLY ACTIVE USER
          </b>
        </p>
        {USERS.map(user => {
          if (user.isActive) {
            return (
              <LabelWithTitle
                key={user.id}
                title="USER NAME"
                content={user.userName}
                contentColor={user.textColor}
              />
            );
          } else return <div />;
        })}
        <br />

        {/* TERNARY */}
        <p style={{ color: "purple" }}>
          <b>CONDITIONAL RENDERING USING TERNARY || SHOWING INACTIVE USER</b>
        </p>
        {USERS.map(
          user =>
            !user.isActive ? (
              <LabelWithTitle
                key={user.id}
                title="USER NAME"
                content={user.userName}
                contentColor={user.textColor}
              />
            ) : (
              <div />
            )
        )}
        <br />

        {/* LOGICAL */}
        <p style={{ color: "purple" }}>
          <b>
            CONDITIONAL RENDERING USING LOGICAL OPERATOR || SHOWING ACTIVE AND
            SUPER USER
          </b>
        </p>
        {USERS.map(
          user =>
            (user.isActive || user.isSuperUser) && (
              <LabelWithTitle
                key={user.id}
                title="USER NAME"
                content={user.userName}
                contentColor={user.textColor}
              />
            )
        )}
        <br />
      </div>
    );
  }
}
