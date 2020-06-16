import React from 'react'
import FullScreen from './FullScreen.js'

export default class Edit extends React.Component {
  constructor(props) {
    super(props)
  
    this.handleUserNotes = this.handleUserNotes.bind(this)
  }

  handleUserNotes(e) {
    this.props.onNoteChange(e.target.value)
  }

  render() {
    return(
      <div className="Control-edit">
        <textarea
          className="Notes-edit"
          type="text"
          onChange={this.handleUserNotes}
          value={this.props.notes}        
        />
        <FullScreen />
      </div>
    )
  }
}