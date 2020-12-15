import React, { Component } from "react";
import PostService from "../../service/sevice-post/PostService";

export default class FullPosts extends Component {
  state = { post: null };
  postService = new PostService();

  async componentDidMount() {
    let { postId } = this.props;
    const post = await this.postService.post(postId); //замінити
    this.setState({ post }); //замінити
  }
  render() {
    const { post } = this.state;
    return (
      <div>
        {post && (
          <div>
            {post.id} - {post.title} - {post.body}-
          </div>
        )}
      </div>
    );
  }
}
