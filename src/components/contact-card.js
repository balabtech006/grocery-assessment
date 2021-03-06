import React from 'react';
import { Card, Button, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export default function ContactCard({contact, deleteContact}) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>
          <Icon name='shopping bag'/> {contact.name.first}
        </Card.Header>
        <Card.Description>
          <p><Icon name='food'/> {contact.shopName}</p>
          <p><Icon name='tag'/> {contact.status}</p>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Link to={`/contacts/edit/${contact._id}`} className="ui basic button green"><p><Icon name='edit'/></p> Edit</Link>
          <Button basic color="red" onClick={() => deleteContact(contact._id)} ><p><Icon name='delete'/></p> Delete</Button>
        </div>
      </Card.Content>
    </Card>
  )
}

ContactCard.propTypes = {
  contact: React.PropTypes.object.isRequired
}
