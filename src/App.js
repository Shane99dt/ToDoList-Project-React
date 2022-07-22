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

  modifyTask = (item, i) => {
    const clonedTasks = [...this.state.tasks]
    clonedTasks[i] = item
    this.setState({
      tasks: clonedTasks,
    })

    console.log("task modified")
  }

  // handleChangeStatus = (item, i) => {
  //   const clonedTasks = [...this.state.tasks]
  //   // clonedTasks[i].status = item.target.value
  //   console.log(clonedTasks[i])
  // }

  // handleTaskDescriptionChange = (item, i) => {
  //   const clonedTasks = [...this.state.tasks, ]

  //   clonedTasks[i].description = item.target.value

  //   this.setState({
  //     tasks : clonedTasks
  //   })

  //   console.log(item)
  // }

  render() {
    return (
      <div>
        <Form taskAdd={this.addTask} />
        <List
          tasks={this.state.tasks}
          delete={this.deleteTask}
          modifyFunction={this.modifyTask}
          changeStatusFn = {this.handleChangeStatus}
          changeInput = {this.handleTaskDescriptionChange}
        />
        {/* <List task={this.props.tasks} /> */}
      </div>
    );
  }
}

export default App;
