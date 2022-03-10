import React from 'react';
import HornedBeast from './HornedBeast.js';
import Row from 'react-bootstrap/Row';

class Main extends React.Component {
  render() {
    return (
      <>
        <Row>
          {this.allBeasts.map((beast, idx) => (
            <HornedBeast
              key={idx}
              title={beast.title}
              imageUrl={beast.image_url}
              description={beast.description}
            />
          ))}
        </Row>
      </>
    )
  }
}

export default Main;
