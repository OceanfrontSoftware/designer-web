import React, { Component } from 'react';
import { Grid, Navbar } from 'react-bootstrap';

class TopNav extends Component {
  render() {
    return (

      <Navbar inverse fixedTop>
        <Grid>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">Permiteer Designer</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
        </Grid>
      </Navbar>
    );
  }
}

export default TopNav;
