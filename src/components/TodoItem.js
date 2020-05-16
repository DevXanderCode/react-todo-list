import React, { Component } from "react";

export default class TodoItem extends Component {
  render() {
    const {
      title,
      item,
      time,
      date,
      handleDelete,
      handleEdit,
      taskCompleted,
    } = this.props;
    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
        <input
          type="checkbox"
          style={{ minWidth: "1.2em", minHeight: "1.2em", float: "left" }}
          onClick={() => taskCompleted(item.id)}
        />
        <h6>{title}</h6>

        <div className="todo-icon">
          <div style={{ fontSize: ".6rem" }} className="d-flex">
            {time}
          </div>
          <div style={{ fontSize: ".6rem" }}>{date}</div>
          <span
            className="mx-2 text-success"
            onClick={handleEdit}
            style={{ cursor: "pointer" }}
          >
            <i className="fas fa-pen" />
          </span>
          <span
            className="mx-2 text-danger"
            onClick={() => handleDelete(item.id)}
            style={{ cursor: "pointer" }}
          >
            <i className="fas fa-trash" />
          </span>
        </div>
      </li>
    );
  }
}
