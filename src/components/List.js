import React, { Component } from "react";
import Task from "./Task";

class List extends Component {
  render() {
    return (
      <>
        <section className="flex flex-col items-center mt-5">
          {this.props.tasks.map((item, i) => (
            <Task
              item = {item}
              index={i}
              delete = {this.props.delete}
              modifyTask = {this.props.modifyFunction}
              changeStatus = {this.props.changeStatusFn}
              changeInputFn = {this.props.changeInput}
              modifyDescription = {this.props.modifyDescription}
              tasksList = {this.props.tasks}
            />
          ))}
        </section>
      </>
    );
  }
}

export default List;
