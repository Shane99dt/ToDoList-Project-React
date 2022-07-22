import React from 'react'

class Form extends React.Component {
	render() {
		return(
      <>
        <form onSubmit={this.props.formSubmit('jsdh')}>
          <input type="text"/>
          <button type='submit'>
            <img src="./images/plus.png" alt='Add task'/>
          </button>
        </form>
      </>
		)
	}
}

export default Form