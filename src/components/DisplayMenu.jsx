import React from "react"

export default function DisplayMenu(props) {
  function handleClick(e, mode) {
    e.preventDefault()
    props.changeDisplay(mode)
  }
  return (
    <div className="display-menu">
      <button
        type="button"
        className={`btn btn-${props.theme} ${
          props.displayMode === 1 && "active"
        }`}
        onClick={e => handleClick(e, 1)}
      >
        <span className="btn-inline-counter">01</span>Overview
      </button>
      <button
        type="button"
        className={`btn btn-${props.theme} ${
          props.displayMode === 2 && "active"
        }`}
        onClick={e => handleClick(e, 2)}
      >
        <span className="btn-inline-counter">02</span>Internal Structure
      </button>
      <button
        type="button"
        className={`btn btn-${props.theme} ${
          props.displayMode === 3 && "active"
        }`}
        onClick={e => handleClick(e, 3)}
      >
        <span className="btn-inline-counter">03</span>Surface Geology
      </button>
    </div>
  )
}
