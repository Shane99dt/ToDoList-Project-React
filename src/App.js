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

  render() {
    console.log(this.state.tasks);
    return (
      <div>
        <Form taskAdd={this.addTask} />
        <section className="flex flex-col items-center border">
          {this.state.tasks.map((item) => (
            <List
              task = {item.description}
            />
          ))}
        </section>
        {/* <List task={this.state.tasks} /> */}
      </div>
    );
  }
}

export default App;
