import React from 'react';
import Form from 'react-bootstrap/Form';

class FilterForm extends React.Component {

  handleChange =(event) => {
    this.props.handleFilterArr(event.target.value);
  }

  render() {
    return (
      <Form>
      <Form.Label>Choose the number of horns you want to see</Form.Label>
      <Form.Select onChange ={this.handleChange}>
        <option>All Beasts</option>
        <option value="">Beasts with one horn</option>
        <option value="2">Beasts with two horns</option>
        <option value="3">Beasts with three horns</option>
        <option value="3">Beasts with many horns</option>
      </Form.Select>
      </Form>
    )

  }
}
export default FilterForm;
