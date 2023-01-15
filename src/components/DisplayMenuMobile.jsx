import React from "react"
import MenuItemMobile from "./MenuItemMobile"

export default function DisplayMenu(props) {
  return (
    <ul className="display-menu">
      <MenuItemMobile
        active={props.displayMode === 1}
        theme={props.theme}
        displayModeOption={1}
        text="Overview"
        changeDisplay={props.changeDisplay}
      />

      <MenuItemMobile
        active={props.displayMode === 2}
        theme={props.theme}
        displayModeOption={2}
        text="Structure"
        changeDisplay={props.changeDisplay}
      />

      <MenuItemMobile
        active={props.displayMode === 3}
        theme={props.theme}
        displayModeOption={3}
        text="Surface"
        changeDisplay={props.changeDisplay}
      />
    </ul>
  )
}
