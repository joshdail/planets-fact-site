import React from "react"
import MenuItem from "./MenuItem"
import MenuItemMobile from "./MenuItemMobile"

export default function DisplayMenu(props) {
  return (
    <div className="display-menu">
      <MenuItem
        active={props.displayMode === 1}
        theme={props.theme}
        displayModeOption={1}
        counter="01"
        text="Overview"
        changeDisplay={props.changeDisplay}
      />
      <MenuItem
        active={props.displayMode === 2}
        theme={props.theme}
        displayModeOption={2}
        counter="02"
        text="Internal Structure"
        changeDisplay={props.changeDisplay}
      />
      <MenuItem
        active={props.displayMode === 3}
        theme={props.theme}
        displayModeOption={3}
        counter="03"
        text="Surface Geology"
        changeDisplay={props.changeDisplay}
      />
    </div>
  )
}
