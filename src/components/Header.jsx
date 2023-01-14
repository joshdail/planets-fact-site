import React from "react"

export default function Header(props) {
  function generateListItems() {
    return props.planetNames.map((planetName, index) => {
      return (
        <li
          data-index={index}
          className={`li-${props.theme}`}
          onClick={e => handleClick(e, index)}
        >
          {planetName}
        </li>
      )
    })
  }

  function handleClick(e, index) {
    e.preventDefault()
    props.loadPlanetPage(index)
  }

  return (
    <header>
      <a href="#main" className={`skip-link bg-${props.theme}`}>
        Skip to main content
      </a>
      <p className="header-title">The Planets</p>
      <nav>
        <ul className="nav-list">{generateListItems()}</ul>
      </nav>
    </header>
  )
}
