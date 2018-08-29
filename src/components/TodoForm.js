import React, { Component } from "react";
import { Button, FormControl } from "react-bootstrap";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange = e => {
    this.setState({
      term: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const todo = {
      text: this.state.term
    };
    if (this.state.term.length > 0) {
      this.props.addTodo(todo);
      this.setState({
        term: ""
      });
    }
  };

  render() {
    return (
      <form className="todoForm">
        <FormControl
          type="text"
          className="todoInput"
          value={this.state.term}
          placeholder="Enter text"
          onChange={this.onChange}
        />
        <Button
          bsStyle="primary"
          className="todoBtn"
          type="submit"
          onClick={this.onSubmit}
        >
          Add Todo
        </Button>
      </form>
    );
  }
}

export default TodoForm;
