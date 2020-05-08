import React, { Component } from "react";

export default class TodoInput extends Component {
  render() {
    const {
      item,
      handleChange,
      handleSubmit,
      editItem,
      invalidInput,
      showDetail,
      moreDetails,
      showTime,
      handleTime,
    } = this.props;
    console.log(typeof time);
    return (
      <div className="card card-body my-3">
        <div
          className={
            invalidInput ? "text-capitalize alert alert-danger" : "d-none"
          }
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
            <div
              style={{ minWidth: "100%" }}
              className={moreDetails === false ? "d-none" : "d-block"}
            >
              <input
                type="text"
                placeholder="more Details about Task"
                className="form-control text-capitalize d-block"
              />
            </div>
          </div>
          <div
            style={{
              minWidth: "100%",
            }}
            className={showTime === false ? "d-none" : "d-block"}
          >
            <div className="d-flex ">
              <input type="time" value="12:30" className="ml-auto mr-0" />
              <input
                type="date"
                className="d-iniline mr-auto ml-0"
                style={{ width: "6.4rem" }}
                value=" "
              />
            </div>
          </div>
          <div className="input-group-text bg-secondary d-inline d-flex mt-0">
            <span
              className="mx-2 text-white"
              onClick={showDetail}
              style={{ cursor: "pointer" }}
            >
              <i className="fas fa-list-ul" />
            </span>
            <span
              className="mx-2 text-white"
              style={{ cursor: "pointer" }}
              onClick={handleTime}
            >
              <i className="far fa-calendar-check" />
            </span>
            <button
              type="submit"
              className={
                editItem
                  ? "btn btn-block btn-success "
                  : "btn btn-block btn-primary "
              }
            >
              {editItem ? "edit item" : "add item"}
            </button>
          </div>
        </form>
      </div>
    );
  }
}
