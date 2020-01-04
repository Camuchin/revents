import React, { Component, Fragment } from "react";

import EventDashboard from "../../features/event/eventDashboard/EventDashboard";
import NavBAr from "../../features/nav/navBAr/NavBAr";
import { Container } from "semantic-ui-react";


class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBAr />
        <Container className="main">
          <EventDashboard />
        </Container>
      </Fragment>
    );
  }
}

export default App;
