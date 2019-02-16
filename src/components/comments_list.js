import React, { Component } from 'react';
import CommentDisplay from './comment-display';

class CommentsList extends Component {
  render() {
    const { comments, deleteComment} = this.props;
    return (
      <div className="m-container mt-3">
      <h2 className="text-muted">Comments List</h2>
        <div class="row"> 
          {
              comments.map(comment => {
                return (
                  <CommentDisplay comment={comment} deleteComment={() =>deleteComment(comment.id)}/>
                )})
            }
          </div>
      </div>
    );
  }
}

export default CommentsList;
