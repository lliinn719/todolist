import { Component } from "react";
import "./App";

export default class Create extends Component {
  state = {
    todo: "",
  };
  componentDidMount = () => {
    this.setState({
      todo: "",
    });
  };
  handleAddTodo = () => {
    const { todo } = this.state;
    let data = localStorage.getItem("todoList")
      ? JSON.parse(localStorage.getItem("todoList"))
      : [];
    if (todo === "") {
      alert("請輸入代辦事項");
    } else {
      data.push(todo);
      localStorage.setItem("todoList", JSON.stringify(data));
      this.setState({
        todo: "",
      });
      this.props.history.push("/");
    }
  };

  handleKeyDown = (e) => {
    if (e.KeyCode === 13) {
      this.handleAddTodo();
    }
  };

  render() {
    const { todo } = this.state;
    return (
      <div className="create">
        <h1>Create todo</h1>
        <br />
        <input
          type="text"
          value={todo}
          onChange={(e) => this.setState({ todo: e.target.value })}
          onKeyDown={(e) => this.handleKeyDown(e)}
          autoFocus
        ></input>
        <input type="submit" value="Add" onClick={this.handleAddTodo}></input>
      </div>
    );
  }
}
