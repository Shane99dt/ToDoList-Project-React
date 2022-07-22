import React, { Component } from "react";

class Task extends Component {
  constructor(){
    super();

    this.state = {
      modify : false,
    };
  }

  modifyTaskShow = (bool) => {
    this.setState({
      modify : bool
    })
  }

  taskModifySubmit = (e) => {
    e.preventDefault()
    console.log("d")
  }



  render() {
    return (
      <>
        <div className="flex flex-row my-1 justify-between w-3/4 gap-2 border">
          {this.state.modify === false ? (
            <>
              <p className="w-3/5 pl-2 py-2">{this.props.item.description}</p>
              <div>
                <button className="p-2 " onClick={() => {this.props.modify(); this.modifyTaskShow(true)}}>Mod</button>
                <button className="p-2" onClick={() => this.props.delete(this.props.index)}>Sup</button>
              </div>
            </>
          ) : (
            <>
              <form
                className="flex items-center justify-center px-4 py-3 rounded-full"
                onSubmit={this.taskModifySubmit}>
                <select onChange={this.props.changeStatus(this.props.item,this.props.index)}>
                  <option value="to do" selected>To do</option>
                  <option value="doing">Doing</option>
                  <option value="done">Done</option>
                </select>
                <input
                  type="text"
                  onChange={this.props.changeInputFn(this.props.item,this.props.index)}
                  value={this.props.item.description}
                  className="border"
                />
                <button
                  className="ml-2"
                  type="submit"
                  onClick={() => this.modifyTaskShow(false)}
                  >
                    Valid
                </button>
              </form>

              {/* <button onClick={() => this.modifyTaskShow(false)}>Valid</button> */}
            </>
          )}
        </div>
      </>
    );
  }
}

export default Task;
