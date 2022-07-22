import React from "react";

class Form extends React.Component {
  constructor() {
    super();
    
  }
  render() {
    return (
      <>
        <form
          className="flex items-center justify-center px-4 py-3 rounded-full"
          onSubmit={this.props.addTask}
        >
          <input
            type="text"
            onSubmit={this.props.submit}
            onChange={this.props.change}
          />
          <button type="submit">Add task</button>
        </form>
      </>
    );
  }
}

export default Form;
