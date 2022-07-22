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
  deleteTask = (del, i) => {
    const cloneTask = [...this.state.tasks];

    if (i !== -1) {
      cloneTask.splice(i, 1);
      this.setState({ people: cloneTask });
    }

    this.setState({
      tasks: cloneTask,
    });
  };
  modify = () => {};

  render() {
    console.log(this.state.tasks);
    return (
      <div>
        <Form taskAdd={this.addTask} />
        <section className="flex flex-col items-center border">
          {this.state.tasks.map((item, i) => (
            <List
              task={item.description}
              delete={() => this.deleteTask(item, i)}
              modify={() => this.modify()}
            />
          ))}
          <Tasks />
        </section>
      </div>
    );
  }
}

export default App;
