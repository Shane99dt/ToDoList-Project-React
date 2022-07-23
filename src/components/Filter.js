import React, { Component } from "react";

class Filter extends Component {
  render() {
    return (
      <>
        <section className="flex flex-row justify-center">
          <button onClick={() => this.props.filterTasksFn("all")}  className="p-1 mx-2">All</button>
          <button onClick={() => this.props.filterTasksFn("to do")}  className="p-1 mx-2">To Do</button>
          <button onClick={() => this.props.filterTasksFn("doing")}  className="p-1 mx-2">Doing</button>
          <button onClick={() => this.props.filterTasksFn("done")}  className="p-1 mx-2">Done</button>
        </section>
      </>
    );
  }
}

export default Filter;
