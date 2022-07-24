import React, { Component } from "react";

class Filter extends Component {
  render() {
    return (
      <>
        <section className="flex flex-row justify-center">
          <button onClick={() => this.props.filterTasksFn("")}  className="mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">All</button>
          <button onClick={() => this.props.filterTasksFn("to do")}  className="mx-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">To Do</button>
          <button onClick={() => this.props.filterTasksFn("doing")}  className="mx-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Doing</button>
          <button onClick={() => this.props.filterTasksFn("done")}  className="mx-2 bg-neutral-500 hover:bg-neutral-700 text-white font-bold py-2 px-4 rounded">Done</button>
        </section>
      </>
    );
  }
}

export default Filter;
