import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "./js/actions/index";

class AddTodo extends Component {
  state = {
    content: ""
  };

  //handler functionS
  handleChange = e => {
    this.setState({
      content: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.content);
    this.setState({
      content: ""
    });
  };
  //dispatchi houni yaa bro
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add New Todo:</label>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.content}
          />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: todo => {
      dispatch(addTodo(todo));
    }
  };
};

// const AddForm = connect(null,mapDispatchToProps)(AddTodo);
export default connect(
  null,
  mapDispatchToProps
)(AddTodo);
