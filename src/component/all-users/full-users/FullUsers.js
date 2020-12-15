import React, { Component } from "react";
import UserService from "../../service/service-user/UserService";

export default class FullUsers extends Component {
  state = { user: null };

  userService = new UserService();

  async componentDidMount() {
    const { userId } = this.props;
    const user = await this.userService.user(userId); //замінити
    this.setState({ user });
    console.log(user);
  }
  render() {
    const { user } = this.state;

    return (
      <div>
        {user && (
          <div>
            {user.id} - {user.name} - {user.email}-{" "}
          </div>
        )}
      </div>
    );
  }
}
