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
      {
        task: e.target.value,
      },
      () => {
        console.log(this.state.task);
      }
    );
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.taskAdd(this.state.task);

    // reset the value
    this.setState({ task: "" });
  };

  render() {
    // console.log(this);
    return (
      <>
        <form
          className="flex items-center justify-center px-4 py-3 rounded-full"
          onSubmit={this.handleSubmit}
        >
          <input
            type="text"
            onChange={this.handleTaskDescriptionChange}
            value={this.state.task}
            className="border"
          />
          <button className="ml-2" type="submit">Add task</button>
        </form>
      </>
    );
  }
}

export default Form;
