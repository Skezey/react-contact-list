import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class ContactForm extends Component {
  state = { firstName: "", phone: "" }

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.add(this.state)
    this.setState({ firstName: '', phone: '' })
  }

  render() {
    const { firstName, phone } = this.state
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          fluid
          label="First Name"
          placeholder="First name here"
          name='firstName'
          value={firstName}
          onChange={this.handleChange}
        />
        <Form.Input
          fluid
          label="Phone"
          placeholder="phone here"
          name='phone'
          value={phone}
          onChange={this.handleChange}
        />
        <Form.Button>Submit</Form.Button>
      </Form>
    )
  }
}

export default ContactForm;
