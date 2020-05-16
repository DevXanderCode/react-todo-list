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
              <TodoInput
              // item={this.state.item}
              // handleChange={this.handleChange}
              // handleSubmit={this.handleSubmit}
              // editItem={this.state.editItem}
              // invalidInput={this.state.invalidInput}
              // moreDetails={this.state.moreDetails}
              // showDetail={this.showDetail}
              // showTime={this.state.showTime}
              // handleTime={this.handleTime}
              // time={this.state.time}
              // date={this.state.date}
              />
              <TodoList
              // items={this.state.items}
              // clearList={this.clearList}
              // handleDelete={this.handleDelete}
              // handleEdit={this.handleEdit}
              // taskCompleted={this.taskCompleted}
              />
              <CompletedTask
              // items={this.state.completedTask}
              // taskUncompleted={this.taskUncompleted}
              // clearCompletedTask={this.clearCompletedTask}
              // deleteCompletedTask={this.deleteCompletedTask}
              />
            </div>
          </div>
        </div>
      </TodoProvider>
    );
  }
}

export default App;
