import React from 'react'
import FullScreen from './FullScreen.js'

// pass state of notepad as props and format it
export default class Format extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fullScreen: false
    }
  }

  render() {
    return(
      <div className="Control-display">
        <textarea readOnly
          className="Notes-display"
          value={this.props.notes}
        />
        <FullScreen sizing={this.state.fullScreen} />
      </div>
    )
  }
}