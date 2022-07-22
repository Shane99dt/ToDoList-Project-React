import React, { Component } from "react";

class List extends Component {
  constructor() {
    super();
  }
  deleteTask = () => {
    console.log(this.props.tasks);
  };
  render() {
    console.log(this);
    return (
      <div>
        <button>Supprimer</button>
      </div>
    );
  }
}

export default List;
