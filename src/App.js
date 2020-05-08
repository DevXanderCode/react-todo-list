import React from "react";

import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
import { v1 as uuid } from "uuid";
import CompletedTask from "./components/CompletedTask";

class App extends React.Component {
  state = {
    items: [],
    id: uuid(),
    item: "",
    completedTask: [],
    time: `${new Date().toLocaleTimeString()}`,
    date: `${new Date().toLocaleDateString()}`,
    editItem: false,
    invalidInput: false,
    moreDetails: false,
    showTime: false,
  };

  handleChange = (e) => {
    this.setState({
      item: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.item === "") {
      this.setState({ invalidInput: true });
      return false;
    }

    const newItem = {
      id: this.state.id,
      title: this.state.item,
      time: this.state.time,
      date: this.state.date,
    };

    const updatedItems = [...this.state.items, newItem];

    this.setState({
      items: updatedItems,
      item: "",
      id: uuid(),
      editItem: false,
      invalidInput: false,
    });
  };

  clearList = () => {
    this.setState({
      items: [],
    });
  };

  handleDelete = (id) => {
    const filteredItem = this.state.items.filter((item) => item.id !== id);
    this.setState({
      items: filteredItem,
    });
  };

  handleEdit = (id) => {
    const filteredItem = this.state.items.filter((item) => item.id !== id);

    const selectedItem = this.state.items.find((item) => item.id === id);

    this.setState({
      items: filteredItem,
      item: selectedItem.title,
      editItem: true,
      id,
    });
  };

  taskCompleted = (item) => {
    const filteredItem = this.state.items.filter(
      (prevItem) => prevItem.id !== item.id
    );

    const completedTask = this.state.items.find(
      (prevItem) => prevItem.id === item.id
    );

    const updatedCompletedTask = [...this.state.completedTask, completedTask];

    this.setState({
      items: filteredItem,
      completedTask: updatedCompletedTask,
    });
  };
  taskUncompleted = (item) => {
    const filteredItem = this.state.completedTask.filter(
      (prevItem) => prevItem.id !== item.id
    );

    const uncompletedTask = this.state.completedTask.find(
      (prevItem) => prevItem.id === item.id
    );

    const updatedItems = [...this.state.items, uncompletedTask];

    this.setState({
      items: updatedItems,
      completedTask: filteredItem,
    });
  };

  clearCompletedTask = () => {
    this.setState({
      completedTask: [],
    });
  };
  deleteCompletedTask = (id) => {
    const filteredItem = this.state.completedTask.filter(
      (item) => item.id !== id
    );
    this.setState({
      completedTask: filteredItem,
    });
  };
  showDetail = () => {
    if (this.state.moreDetails === false) this.setState({ moreDetails: true });
    else this.setState({ moreDetails: false });
  };
  handleTime = () => {
    if (this.state.showTime === false) this.setState({ showTime: true });
    else this.setState({ showTime: false });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">Todo List App</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
              invalidInput={this.state.invalidInput}
              moreDetails={this.state.moreDetails}
              showDetail={this.showDetail}
              showTime={this.state.showTime}
              handleTime={this.handleTime}
              time={this.state.time}
              date={this.state.date}
            />
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
              taskCompleted={this.taskCompleted}
            />
            <CompletedTask
              items={this.state.completedTask}
              taskUncompleted={this.taskUncompleted}
              clearCompletedTask={this.clearCompletedTask}
              deleteCompletedTask={this.deleteCompletedTask}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
