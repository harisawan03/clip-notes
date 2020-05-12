import React from 'react'
import './Notepad.css'

export default class Notepad extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userNotes: ''
    }

    this.handleUserNotes = this.handleUserNotes.bind(this)
  }

  handleUserNotes(e) {
    this.setState ({
      userNotes: e.target.value
    })
  }

  render() {
    return(
      <div className="Notepad">
        <textarea
          className="Notes-edit"
          type="text"
          onChange={this.handleUserNotes}
          value={this.state.userNotes}        
        />
        <textarea readonly
          className="Notes-display"
          value={this.state.userNotes}
        />
      </div>
    )
  }
}