import React from 'react'
import FullScreen from './FullScreen.js'

// pass state of notepad as props and format it
export default class Format extends React.Component {
  render() {
    return(
      <div className="Control-display">
        <textarea readOnly
          className="Notes-display"
          value={this.props.notes}
        />
        <FullScreen />
      </div>
    )
  }
}