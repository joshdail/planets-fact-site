import React from "react"
import iconSourceUrl from "../assets/icon-source.svg"

export default function PlanetOverview(props) {
  function loadText() {
    if (props.displayMode === 3) {
      return props.data.geology.content
    } else if (props.displayMode === 2) {
      return props.data.structure.content
    } else {
      return props.data.overview.content
    }
  }

  function loadUrl() {
    if (props.displayMode === 3) {
      return props.data.geology.source
    } else if (props.displayMode === 2) {
      return props.data.structure.source
    } else {
      return props.data.overview.source
    }
  }

  return (
    <div className="planet-overview">
      <h1>{props.data.name}</h1>
      <p>{loadText()}</p>
      <p className="source-link">
        <span className="opacity-reduced">
          Source&nbsp;:&nbsp;
          <a target="_blank" href={loadUrl()}>
            Wikipedia
          </a>
        </span>
        &nbsp;
        <a target="_blank" href={loadUrl()}>
          <img src={iconSourceUrl} alt="Go to Wikipedia page" />
        </a>
      </p>
    </div>
  )
}
