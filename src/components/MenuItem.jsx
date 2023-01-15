import React from "react"

export default function MenuItem(props) {
  function handleClick(e, mode) {
    e.preventDefault()
    props.changeDisplay(mode)
  }
  return (
    <button
      type="button"
      className={`btn btn-${props.theme} ${props.active && "active"}`}
      onClick={e => handleClick(e, props.displayModeOption)}
    >
      <span className="btn-inline-counter">{props.counter}</span>
      {props.text}
    </button>
  )
}
