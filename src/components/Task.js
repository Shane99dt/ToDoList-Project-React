import React, { Component } from "react";

class Task extends Component {

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
          <p className="w-3/5 pl-2 py-2">{this.props.item.description}</p>
          <div>
            <button className="p-2 ">Mod</button>
            <button className="p-2" onClick={() => this.props.delete(this.props.index)}>Sup</button>
          </div>
        </div>
      </>
    );
  }
}

export default Task;
