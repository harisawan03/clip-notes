import React from 'react'
import '../styles/Notepad.css'
import Format from './Format.js'
import Edit from './Edit.js'

export default class Notepad extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userNotes: ''
    }

    this.handleNoteChange = this.handleNoteChange.bind(this)
  }

  handleNoteChange(notes) {
    this.setState({
      userNotes: notes
    })
  }

  render() {
    return(
      <div className="Notepad">
        <Edit 
          notes={this.state.userNotes}
          onNoteChange={this.handleNoteChange}
        />
        <Format 
          notes={this.state.userNotes}
        />
      </div>
    )
  }
}