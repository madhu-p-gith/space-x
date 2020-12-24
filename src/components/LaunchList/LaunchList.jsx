import React, { Component } from "react";
import Launch from "../Launch/Launch";
import "./styles.css";
import axios from "axios"; //node modules
class LaunchList extends Component {
  state = {
    launches: [],
  };
  componentDidMount = () => {
    this.getLaunches();
  };
  getLaunches = () => {
    axios
      .get("https://api.spacexdata.com/v3/launches")
      .then((response) => {
        this.setState({
          launches: response.data,
        });
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  launchList = () => {
    const launchListComponents = this.state.launches.map((launch1) => {
      return (
        <Launch
          banner={launch1.links.flicker_images[0]}
          title={launch1.mission_name}
          launchDate={launch1.launch_date_local}
          description={launch1.details}
          launch={launch1.mission_name}
        />
      );
    });
    return launchListComponents;
  };
  render() {
    return <div className="launch-list">{this.launchList()}</div>;
  }
}

export default LaunchList;
