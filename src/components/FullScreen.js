import React from 'react'
import '../styles/FullScreen.css'
import { ReactComponent as Toggle } from '../graphics/fullscreen.svg'

export default class FullScreen extends React.Component {
  constructor(props) {
    super(props)

    this.toggleSizing = this.toggleSizing.bind(this)
  }

  toggleSizing() {
    this.props.onSizeChange(!this.props.sizing)
  }
  
  render() {
    return(
      <button
        className={this.props.toggle}
        type="button"
        onClick={this.toggleSizing}
      >
        <Toggle />
      </button>
    )
  }
}