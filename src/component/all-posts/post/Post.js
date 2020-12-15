import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
class Post extends Component {
  render() {
    const {
      item,
      onSelectBody,
      match: { url },
    } = this.props;

    return (
      <div>
        {item.id} - {item.title} - <Link to={url + "/" + item.id}> post</Link>-{" "}
        <button onClick={() => onSelectBody(item.id)}> choose</button>
      </div>
    );
  }
}
export default withRouter(Post);
