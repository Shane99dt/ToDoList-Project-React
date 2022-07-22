import React from "react";
import Form from "./components/Form";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      tasks: [],
    };
  }
  addTask = (e) => {
    e.preventDefault();
    console.log(e + "je m'ajoute au form");
  };

  render() {
    return (
      <div>
        <Form formSubmit={this.addTask} />
        <List />
      </div>
    );
  }
}

export default App;
