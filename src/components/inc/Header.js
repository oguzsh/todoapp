import React, { Component } from "react";
import { PageHeader } from "react-bootstrap";

class Header extends Component {
  render() {
    return (
      <PageHeader>
        <span role="img">🌎</span> Todo App <span role="img">🌎</span>
      </PageHeader>
    );
  }
}

export default Header;
