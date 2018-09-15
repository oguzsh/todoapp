import React, { Component } from "react";

class TodoItem extends Component {
  removeItem = e => {
    this.props.removeTodo(e);
  };
  render() {
    return (
      <li className="list-group-item" key={this.props.index}>
        {this.props.text}{" "}
        <button className="btn btn-danger left" onClick={() => this.removeItem(this.props.index)}>X</button>
      </li>
    );
  }
}

export default TodoItem;
