import React, { Component } from "react";

import CommentService from "../../service/service-comment/CommentService";

export default class FullComments extends Component {
  state = { comment: null };
  commentService = new CommentService();

  async componentDidMount() {
    const { commentId } = this.props;
    const comment = await this.commentService.comment(commentId); //замінити
    this.setState({ comment }); //замінити
  }

  render() {
    let { comment } = this.state;
    return (
      <div>
        {comment && (
          <div>
            {comment.id} - {comment.body}
          </div>
        )}
      </div>
    );
  }
}
