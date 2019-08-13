import React from "react";
import ToDo from "./Components/ToDo";
import Header from "./Header";
import AddToDo from "./AddToDo";

import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./page/About";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }
  //completed
  MarkComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };
  handleDelete = id => {
    const deleteTodo = {
      method: "DELETE"
    };
    fetch("http://localhost:3005/todo/${id}", deleteTodo).then(res => {
      this.setState({
        todos: [res]
      });
    });
    // this.setState({
    //   todos: [...this.state.todos.filter(todo => todo.id !== id)]
    // });
  };

  AddTitle = title => {
    const newTodo = {
      id: 0,
      title: title,
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };
  componentDidMount() {
    fetch("http://localhost:3005/todo")
      .then(res => res.json())
      .then(data => {
        this.setState({
          todos: data
        });
      });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={props => (
                <React.Fragment>
                  <AddToDo AddTitle={this.AddTitle} />
                  <ToDo
                    handleDelete={this.handleDelete}
                    MarkComplete={this.MarkComplete}
                    todos={this.state.todos}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/About" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
