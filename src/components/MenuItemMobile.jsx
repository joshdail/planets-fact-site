import React from "react"

export default function MenuItemMobile(props) {
  function handleClick(e, mode) {
    e.preventDefault()
    props.changeDisplay(Number(mode))
  }
  return (
    <li
      tabIndex={0}
      className={`li-display-mobile li-${props.theme} ${
        props.active && "active"
      }`}
      onClick={e => handleClick(e, props.displayModeOption)}
    >
      {props.text}
    </li>
  )
}
