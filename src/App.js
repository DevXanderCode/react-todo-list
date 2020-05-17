import React from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
import CompletedTask from "./components/CompletedTask";
import { TodoProvider } from "./TodoContext";

class App extends React.Component {
  render() {
    return (
      <TodoProvider>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-4">
              <h3 className="text-capitalize text-center">Todo List App</h3>
              <TodoInput />
              <TodoList />
              <CompletedTask />
            </div>
          </div>
        </div>
      </TodoProvider>
    );
  }
}

export default App;
