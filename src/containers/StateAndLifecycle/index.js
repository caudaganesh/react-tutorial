import React from "react";

// components
import AddButton from "../../components/AddButton";
import UserNameLabel from "../../components/UserNameLabel";

// helpers
import { getRandomColor } from "../../helpers";

export default class StateAndLifecycle extends React.Component {
  state = {
    users: [],
    buttonText: "ADD",
    isLoading: false
  };

  //   componentWillMount() {
  //     console.log("COMPONENT WILL MOUNT");
  //     console.log("START FETCHING");
  //     setTimeout(() => {
  //       console.log(`FINALLY FINISSSHHH !!!!!!!!!!!!!!!!!!!!`);
  //     }, 5000);
  //   }

  //   componentWillUpdate() {
  //     console.log("COMPONENT WILL UPDATE");
  //   }

  //   componentDidUpdate(prevProps, prevState) {
  //     console.log("PARENT COMPONENT DID UPDATE", "PREVSTATE", prevState);
  //   }

  addUserToList = () => {
    const { userName } = this.props;
    userName && this.props.onClearTextInput();
    const id = this.state.users.length;
    const newUser = {
      userName: userName || `TOPED_${this.state.users.length}`,
      isActive: false,
      textColor: getRandomColor(),
      isSuperUser: true,
      id
    };
    this.setState({ isLoading: true, buttonText: "Loading..." });
    setTimeout(() => {
      console.log("FINISH INSERT USER");
      this.setState({
        users: [...this.state.users, newUser],
        isLoading: false,
        buttonText: "ADD"
      });
    }, 2000);
  };

  onAddButtonPress = () => {
    this.addUserToList();
  };

  render() {
    console.log("PARENT RENDER", this.state);
    const { users, isLoading, buttonText } = this.state;
    return (
      <div>
        <AddButton
          buttonText={buttonText}
          onButtonClick={this.onAddButtonPress}
          disabled={isLoading || this.props.buttonDisabled}
        />
        <br />
        {users.map(user => (
          <UserNameLabel {...user} key={user.id} />
        ))}
      </div>
    );
  }
}
