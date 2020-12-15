import React, { Component } from 'react'
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';

import Users from './component/all-users/user/Users';
import Posts from './component/all-posts/post/Posts';
import Comments from './component/all-comments/comments/Comments';

 class App extends Component {
  render() {
    return (
      <Router>
      <div>

<ul>
  <li>
    <Link to = {'/users'}> AllUsers</Link>
  </li>
</ul>

<ul>
  <li>
    <Link to = {'/post'}>AllPost</Link>
  </li>
</ul>

<ul>
  <li>
    <Link to = {'/comment'}>Comments</Link>
  </li>
</ul>



<Switch>
<Route path ={'/users'} render = {(props) =>{return <Users/>} }>
</Route>
</Switch>

<Switch>
<Route path ={'/post'} render = {(props) =>{return <Posts/>} }>
</Route>
</Switch>

<Switch>
<Route path ={'/comment'} render = {(props) =>{return <Comments/>} }>
</Route>
</Switch>






        
      </div>
      </Router>
    )
  }
}
export default App;
