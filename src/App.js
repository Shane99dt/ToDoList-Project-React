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
    console.log("bjkb");
  }

  render() {
    console.log(this.addTask("add this "))
    return (
      <div>
        <Form
          formSubmit = {this.addTask}
        />
      </div>
    );
  }
}

export default App
