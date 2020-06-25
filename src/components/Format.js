import React from 'react'
import FullScreen from './FullScreen.js'

// pass state of notepad as props and format it
export default class Format extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fullScreen: this.props.sizing
    }

    this.handleSizeChange = this.handleSizeChange.bind(this)
  }

  handleSizeChange(size) {
    this.setState({
      fullScreen: size
    })
    this.props.onSizeToggle(this.state.fullScreen)
  }

  render() {
    return(
      <div className={this.state.fullScreen ? "Control-full" : "Control-display"}>
        <textarea readOnly
          className={this.state.fullScreen ? "Notes-full Display-color" : "Notes-display"}
          value={this.props.notes}
        />
        <FullScreen
          sizing={this.state.fullScreen}
          onSizeChange={this.handleSizeChange}
          toggle={"Toggle2 " + (this.state.fullScreen ? "Toggle2-full" : null)}
        />
      </div>
    )
  }
}