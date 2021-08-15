import { Component } from "react";
import { Link } from "react-router-dom";

export default class Todo extends Component {
  state = {
    checked: false,
  };

  handleChecked = () => {
    const { checked } = this.state;
    if (checked === true) {
      this.setState({
        checked: false,
      });
    } else {
      this.setState({
        checked: true,
      });
    }
  };
  render() {
    const { id, todo, del } = this.props;
    const { checked } = this.state;
    console.log(todo);
    return (
      <li id={id}>
        <input type="checkbox" onChange={this.handleChecked} />
        <span
          style={
            checked === true
              ? { textDecoration: "line-through" }
              : { textDecoration: "none" }
          }
        >
          {todo}
        </span>
        <Link to={`/todo/edit/${id}`} id="edit">
          Edit
        </Link>
        <button
          id="del"
          onClick={() => {
            del(id);
          }}
        >
          X
        </button>
      </li>
    );
  }
}
