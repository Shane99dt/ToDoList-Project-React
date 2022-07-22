import React, { Component } from "react";

class List extends Component {
  constructor() {
    super();
  }

  render() {
    console.log(this);
    return (
      <div className="flex flex-row my-1 justify-between w-3/4 gap-2 border">
        <p className="w-3/5 pl-2 py-2">{this.props.task}</p>
        <div>
          <button className="p-2 " onClick={this.props.modify}>
            Mod
          </button>
          <button className="p-2" onClick={this.props.delete}>
            Sup
          </button>
        </div>
      </div>
    );
  }
}

export default List;
