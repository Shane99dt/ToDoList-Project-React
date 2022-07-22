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
        <p>{this.props.task}</p>
        <button>Modifier</button>
        <button>Supprimer</button>
      </div>
    );
  }
}

export default List;
