import React from "react";

import CompletedItem from "./CompletedItem";
import { TodoConsumer } from "../TodoContext";

class CompletedTask extends React.Component {
  render() {
    return (
      <TodoConsumer>
        {(value) => {
          const {
            completedTask,
            taskUncompleted,
            clearCompletedTask,
            deleteCompletedTask,
          } = value;
          return (
            <ul className="list-group my-5">
              <h3 className="text-capitalize text-center">Completed Task</h3>
              {completedTask.map((item) => (
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
        }}
      </TodoConsumer>
    );
  }
}

export default CompletedTask;
