import React from "react";
import Form from "./components/Form";
import List from "./components/List";
import Filter from "./components/Filter";
// import Task from "./components/Task";
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      tasks: [],
      filterStatus: ''
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

  modifyTask = (i, description, status) => {
    const clonedTasks = [...this.state.tasks]
    clonedTasks[i].description = description
    clonedTasks[i].status = status
    this.setState({
      tasks: clonedTasks,
    })

    console.log("task modified")
  }

  filterTasks = (status) => {

    this.setState({filterStatus : status})
    console.log(status)
  }


  render() {
    const filteredTasks = this.state.tasks.filter(task => {
      return task.status === this.state.filterStatus || this.state.filterStatus === ''
    })
    console.log(this)

    return (
      <div>
        <Form taskAdd={this.addTask} />
        <Filter filterTasksFn = {this.filterTasks}/>
        <List
          tasks={filteredTasks}
          delete={this.deleteTask}
          modifyFunction={this.modifyTask}
          changeStatusFn = {this.handleChangeStatus}
          changeInput = {this.handleTaskDescriptionChange}
          modifyDescription = {this.descriptionChange}
          tasksTitle = {this.state.filterStatus}
        />
      </div>
    );
  }
}

export default App;
