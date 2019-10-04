import React, { Component } from "react";
import PropTypes from "prop-types";
export class ToDoItem extends Component {
  getStyle = () => {
    return {
      backgroundColor: "gray",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todos.completed ? "line-through" : "none"
    };
  };
  render() {
    const { id, title } = this.props.todos;
    return (
      <div style={this.getStyle()}>
        <input
          onChange={this.props.MarkComplete.bind(this, id)}
          type="checkbox"
        />{" "}
        {""}
        <p>{title}</p>
        <button
          onClick={this.props.handleDelete.bind(this, id)}
          style={buttonStyle}
        >
          X
        </button>
      </div>
    );
  }
}

ToDoItem.propTypes = {
  todos: PropTypes.object.isRequired
};
export default ToDoItem;

const buttonStyle = {
  background: "red",
  color: "blue",
  border: "none",
  padding: "5px 8px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right"
};
