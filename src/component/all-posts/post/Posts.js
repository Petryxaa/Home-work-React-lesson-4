import React, { Component } from "react";
import Post from "./Post";
import PostService from "../../service/sevice-post/PostService";

import FullPosts from "../full-posts/FullPosts";

import { Switch, Route, withRouter } from "react-router-dom";

class Posts extends Component {
  postService = new PostService();
  state = { post: [], chosenOne: null };

  async componentDidMount() {
    const post = await this.postService.posts();
    this.setState({ post });
  }

  onSelectBody = (id) => {
    let { post } = this.state;
    let find = post.find((value) => value.id === id);
    this.setState({ chosenOne: find });
  };
  render() {
    const { post, chosenOne } = this.state;
    let {
      match: { url },
    } = this.props;
    return (
      <div>
        {chosenOne && (
          <div>
            <h3>
              {chosenOne.id}-{chosenOne.title}-{chosenOne.body}
            </h3>
          </div>
        )}
        {post.map((value) => (
          <Post item={value} key={value.id} onSelectBody={this.onSelectBody} />
        ))}

        <hr />
        <Switch>
          <Route
            path={url + "/:id"}
            render={(props) => {
              const {
                match: {
                  params: { id },
                },
              } = props;
              return <FullPosts postId={id} key={id} />;
            }}
          ></Route>
        </Switch>
        <hr />
      </div>
    );
  }
}
export default withRouter(Posts);
