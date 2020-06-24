import React from 'react'
import '../styles/FullScreen.css'
import { ReactComponent as Toggle } from '../graphics/fullscreen.svg'

export default class FullScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fullScreen: this.props.sizing
    }

    this.toggleSizing = this.toggleSizing.bind(this)
  }

  toggleSizing(e) {
    this.setState({
      fullScreen: !this.state.fullScreen
    })
    console.log(this.state.fullScreen)
  }
  
  render() {
    return(
      <button
        className="Toggle"
        type="button"
        onClick={this.toggleSizing}
      >
        <Toggle />
      </button>
    )
  }
}