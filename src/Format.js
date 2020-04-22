import React from 'react';

// take state of notepad and format it
export default class Format extends React.Component {
  constructo(props) {
    super(props);

    this.handleFormatting = this.handleFormatting.bind(this);
  }

  handleFormatting(e) {
    const formatted = e.target.value;
    this.props.handleUserNotes(formatted);
  }
  
  render() {
    return();
  }
}