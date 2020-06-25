import React from 'react'
import FullScreen from './FullScreen.js'

export default class Edit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fullScreen: this.props.sizing
    }
  
    this.handleUserNotes = this.handleUserNotes.bind(this)
    this.handleSizeChange = this.handleSizeChange.bind(this)
  }

  handleUserNotes(e) {
    this.props.onNoteChange(e.target.value)
  }

  handleSizeChange(size) {
    this.setState({
      fullScreen: size
    })
    this.props.onSizeToggle(this.state.fullScreen)
  }

  render() {
    return(
      <div className={this.state.fullScreen ? "Control-full" : "Control-edit"}>
        <textarea
          className={this.state.fullScreen ? "Notes-full" : "Notes-edit"}
          type="text"
          onChange={this.handleUserNotes}
          value={this.props.notes}        
        />
        <FullScreen 
          sizing={this.state.fullScreen}
          onSizeChange={this.handleSizeChange}
          toggle={"Toggle1 " + (this.state.fullScreen ? "Toggle1-full" : null)}
        />
      </div>
    )
  }
}