import React, { Component } from "react";

export class AddToDo extends Component {
  constructor() {
    super();

    this.state = {
      title: ""
    };
  }
  handleChange = e => {
    this.setState({
      title: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.AddTitle(this.state.title);
    this.setState({
      title: ""
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} style={{ display: "flex" }}>
          <input
            onChange={this.handleChange}
            style={{ flex: "10", padding: "5px" }}
            type="text"
            placeholder="Add Todo ...."
            name="title"
            value={this.state.title}
          />
          <input
            style={{ flex: 1 }}
            type="submit"
            value="submit"
            className="btn"
          />
        </form>
      </div>
    );
  }
}

export default AddToDo;
