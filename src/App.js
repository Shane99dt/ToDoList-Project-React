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
  deleteTask = (del) => {
    const cloneTask = [...this.state.tasks];

    // cloneTask.filter((de, i) => {
    //   de.pop();
    // });
    // cloneTask.pop();
    this.setState({
      tasks: cloneTask,
    });
    // console.log(this.state.tasks);
  };

  render() {
    console.log(this.state.tasks);
    return (
      <div>
        <Form taskAdd={this.addTask} />

        {this.state.tasks.map((item) => (
          <List task={item.description} delete={() => this.deleteTask(item)} />
        ))}
        {/* <List task={this.state.tasks} /> */}
      </div>
    );
  }
}

export default App;
