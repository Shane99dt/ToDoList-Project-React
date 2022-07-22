import React, { Component } from "react";

class Task extends Component {
  constructor(){
    super();

    this.state = {
      modify : false,
    };
  }

  // modifyTask = (bool) => {
  //   // const clonedTasks = [...this.state.tasks]
  //   this.setState({
  //     modify : bool
  //   })

  //   console.log("task modified")
  // }

  render() {
    return (
      <>
        <div className="flex flex-row my-1 justify-between w-3/4 gap-2 border">
          {/* {this.props.modifyFunction &&
            <select>
              <option value="to do" selected>To do</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>
          } */}
          {this.state.modify === false ? (
            <>
              <p className="w-3/5 pl-2 py-2">{this.props.item.description}</p>
              <div>
                <button className="p-2 " onClick={() => this.props.modify(true)}>Mod</button>
                <button className="p-2" onClick={() => this.props.delete(this.props.index)}>Sup</button>
              </div>
            </>
          ) : (
            <>
              <p>something</p>
              <button onClick={() => this.props.modify(false)}>Valid</button>
            </>
          )}
        </div>
      </>
    );
  }
}

export default Task;
