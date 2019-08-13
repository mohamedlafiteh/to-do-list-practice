import React, { Component } from "react";
import ToDoItem from "./ToDoItem";
import PropTypes from "prop-types";
export class ToDo extends Component {
  render() {
    return (
      <div>
        {this.props.todos.map(todo => {
          return (
            <ToDoItem
              handleDelete={this.props.handleDelete}
              MarkComplete={this.props.MarkComplete}
              key={todo.id}
              todos={todo}
            />
          );
        })}
      </div>
    );
  }
}

ToDo.propTypes = {
  todos: PropTypes.array.isRequired
};
export default ToDo;
