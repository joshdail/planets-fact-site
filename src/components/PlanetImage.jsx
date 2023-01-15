import React from "react"

export default function PlanetImage(props) {
  const DISPLAY_INTERNAL = 2
  const DISPLAY_GEOLOGY = 3

  return (
    <div className="planet-img-container">
      <img
        key={Math.random()}
        className="planet-img"
        src={
          props.displayMode === DISPLAY_INTERNAL
            ? `./img/planet-${props.theme}-internal.svg`
            : `./img/planet-${props.theme}.svg`
        }
        alt={
          props.displayMode === DISPLAY_INTERNAL
            ? `Internal structure of planet ${props.theme}`
            : `Planet ${props.theme}`
        }
      />
      {props.displayMode === DISPLAY_GEOLOGY && (
        <img
          className="geology-img"
          src={`./img/geology-${props.theme}.png`}
          alt={`Geology of planet ${props.theme}`}
        />
      )}
    </div>
  )
}
