import React from "react";
import { deleteTodo } from "./js/actions/index";
import { connect } from "react-redux";

function Todos({ todos, deleteTodo }) {
  //destructuring the props and passing the delete function fromm App.js

  const todolist = todos.length ? (
    todos.map(todo => {
      return (
        <div className="collection-item" key={todo.id}>
          <span
            onClick={() => {
              deleteTodo(todo.id);
            }}
          >
            {todo.content}
          </span>
        </div>
      );
    })
  ) : (
    <p className="center">You're Done .. for now</p>
  );
  return <div className="todos collection">{todolist}</div>;
}

const mapDispatchToProps = dispatch => {
  return {
    deleteTodo: id => {
      dispatch(deleteTodo(id));
    }
  };
};

const mapStateToProps = state => ({
  todos: state
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos);
