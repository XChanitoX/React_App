import React, { Component } from 'react';

class ToDoForm extends Component {
  constructor() {
    super(); //Heredando funcionalidades de React
    this.state = {
      title: '',
      responsible: '',
      description: '',
      priority: 'low'
    };
  }

  handleInput(e) {
      console.log(e.target.value, e.target.name);
  }

  render() {
      return (
        <div className="card">
          <form className="card-body">
            <div className="form-group">
              <input
                type="text"
                name="title"
                className="form-control"
                placeholder="Title"
                onChange={this.handleInput}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="responsible"
                className="form-control"
                placeholder="Responsible"
                onChange={this.handleInput}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="description"
                className="form-control"
                placeholder="Description"
                onChange={this.handleInput}
              />
            </div>
            <div className="form-group">
              <select
                name="priority"
                className="form-control"
                value={this.state.priority}
                onChange={this.handleInputChange}
              >
                <option>low</option>
                <option>medium</option>
                <option>high</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </form>
        </div>
      );
  }
}

export default ToDoForm;