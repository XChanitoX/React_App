import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import ToDoForm from './components/ToDoForm';

import { todos } from './todos.json';

class App extends Component {
  //Constructor de la clase App
  constructor() {
    super(); //Heredando funcionalidades de React
    this.state = {
      todos
    }
  }

  render() {
    const todos = this.state.todos.map((todo, i) => {
      return (
          <div className="col-md-4">
            <div className="card mt-4">
              <div className="card-header">
                <h3>{todo.title}</h3>
                <span
                  style={{
                    borderRadius: "10px",
                    padding: "2px 10px",
                    color: "black",
                    backgroundColor: "#edbf34",
                  }}
                >
                  <b>{todo.priority}</b>
                </span>
              </div>
              <div
                className="card-body"
                style={{
                  backgroundColor: "#dc3545",
                  color: "white",
                }}
              >
                <p>{todo.description}</p>
                <p>
                  <mark
                    style={{
                      backgroundColor: "#edbf34",
                      borderRadius: "10px",
                      padding: "2px 10px",
                    }}
                  >
                    Responsable : {todo.responsible}
                  </mark>
                </p>
              </div>
            </div>
          </div>
      );
    })

    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <a
            href="/"
            className="text-white"
            style={{
              marginLeft: "10px",
            }}
          >
            Tasks
            <span
              className="badge rounded-pill bg-danger"
              style={{
                marginLeft: "10px",
              }}
            >
              {this.state.todos.length}
            </span>
          </a>
        </nav>

        <div className="container">
          <div className="row mt-4">
            <div className="col-md-4 text-center">
              <ToDoForm onAddTodo={this.handleAddTodo}></ToDoForm>
            </div>

            <div className="col-md-8">
              <div className="row">{todos}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
