import React from 'react'
import './Notepad.css'
import Format from './Format'

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
        <Format notes={this.state.userNotes} />
      </div>
    )
  }
}