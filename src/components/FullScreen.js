import React from 'react'
import '../styles/FullScreen.css'

export default class FullScreen extends React.Component {
  constructor(props) {
    super(props)
  
    // this.handleSizing = this.handleSizing.bind(this)
  }

  // handleSizing(e) {
    
  // }
  
  render() {
    return(
      <button
        className="Toggle"
        type="button"
        // onClick={handleSizing}
      >X</button>
    )
  }
}