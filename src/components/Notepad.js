import React from 'react'
import '../styles/Notepad.css'
import Format from './Format.js'
import Edit from './Edit.js'

export default class Notepad extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userNotes: '',
      fullScreen: {
        edit: false,
        display: false
      }
    }

    this.handleNoteChange = this.handleNoteChange.bind(this)
    this.handleEditToggle = this.handleEditToggle.bind(this)
    this.handleDisplayToggle = this.handleDisplayToggle.bind(this)
  }

  handleNoteChange(notes) {
    this.setState({
      userNotes: notes
    })
  }

  handleEditToggle(size) {
    this.setState({
      fullScreen: {
        edit: size,
        display: this.state.fullScreen.display
      }
    })
    console.log("edit: " + this.state.fullScreen.edit)
  }

  handleDisplayToggle(size) {
    this.setState({
      fullScreen: {
        edit: this.state.fullScreen.edit,
        display: size
      }
    })
    console.log("display: " + this.state.fullScreen.display)
  }

  render() {
    return(
      <div className="Notepad">
        <Edit 
          notes={this.state.userNotes}
          onNoteChange={this.handleNoteChange}
          sizing={this.state.fullScreen.edit}
          onSizeToggle={this.handleEditToggle}
        />
        <Format 
          notes={this.state.userNotes}
          sizing={this.state.fullScreen.display}
          onSizeToggle={this.handleDisplayToggle}
        />
      </div>
    )
  }
}