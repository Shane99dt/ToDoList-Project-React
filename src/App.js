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
  handleTaskDescriptionChange = (e) => {
    console.log(e + "description");
  };
  handleSubmit = (e) => {
    console.log(e + "handle submit");
  };


  render() {
    return (
      <div>
        <Form
          addTask={this.addTask}
          change={this.handleTaskDescriptionChange}
          submit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default App;
