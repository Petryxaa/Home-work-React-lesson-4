import React, { Component } from "react";
import User from "./User";
import UserService  from "../../service/service-user/UserService";
import {Switch,Route,withRouter} from 'react-router-dom';

import FullUsers from "../full-users/FullUsers";

class Users extends Component {
  userService = new UserService();
  state = { user: [] };

  async componentDidMount() {
    let user = await this.userService.users(); 
    this.setState({ user });
  }

  render() {
    let {user} = this.state;
    let {match: {url} } =this.props;
    return (
      <div>
        {
        user.map(value => < User item={value} key={value.id} /> )
        }
      <hr/>

      <Switch>
      <Route path ={url + '/:id' } render = {(props) => {
        const { match: {params: {id} }} = props;
        return <FullUsers userId = {id} key = {id}  />} }>
      </Route>
      </Switch>
      
      <hr/>
  
      </div>
    );
  }
}
export default withRouter(Users);
