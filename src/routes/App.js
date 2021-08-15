import React, { Component } from "react";
import { Link } from "react-router-dom";
import Todo from "../components/Todo";

export default class App extends Component {
  state = {
    todoList: [],
  };
  componentDidMount = () => {
    const data = localStorage.getItem("todoList")
      ? JSON.parse(localStorage.getItem("todoList"))
      : [];
    console.log(data);
    if (data.length > 0) {
      this.setState(
        {
          todoList: data,
        },
        () => {
          console.log(this.state, localStorage);
        }
      );
    }
  };
  componentDidUpdate = () => {};

  handleonDelete = (index) => {
    const deleteArray = localStorage.getItem("todoList")
      ? JSON.parse(localStorage.getItem("todoList"))
      : [];
    deleteArray.splice(index, 1);
    console.log("pp", index, deleteArray);
    localStorage.setItem("todoList", JSON.stringify(deleteArray));
  };

  render() {
    const { todoList } = this.state;
    return (
      <div className="app">
        <h1>Todolist</h1>
        <br />
        <Link to="/todo/create" className="button">
          +
        </Link>
        <div className="todoList">
          <ul>
            {todoList.map((item, index) => (
              <Todo
                key={index}
                id={index}
                todo={item}
                del={this.handleonDelete}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
