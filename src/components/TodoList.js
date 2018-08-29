import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";

class TodoList extends Component {
  render() {
    return (
      <div>
        <ListGroup>
          {this.props.todos.map((todo, index) => {
            return (
              <li className="list-group-item" key={index}>
                {todo.text}
              </li>
            );
          })}
        </ListGroup>
      </div>
    );
  }
}

export default TodoList;
