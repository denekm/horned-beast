import React from 'react';
import Card from 'react-bootstrap/Card'

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      votesOfImages: 0
    }
  }

  favoriteImages = () => {
    this.setState({
      votesOfImages: this.state.votesOfImages + 1
    })
  }
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <img src={this.props.imgUrl} alt={this.props.title} title ={this.props.description}/> 
        <p>{this.props.description}</p>
      </div>
    )
  }
}

export default HornedBeast;
