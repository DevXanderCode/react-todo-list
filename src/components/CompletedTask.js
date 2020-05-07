import React from "react";

import CompletedItem from "./CompletedItem";

class CompletedTask extends React.Component {
  render() {
    const {
      items,
      taskUncompleted,
      clearCompletedTask,
      deleteCompletedTask,
    } = this.props;
    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">Completed Task</h3>
        {items.map((item) => (
          <CompletedItem
            key={item.id}
            title={item.title}
            taskUncompleted={() => taskUncompleted(item)}
            clearCompletedTask={clearCompletedTask}
            deleteCompletedTask={() => deleteCompletedTask(item.id)}
          />
        ))}
        <button
          type="button"
          className="btn btn-danger text-capitalize mt-5"
          onClick={clearCompletedTask}
        >
          Clear Completed Task
        </button>
      </ul>
    );
  }
}

export default CompletedTask;
