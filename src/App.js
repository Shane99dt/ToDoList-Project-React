import React from "react";
import Form from "./components/Form";
import List from "./components/List";
// import Task from "./components/Task";
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      tasks: [],
    };
  }

  addTask = (taskTodo) => {
    const clonedTasks = [
      ...this.state.tasks,
      { description: taskTodo, status: "to do" },
    ];

    this.setState({
      tasks: clonedTasks,
    });
  };

  deleteTask = (i) => {
    const clonedTasks = [...this.state.tasks];

    clonedTasks.splice(i, 1);

    this.setState({
      tasks: clonedTasks,
    });
  };

  modifyTask = (bool) => {
    // const clonedTasks = [...this.state.tasks]
    this.setState({
      modify : bool
    })

    console.log("task modified")
  }

  render() {
    return (
      <div>
        <Form taskAdd={this.addTask} />
        <List
          tasks = {this.state.tasks}
          delete={this.deleteTask}
          modifyFunction = {this.modifyTask}
        />
      </div>
    );
  }
}

export default App;
