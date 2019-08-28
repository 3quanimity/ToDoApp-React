import React, { Component } from "react";
import Todos from "./Todos";
import AddTodo from "./AddForm";
import { connect } from "react-redux";

class connectedApp extends Component {
  // store
  // state = {
  //   todos: [
  //     {
  //       id: 1,
  //       content: "Finish the todo app"
  //     },
  //     {
  //       id: 2,
  //       content: "Conquer the world"
  //     }
  //   ]
  // };

  // delete function
  // deleteTodo = id => {
  //   const todos = this.state.todos.filter(todo => {
  //     return todo.id !== id;
  //   });
  //   this.setState({
  //     // todos: todos ... if the key and value have the same name
  //     todos
  //   });
  // };

  // addTodo = todo => {
  //   if (todo.content.length) {
  //     todo.id = Math.random();
  //     let todos = [...this.props.todos.todos, todo];
  //     this.setState({ todos });
  //   }
  //   // this.props.addTodo(todo);
  // };

  // rendering
  render() {
    console.log(this.props.todos);
    return (
      <div className="todo-app container">
        <h2 className="center blue-text text-darken-2">My Todos</h2>
        <Todos todos={this.props.todos.todos} deleteTodo={this.deleteTodo} />
        <AddTodo />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { todos: state };
};

const App = connect(mapStateToProps)(connectedApp);
export default App;
