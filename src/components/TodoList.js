import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  render() {
    return (
      <div>
        <ListGroup>
          {this.props.todos.map((todo, index) => {
            return <TodoItem text={todo.text} key={index} index={index} removeTodo={this.props.removeTodo} />;
          })}
        </ListGroup>
      </div>
    );
  }
}

export default TodoList;
