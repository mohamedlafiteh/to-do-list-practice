import React from "react";
import ToDo from "./Components/ToDo";
import Header from "./Header";
import AddToDo from "./AddToDo";
import uuid from "uuid";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./page/About";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          id: uuid.v4(),
          title: "study React",
          completed: false
        },
        {
          id: uuid.v4(),
          title: "play football",
          completed: false
        },
        {
          id: uuid.v4(),
          title: "dinner with friends",
          completed: false
        },
        {
          id: uuid.v4(),
          title: "travel to Italy",
          completed: false
        }
      ]
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
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };
  AddTitle = title => {
    const newTodo = {
      id: uuid.v4(),
      title: title,
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };
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
