import React, { Component } from "react";

//CSS File
import "./App.css";

//Components
import Header from "./components/inc/Header";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{ text: "hello" }, { text: "hello" }, { text: "hello" }]
    };

    this.addTodo = this.addTodo.bind(this);
  }

  addTodo = todo => {
    this.state.todos.push(todo);
    this.setState({
      term: ""
    });
  };

  removeTodo = todoIndex =>{
    const todos = this.state.todos
    todos.splice(todoIndex, 1);
    this.setState({ todos })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <TodoForm addTodo={this.addTodo} />
        <TodoList todos={this.state.todos} removeTodo={this.removeTodo}/>
      </div>
    );
  }
}

export default App;
