import React from 'react';

class HornedBeast extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        {/* <img>{this.props.src.alt}</img> */}
        <p>{this.props.description}</p>
      </div>
    )
  }
}

export default HornedBeast;