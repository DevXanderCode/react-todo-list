import React, { createContext } from "react";
import { v1 as uuid } from "uuid";

const TodoContext = createContext();

class TodoProvider extends React.Component {
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
      this.setState({
        invalidInput: true,
      });
      return false;
    }

    const newItem = {
      id: this.state.id,
      title: this.state.item,
      time: this.state.time,
      date: this.state.date,
    };

    const updatedItems = [...this.state.items, newItem];

    this.setState(() => {
      return {
        items: updatedItems,
        item: "",
        id: uuid(),
        editItem: false,
        invalidInput: false,
      };
    });
  };

  clearList = () => {
    this.setState({ items: [] });
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
      completedTask: [...updatedCompletedTask],
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
    this.setState(() => {
      return {
        completedTask: filteredItem,
      };
    });
  };

  showDetail = () => {
    if (this.state.moreDetails === false) this.setState({ moreDetails: true });
    else
      this.setState(() => {
        return { moreDetails: false };
      });
  };

  handleTime = () => {
    if (this.state.showTime === false) this.setState({ showTime: true });
    else this.setState({ showTime: false });
  };
  render() {
    return (
      <TodoContext.Provider
        value={{
          ...this.state,
          handleSubmit: this.handleSubmit,
          handleChange: this.handleChange,
          clearList: this.clearList,
          handleDelete: this.handleDelete,
          handleEdit: this.handleEdit,
          taskCompleted: this.taskCompleted,
          taskUncompleted: this.taskUncompleted,
          clearCompletedTask: this.clearCompletedTask,
          deleteCompletedTask: this.deleteCompletedTask,
          showDetail: this.showDetail,
          handleTime: this.handleTime,
        }}
      >
        {this.props.children}
      </TodoContext.Provider>
    );
  }
}

const TodoConsumer = TodoContext.Consumer;

export { TodoProvider, TodoConsumer };
