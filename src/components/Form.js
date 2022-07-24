import { hasFormSubmit } from "@testing-library/user-event/dist/utils";
import React from "react";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      task: "",
    };
  }

  handleTaskDescriptionChange = (e) => {
    this.setState(
      {task: e.target.value,}
    );
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.task){
      this.props.taskAdd(this.state.task);
    }else{
      alert("Task cannot be empty")
    }

    // reset the value
    this.setState({ task: "" });
  };

  render() {
    // console.log(this);
    return (
      <>
        <h1 className="text-center text-5xl mt-4">To Do List</h1>
        <form
          className="flex items-center justify-center px-4 py-3 rounded-full"
          onSubmit={this.handleSubmit}
        >
          <input
            type="text"
            onChange={this.handleTaskDescriptionChange}
            value={this.state.task}
            className="border border-solid border-2 border-sky rounded px-2 py-1 font-medium"
          />
          <button className="ml-2 py-1 px-4 rounded-md border border-solid border-2 hover:bg-gray-200 font-bold " type="submit">Add task</button>
        </form>
      </>
    );
  }
}
export default Form;
