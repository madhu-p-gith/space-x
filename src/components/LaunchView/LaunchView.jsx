import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class LaunchView extends Component {
  render() {
    return (
      <Link to="/launch_view">
        <div>Launches View</div>
      </Link>
    );
  }
}
