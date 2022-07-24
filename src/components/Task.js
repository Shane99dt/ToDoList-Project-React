import React, { Component } from "react";

class Task extends Component {
  constructor(){
    super();

    this.state = {
      modify : false,
      modifyIndex : null,
      editDescription : '',
      setStatus: ''
    };
  }

  modifyTaskShow = (bool) => {
    this.setState({
      modify : bool
    })
  }

  setModifyIndex = (index) => {
    this.setState({
      modifyIndex: index,
      editDescription: this.props.tasksList[index].description,
      editStatus: this.props.tasksList[index].status
    })
  }

  changeTaskDescription = (e) => {
    this.setState({editDescription : e.target.value})
  }

  changeStatus = (e) => {
    this.setState({setStatus : e.target.value})
  }

  handleSubmitModified = (e) => {
    e.preventDefault()

    this.props.modifyTask(
      this.state.modifyIndex,
      this.state.editDescription,
      this.state.setStatus
    )

    console.log(this.state)

    this.reset()
  }

  reset = () => {
    this.setState({
      modifyIndex : null,
      editDescription: '',
      setStatus: ''
    })
  }


  render() {
    return (
      <>
        <div className="flex flex-row my-1 justify-between w-3/4 gap-2 border rounded pl-2">
          {this.state.modifyIndex !== this.props.index ? (
            <>
              <p className="w-3/5 pl-2 py-2 px-4 font-medium rounded grow">{this.props.item.description}</p>
              <div>
                <button className="p-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" onClick={() => this.setModifyIndex(this.props.index)}>Edit</button>
                <button className="p-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4" onClick={() => this.props.delete(this.props.index)}>Remove</button>
              </div>
            </>
          ) : (
            <>
              <form
                className="flex flex-row my-1 justify-center w-full gap-2"
                onSubmit={this.handleSubmitModified}>
                <select onChange={this.changeStatus} defaultValue="to do" className="rounded px-1 font-medium">
                  <option className="font-medium" value="to do">To do</option>
                  <option className="font-medium" value="doing">Doing</option>
                  <option className="font-medium" value="done">Done</option>
                </select>
                <input
                  type="text"
                  onChange={this.changeTaskDescription}
                  value={this.state.editDescription}
                  className="border grow border-solid border-2 border-sky rounded px-2 py-1 font-medium"
                />
                <div>
                  <button
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
                    type="submit"
                    >
                      Valid
                  </button>
                  <button onClick={this.reset} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4">
                    Cancel
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </>
    );
  }
}

export default Task;
