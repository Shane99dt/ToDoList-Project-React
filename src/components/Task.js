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





  render() {
    return (
      <>
        <div className="flex flex-row my-1 justify-between w-3/4 gap-2 border">
          {this.state.modify === false ? (
            <>
              <p className="w-3/5 pl-2 py-2">{this.props.item.description}</p>
              <div>
                <button className="p-2 " onClick={() => this.modifyTaskShow(true)}>Mod</button>
                {/* <button className="p-2 " onClick={() => {this.props.modify(); this.modifyTaskShow(true)}}>Mod</button> */}
                <button className="p-2" onClick={() => this.props.delete(this.props.index)}>Sup</button>
              </div>
            </>
          ) : (
            <>
              <form
                className="flex flex-row my-1 justify-center w-3/4 gap-2 border"
                // onSubmit={this.taskModifySubmit}
                >
                {/* <select onChange={this.props.changeStatus(this.props.item,this.props.index)}> */}
                <select>
                  <option value="to do" selected>To do</option>
                  <option value="doing">Doing</option>
                  <option value="done">Done</option>
                </select>
                <input
                  type="text"
                  onChange={this.props.modifyDescription}
                  value={this.props.item.description}
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
