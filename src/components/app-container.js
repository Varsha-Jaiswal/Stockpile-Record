import React, { Component } from 'react';
import AddComment from './add-comment';
import CommentsList from './comments_list';

import uuid from "uuid";
class AppContainer extends Component {
  state = {
    comments: []
  }
  comment = {
    title: '',
    description: '',
    id: uuid(),
    date: new  Date().toLocaleDateString()
  }
  handleTitle= e => {
    this.title_data = e.target;
    this.comment.title = e.target.value;
  };
  handleDescription= e => {
    this.description_data = e.target;
    this.comment.description = e.target.value;
  }
  handleSubmit= e => {
    e.preventDefault();
    if(this.comment.title.length > 0 && this.comment.description.length > 0) {
        const newComment = [...this.state.comments, this.comment];
      this.setState({
        comments: newComment
      });
      this.title_data.value = '';
      this.description_data.value = '';
      this.resetComment();
    }
  };
  resetComment = () => {
    this.comment = {
      title: '',
      description: '',
      id: uuid(),
      date: new  Date().toLocaleDateString()
    }
  }
  deleteComment = (e) => {
    const updatedList = this.state.comments.filter(comment => comment.id !== e)
    this.setState({
      comments:updatedList
    })
  };
  render() {
    return (
      <div className="text-muted">
      <AddComment handleTitle={this.handleTitle} handleDescription={this.handleDescription} handleSubmit={this.handleSubmit}/>
      <CommentsList comments={this.state.comments} deleteComment={this.deleteComment}/>
      </div>
    );
  }
}

export default AppContainer;
