import React from 'react';
import HornedBeast from './HornedBeast.js';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';

class Main extends React.Component {
  render() {
    return (
      <>
        <Row>
          {this.props.allBeasts.map((beast, idx) => (
            <HornedBeast
              key={idx}
              title={beast.title}
              imageUrl={beast.image_url}
              description={beast.description}
              handlesShow={this.props.handlesShow}
            />
          ))}
        </Row>
      </>
    )
  }
}
  <>
  <Form.Group className="mb-3">
    <Form.Label>Disabled input</Form.Label>
    <Form.Control placeholder="Disabled input" disabled />
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>Disabled select menu</Form.Label>
    <Form.Select disabled>
      <option>Disabled select</option>
    </Form.Select>
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Check type="checkbox" label="Can't check this" disabled />
  </Form.Group>
</>

export default Main;
