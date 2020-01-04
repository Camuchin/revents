import React, { Component } from "react";
import { Segment, Item, Icon, List, Button } from "semantic-ui-react";
import EventListAttenee from "./EventListAttenee";

class EventListItem extends Component {

  render() {
    const {event}=this.props
    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item.Image size="tiny" circular src={event.hostPhotoURL}/>
            <Item.Content>
              <Item.Header as="a">{event.title}</Item.Header>
              <Item.Description>
                Hosted by <a>{event.hostedBy}</a>
              </Item.Description>
            </Item.Content>
          </Item.Group>
        </Segment>
        <Segment>
          <span>
            <Icon name="clock" /> {event.date} |
            <Icon name="marker" /> {event.venue}
          </span>
        </Segment>
        <Segment secondary>
          <List horizontal>
            {event.attendees.map(attendee => (
              <EventListAttenee key={attendee.id} attendee={attendee} />
            ))}
          </List>
        </Segment>
        <Segment clearing>
          <Button as="a" color="teal" floated="right" content="View" />
            <span>{event.description}</span>
        </Segment>
      </Segment.Group>
    );
  }
}

export default EventListItem;
