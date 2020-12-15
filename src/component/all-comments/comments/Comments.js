import React, { Component } from "react";

import { Switch, Route, withRouter } from "react-router-dom";
import CommentService from "../../service/service-comment/CommentService";
import Comment from "./Comment";
import FullComments from "../full-comments/FullComments";
class Comments extends Component {
  state = { comment: [] };

  commentService = new CommentService();

  async componentDidMount() {
    let comment = await this.commentService.comments(); //замінити
    this.setState({ comment }); //замінити
  }
  render() {
    let { comment } = this.state;
    let {
      match: { url },
    } = this.props;

    return (
      <div>
          
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
              return <FullComments commentId={id} key={id} />;
            }}
          ></Route>
        </Switch>
        <hr />

        {comment.map((value) => (
          <Comment item={value} key={value.id} />
        ))}
      </div>
    );
  }
}
export default withRouter(Comments);
