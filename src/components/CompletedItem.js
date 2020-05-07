import React from "react";

const CompletedItem = (props) => {
  const { title, taskUncompleted, deleteCompletedTask } = props;
  return (
    <li className="list-group-item d-flex justify-content-between my-2">
      <input type="checkbox" onChange={taskUncompleted} checked />
      <h6 style={{ textDecoration: "line-through" }}>{title}</h6>

      <div className="todo-icon">
        <span
          className="mx-2 text-danger"
          onClick={deleteCompletedTask}
          style={{ cursor: "pointer" }}
        >
          <i className="fa fa-trash" />
        </span>
      </div>
    </li>
  );
};

export default CompletedItem;
