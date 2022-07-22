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

  // handleSubmit = (e) => {
  //   console.log(e + );
  // };

  render() {
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
          />
          <button type="submit">Add task</button>
        </form>
      </>
    );
  }
}

export default Form;
