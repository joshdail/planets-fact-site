import React, { useState } from "react"
import PlanetImage from "./PlanetImage"
import PlanetOverview from "./PlanetOverview"
import DisplayMenu from "./DisplayMenu"
import PlanetFacts from "./PlanetFacts"

export default function PlanetPage(props) {
  const [displayMode, setDisplayMode] = useState(1)

  function changeDisplay(mode) {
    setDisplayMode(mode)
  }

  return (
    <main id="main">
      <div className="primary-content-container">
        <PlanetImage theme={props.theme} displayMode={displayMode} />
        <div className="sidebar-container">
          <PlanetOverview data={props.data} displayMode={displayMode} />
          <DisplayMenu
            displayMode={displayMode}
            theme={props.theme}
            changeDisplay={changeDisplay}
          />
        </div>
      </div>
      <PlanetFacts data={props.data} />
      <div class="attribution">
        Challenge by&nbsp;
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/joshdail">Josh Dail</a>.
      </div>
    </main>
  )
}
