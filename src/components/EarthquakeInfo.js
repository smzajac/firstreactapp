import React from "react";
import moment from "moment";
import earthquakes from "../data/earthquakes";

export default class EarthquakeInfo extends React.Component{
  render(){
    return (
      <div className="earthquake-title">
        <p>This is a list of 8 Earthquakes occurring on the morning of July 14th across the United States.</p>
      </div>
    )
  }
}
