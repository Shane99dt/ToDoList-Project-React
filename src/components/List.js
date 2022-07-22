import React, { Component } from "react";
import Task from "./Task";

class List extends Component {
  render() {
    return (
      <section className="flex flex-col items-center border">
        {this.props.tasks.map((item, i) => (
          <Task
            item = {item}
            index={i}
            delete = {this.props.delete}
            modify = {this.props.modifyFunction}
            changeStatus = {this.props.changeStatusFn}
            changeInputFn = {this.props.changeInput}
          />
        ))}
      </section>
    );
  }
}

export default List;
