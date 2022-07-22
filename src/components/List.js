import React, { Component } from "react";
import Tasks from "./Tasks";

class List extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section className="flex flex-col items-center border">
        {this.props.tasks.map((item, i) => (
          <div className="flex flex-row my-1 justify-between w-3/4 gap-2 border">
            {/* {this.props.modifyFunction &&
              <select>
                <option value="to do" selected>To do</option>
                <option value="doing">Doing</option>
                <option value="done">Done</option>
              </select>
            } */}
            <p className="w-3/5 pl-2 py-2">{item.description}</p>
            <div>
              <button className="p-2 ">Mod</button>
              <button className="p-2" onClick={() => this.props.delete(i)}>
                Sup
              </button>
            </div>
          </div>
        ))}
      </section>
      // <>
      //   {this.props.tasks.map((task) => {
      //     console.log(task);
      //   })}
      // </>
    );
  }
}

export default List;
