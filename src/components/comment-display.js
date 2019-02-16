import React, { Component } from 'react';

class CommentDisplay extends Component {
  render() {
      const {comment, deleteComment} = this.props;
    return (
      // <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
      <div className="col-md-6 mt-2 mb-2 text-capitalize">
        <div className="card card-body" style={{textAlign:"left"}}>
          <h5 className="card-title justify-content-between">
            {comment.title}
            <span className="todo-icon mx-2 text-danger" onClick={deleteComment}>
            <i className="fas fa-trash"></i>
            </span>
          </h5>
          
                            
          <small className="card-subtitle text-muted">
            <i>{comment.date}</i>
          </small><br></br>
          <div className="card-text">
            {comment.description}
          </div> 
        </div>
        </div>
      // </li>
    );
  }
}

export default CommentDisplay;
