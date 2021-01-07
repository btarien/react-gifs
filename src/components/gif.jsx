import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    this.props.selectFxn(this.props.id);
  };

  render() {
    const src = `https://media.giphy.com/media/${this.props.id}/giphy.gif`
    return (
      <img src={src} 
          className={this.props.selected ? "gif gif-selected" : "gif"}
          onClick={this.handleClick} />
    );
  }
}

export default Gif;
