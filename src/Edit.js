import React from 'react'

// take state of notepad and format it
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
      <textarea
        className="Notes-edit"
        type="text"
        onChange={this.handleUserNotes}
        value={this.props.notes}        
      />
    )
  }
}