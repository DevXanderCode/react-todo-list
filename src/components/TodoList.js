import React, { Component } from "react";

import TodoItem from "./TodoItem";
import { TodoConsumer } from "../TodoContext";

export default class TodoList extends Component {
  render() {
    return (
      <TodoConsumer>
        {(value) => {
          const {
            items,
            clearList,
            handleDelete,
            handleEdit,
            taskCompleted,
          } = value;
          return (
            <ul className="list-group my-5">
              <h3 className="text-capitalize text-center">todo list</h3>
              {items.map((item) => {
                return (
                  <TodoItem
                    key={item.id}
                    title={item.title}
                    item={item}
                    time={item.time}
                    date={item.date}
                    handleDelete={() => handleDelete(item.id)}
                    handleEdit={() => handleEdit(item.id)}
                    taskCompleted={() => taskCompleted(item)}
                  />
                );
              })}
              <button
                type="button"
                className="btn btn-danger btn-block text-capitalize mt-5"
                onClick={clearList}
              >
                clear list
              </button>
            </ul>
          );
        }}
      </TodoConsumer>
    );
  }
}
