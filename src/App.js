import React from "react";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      task: "",
      status: "to do",
    };
  }

  render() {
    return (
      <div>
        <p>hello </p>
        <div>
          check check
        </div>
      </div>
    );
  }
}

export default App
