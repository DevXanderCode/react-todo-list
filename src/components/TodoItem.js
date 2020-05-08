import React, { Component } from "react";

export default class TodoItem extends Component {
  render() {
    const {
      title,
      time,
      date,
      handleDelete,
      handleEdit,
      taskCompleted,
    } = this.props;
    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
        <input type="checkbox" onClick={taskCompleted} />
        <h6>{title}</h6>

        <div className="todo-icon">
          {time + " " + date}
          <span
            className="mx-2 text-success"
            onClick={handleEdit}
            style={{ cursor: "pointer" }}
          >
            <i className="fas fa-pen" />
          </span>
          <span
            className="mx-2 text-danger"
            onClick={handleDelete}
            style={{ cursor: "pointer" }}
          >
            <i className="fas fa-trash" />
          </span>
        </div>
      </li>
    );
  }
}