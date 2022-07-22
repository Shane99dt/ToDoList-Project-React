import React, { Component } from "react";

class List extends Component {
  constructor() {
    super();
  }

  render() {
    console.log(this);
    return (
      <div>
        <p>{this.props.task}</p>
        <button>Modifier</button>
        <button onClick={this.props.delete}>Supprimer</button>
      </div>
    );
  }
}

export default List;
