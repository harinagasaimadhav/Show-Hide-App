// Write your code here

import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {firstNameDisplayed: false, lastNameDisplayed: false}

  firstName = () => {
    const {firstNameDisplayed} = this.state
    this.setState({firstNameDisplayed: !firstNameDisplayed})
  }

  lastName = () => {
    const {lastNameDisplayed} = this.state
    this.setState({lastNameDisplayed: !lastNameDisplayed})
  }

  render() {
    const {firstNameDisplayed, lastNameDisplayed} = this.state

    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="title">Show/Hide</h1>
          <div className="names-container">
            <div className="name-container">
              <button onClick={this.firstName} type="button" className="button">
                Show/Hide Firstname
              </button>
              {firstNameDisplayed ? <p className="name">Joe</p> : null}
            </div>
            <div className="name-container">
              <button onClick={this.lastName} type="button" className="button">
                Show/Hide Lastname
              </button>
              {lastNameDisplayed ? <p className="name">Jonas</p> : null}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
