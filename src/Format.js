import React from 'react'

// take state of notepad and format it
export default class Format extends React.Component {
  constructor(props) {
    super(props)

    this.handleEnter = this.handleEnter.bind(this)
  }

  // can't listen for key press since copy/paste is important
  // use .replace()
  handleEnter(e) {
    e.target.replace(/(?:\r\n|\r|\n)/g, '<br>')
  }


  render() {
    return(  
      <p 
        className="Notes-display"
        onChange={this.handleEnter}
      >
        {this.props.notes}
      </p>
    )
  }
}