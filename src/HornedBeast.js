import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col'

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
      <Col>
      <Card style={{ width: '18rem' }}>
           <Card.Body>
        <Card.Title>{this.props.title}</Card.Title>
          <Card.Img
            src={this.props.imageUrl}
            alt={this.props.title}
            title={this.props.description}
            onClick={this.favoriteImages}
             />
          <Card.Text>{this.props.description}</Card.Text>
          <Card.Text> 💛 {this.state.votesOfImages}</Card.Text>
        </Card.Body>
      </Card>
      </Col>

    )
  }
}

export default HornedBeast;
