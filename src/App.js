import React from "react";
import Form from "./components/Form";
import List from "./components/List";

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
  modify = () => {};

  // modifyTask = () => {
  //   const clonedTasks = [...this.state.tasks]

  // }

  render() {
    console.log(this.state.tasks);
    return (
      <div>
        <Form taskAdd={this.addTask} />
        <List
          tasks={this.state.tasks}
          delete={this.deleteTask}
          modifyFunction={this.modifyTask}
        />
        {/* <List task={this.props.tasks} /> */}
      </div>
    );
  }
}

export default App;
