import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { withRouter } from "react-router";
import "./styles.css";
import { Zoom } from "react-slideshow-image";
const zoomOutProperties = {
  duration: 1000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true,
};
export class LaunchView extends Component {
  state = {
    launch: {
      links: {
        flickr_images: [],
      },
    },
  };
  componentDidMount = () => {
    const flightNo = this.props.match.params.flight_number;
    console.log(flightNo);
    this.getLaunch(flightNo);
  };
  getLaunch = (flightNo) => {
    axios
      .get("https://api.spacexdata.com/v3/launches/" + flightNo)
      .then((response) => {
        this.setState({
          launch: response.data,
        });
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  launchAttribute = (title, key) => {
    const value = this.state.launch[key];

    return (
      <div className="attribute">
        <h1>{title}</h1>
        <h1>{value}</h1>
      </div>
    );
  };
  render() {
    const hasImages = this.state.launch.links.flickr_images.length >= 0;
    return (
      <div className="launch_view">
        {this.launchAttribute("Mission Name", "mission_name")}
        {this.launchAttribute("Flight Number", "flight_number")}
        {this.launchAttribute("Launch Date", "launch_date_local")}
        {hasImages && (
          <Zoom {...zoomOutProperties}>
            {this.state.launch.links.flickr_images.map((each, index) => (
              <img
                key={index}
                alt="Flicker Image"
                style={{ width: "100%" }}
                src={each}
              />
            ))}
          </Zoom>
        )}
        {this.launchAttribute("Details", "details")}
        {/* <div>
          <h1>Flight Name</h1>
          <h1>{value.flight_name}</h1>
        </div>
        <div>
          <h1>Laubnch Name</h1>
          <h1>{value.launch_date_local}</h1>
        </div> */}
      </div>
    );
  }
}
export default withRouter(LaunchView);
