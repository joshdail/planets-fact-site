import React from "react"

export default function PlanetFacts(props) {
  return (
    <div className="planet-facts-container">
      <div className="info-box">
        <h4 className="info-box-title">Rotation Time</h4>
        <h2>{props.data.rotation}</h2>
      </div>
      <div className="info-box">
        <h4 className="info-box-title">Revolution Time</h4>
        <h2>{props.data.revolution}</h2>
      </div>
      <div className="info-box">
        <h4 className="info-box-title">Radius</h4>
        <h2>{props.data.radius}</h2>
      </div>
      <div className="info-box">
        <h4 className="info-box-title">Average Temp.</h4>
        <h2>{props.data.temperature}</h2>
      </div>
    </div>
  )
}
