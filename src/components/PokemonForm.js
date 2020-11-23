import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={event => this.props.handleSubmit(event)}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={event => this.props.handleName(event)}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={event => this.props.handleHp(event)}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" onChange={event => this.props.handleFront(event)}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" onChange={event => this.props.handleBack(event)}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
