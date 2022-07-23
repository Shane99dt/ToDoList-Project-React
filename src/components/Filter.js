import React, { Component } from "react";

class Filter extends Component {
  render() {
    return (
      <>
        <section className="flex flex-row justify-center">
          <button  className="p-1 mx-2">All</button>
          <button  className="p-1 mx-2">To Do</button>
          <button  className="p-1 mx-2">Doing</button>
          <button  className="p-1 mx-2">Done</button>
        </section>
      </>
    );
  }
}

export default Filter;
