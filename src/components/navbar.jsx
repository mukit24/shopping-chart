import React, { Component } from "react";
class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-light bg-light">
        <span class="navbar-brand mb-0 h1">Total Products <span className="badge badge-secondary">{this.props.totalProduct}</span></span>
      </nav>
    );
  }
}

export default Navbar;
