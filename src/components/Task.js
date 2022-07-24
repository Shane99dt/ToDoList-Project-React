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
      this.state.setModifyIndex,
      this.state.changeTaskDescription,
      this.state.changeStatus
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
        <div className="flex flex-row my-1 justify-between w-3/4 gap-2 border">
          {this.state.modify === false ? (
            <>
              <p className="w-3/5 pl-2 py-2">{this.props.item.description}</p>
              <div>
                <button className="p-2 " onClick={() => {this.modifyTaskShow(true); this.setModifyIndex(this.props.index)}}>Mod</button>
                <button className="p-2" onClick={() => this.props.delete(this.props.index)}>Sup</button>
              </div>
            </>
          ) : (
            <>
              <form
                className="flex flex-row my-1 justify-center w-3/4 gap-2 border"
                onSubmit={this.handleSubmitModified}>
                <select onChange={this.changeStatus} defaultValue="to do">
                  <option value="to do">To do</option>
                  <option value="doing">Doing</option>
                  <option value="done">Done</option>
                </select>
                <input
                  type="text"
                  onChange={this.changeTaskDescription}
                  value={this.state.editDescription}
                  className="border grow"
                />
                <button
                  className="mx-2"
                  type="submit"
                  onClick={() => this.modifyTaskShow(false)}
                  >
                    Valid
                </button>
              </form>
            </>
          )}
        </div>
      </>
    );
  }
}

export default Task;
