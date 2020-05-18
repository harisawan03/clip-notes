import React from 'react'

// take state of notepad and format it
export default class Format extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(  
      <textarea readOnly
        className="Notes-display"
        value={this.props.notes}
      />
    )
  }
}