import React, { Component } from 'react';

class AddComment extends Component {
  render() {
    const {handleTitle, handleDescription, handleSubmit} = this.props;
    return (
      <div>
        <h2 className="text-muted">Add Utterances</h2>
        <div className="card card-header m-5">
        <form>
          <input type="text" placeholder="Title" onChange={handleTitle} className="form-control mt-3 mr-3" ></input>
          <textarea placeholder="Description" onChange={handleDescription} className="form-control mt-3 mr-3"></textarea>
          <input className="btn btn-info m-3 pl-5 pr-5" onClick={handleSubmit} type="Submit" value="Save"></input>
        </form>
        </div>
      </div> 
    );
  }
}

export default AddComment;
