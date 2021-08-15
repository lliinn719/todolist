import { Component, useCallback } from "react";
import { Link } from "react-router-dom";
import "./App";

export default class Edit extends Component {
  state = {
    todoList: [],
  };
  componentDidMount = () => {
    const { id } = this.props.match.params;
    const data = localStorage.getItem("todoList")
      ? JSON.parse(localStorage.getItem("todoList"))
      : [];
    console.log("data", data);
    if (data.length > 0) {
      this.setState(
        {
          todoList: data,
        },
        () => {
          console.log(this.state);
        }
      );
    }
  };

  handleEditTodo = () => {
    const updateArray = localStorage.getItem("todoList")
      ? JSON.parse(localStorage.getItem("todoList"))
      : [];
    const { id } = this.props.match.params;
    const { todoList } = this.state;
    updateArray[id] = todoList;
    localStorage.setItem("todoList", JSON.stringify(updateArray));
  };
  render() {
    const { id } = this.props.match.params;
    const { todoList } = this.state;
    return (
      <div>
        <input
          className="edit"
          type="text"
          defaultValue={todoList[id]}
          onChange={(e) => this.setState({ todoList: e.target.value })}
        ></input>
        <button onClick={this.handleEditTodo}>
          <Link to="/todo">編輯完成</Link>
        </button>
      </div>
    );
  }
}
