import React from 'react';

// take state of notepad and format it
export default class Format extends React.Component {
  constructor(props) {
    super(props);

    this.handleEnter = this.handleEnter.bind(this);
  }

  handleEnter(e) {
    //let enter = e.target.value;
    if (e.key === 13) {
      let newLine = document.createElement('br');
      let position = document.getElementsByTagName('p')[0];
      position.appendChild(newLine);
    }
    //this.props.onChange(enter);
  }
  
  render() {
    return(
    <p onChange={this.handleEnter}>{this.props.notes}<br></br></p>
    );
  }
}