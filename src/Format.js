import React from 'react'

// take state of notepad and format it
export default class Format extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      formattedNotes: ''
    }
    this.handleEnter = this.handleEnter.bind(this)
  }

  render() {
    return(  
      null
    )
  }
}