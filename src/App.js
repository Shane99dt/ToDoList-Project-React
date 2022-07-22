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
    console.log("task");
  };


  render() {
    return (
      <div>
        <Form formSubmit={this.addTask} />
      </div>
    );
  }
}

export default App;
