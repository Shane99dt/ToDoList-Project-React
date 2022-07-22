import React from "react";
import Form from "./components/Form";

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
        <Form />
      </div>
    );
  }
}

export default App;
