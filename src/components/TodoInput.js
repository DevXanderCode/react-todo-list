import React, { Component } from "react";

export default class TodoInput extends Component {
  render() {
    const {
      item,
      handleChange,
      handleSubmit,
      editItem,
      invalidInput,
    } = this.props;
    return (
      <div className="card card-body my-3">
        <div
          className={invalidInput ? "text-capitalize" : "d-none"}
          style={{ color: "red" }}
        >
          please the Todo List Input can't be empty
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                <i className="fas fa-book" />
              </div>
            </div>
            <input
              type="text"
              className="form-control text-capitalize"
              placeholder="add a todo item"
              value={item}
              onChange={handleChange}
            />
          </div>
          <div className="input-group-text bg-success">
            <span className="mx-2">
              <i className="fas fa-list-ul" />
            </span>
            <span className="mx-2">
              <i className="far fa-calendar-check" />
            </span>
          </div>
          <button
            type="submit"
            className={
              editItem
                ? "btn btn-block btn-success mt-3"
                : "btn btn-block btn-primary mt-3"
            }
          >
            {editItem ? "edit item" : "add item"}
          </button>
        </form>
      </div>
    );
  }
}