import React from 'react'

class Form extends React.Component {
  constructor(){
    super()
    this.state({
      task: ""
    })
  }

  handleTaskDescriptionChange = (e) => {
    // this.setState({
    //   task:
    // })
    console.log(e)
  }

  render() {
		return(
      <>
        <form onSubmit={this.props.formSubmit}>
          <input type="text" onChange={this.handleTaskDescriptionChange}/>
          <button type='submit'>
            <img src="./images/plus.png" alt='Add task'/>
          </button>
        </form>
      </>
		)
	}
}

export default Form;