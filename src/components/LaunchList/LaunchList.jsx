import React, { Component } from "react";
import Launch from "../Launch/Launch";
import "./styles.css";
class LaunchList extends Component {
  render() {
    return (
      <div className="launch-list">
        <Launch
          banner={
            "https://timesofindia.indiatimes.com/thumb/msid-66945579,imgsize-751944,width-400,resizemode-4/66945579.jpg"
          }
          title={"Folcon sat"}
          launchDate={"2002-03-12"}
          description={
            "Hi thkjdskjfkdsjhfkl dhgkhfgflkj ghdfkjhgdfj fdlkjhvgkjdfhgfk jhfrjkdh hfd "
          }
          launch="focono"
        />
        <Launch
          banner={
            "https://timesofindia.indiatimes.com/thumb/msid-66945579,imgsize-751944,width-400,resizemode-4/66945579.jpg"
          }
          title={"Folcon sat"}
          launchDate={"2002-03-12"}
          description={
            "Hi thkjdskjfkdsjhfkl dhgkhfgflkj ghdfkjhgdfj fdlkjhvgkjdfhgfk jhfrjkdh hfd "
          }
          launch="focono"
        />
      </div>
    );
  }
}

export default LaunchList;
