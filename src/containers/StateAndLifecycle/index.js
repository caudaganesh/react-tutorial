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
    isLoading: false,
    isFinishFetching: false
  };

  componentWillMount() {
    console.log("COMPONENT WILL MOUNT");
    console.log("START FETCHING");
    setTimeout(() => {
      console.log(`FINALLY FINISSSHHH !!!!!!!!!!!!!!!!!!!!`);
    }, 5000);
  }

  componentWillUpdate() {
    console.log("COMPONENT WILL UPDATE");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("PARENT COMPONENT DID UPDATE", "PREVSTATE", prevState);
  }

  onAddButtonPress = () => {
    const id = this.state.users.length;
    const newUser = {
      userName: `TOPED_${id}`,
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

  render() {
    console.log("PARENT RENDER");
    const { users, isLoading, buttonText } = this.state;
    return (
      <div>
        <AddButton
          buttonText={buttonText}
          onButtonClick={this.onAddButtonPress}
          disabled={isLoading}
        />
        <br />
        {users.map(user => (
          <UserNameLabel {...user} key={user.id} />
        ))}
      </div>
    );
  }
}
