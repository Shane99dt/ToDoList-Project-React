import React from "react";

class Form extends React.Component {
  render() {
    return (
      <>
        <form
          className="flex items-center justify-center px-4 py-3 rounded-full"
          onSubmit={this.props.addTask}
        >
          <input type="text" />
          <button type="submit">zdfzvzs</button>
        </form>
      </>
    );
  }
}

export default Form;
