import React from "react"
import iconHamburgerUrl from "../assets/icon-hamburger.svg"
import iconChevronUrl from "../assets/icon-chevron.svg"

export default function Header(props) {
  function generateListItems() {
    return props.planetNames.map((planetName, index) => {
      return (
        <li
          tabindex={0}
          data-index={index}
          className={`li-${props.theme}`}
          onClick={e => handleClick(e, index)}
        >
          {planetName}
        </li>
      )
    })
  }

  function generateListButtons() {
    return props.planetNames.map((planetName, index) => {
      return (
        <li
          data-index={index}
          className={`li-mobile li-mobile-${planetName}`}
          onClick={e => handleClick(e, index)}
        >
          <span className={`span-mobile span-mobile-${planetName}`}>
            {planetName}
          </span>
          <img className="img-chevron" alt="" src={iconChevronUrl} />
        </li>
      )
    })
  }

  function handleClick(e, index) {
    e.preventDefault()
    document.querySelector("nav").classList.remove("active")
    document.querySelector("main").classList.remove("hidden")
    props.loadPlanetPage(index)
  }

  function handleNavToggle(e) {
    e.preventDefault()
    e.target.blur()
    e.target.parentNode.blur()
    document.querySelector("nav").classList.toggle("active")
    document.querySelector("main").classList.toggle("hidden")
  }

  return (
    <header>
      <a href="#main" className={`skip-link bg-${props.theme}`}>
        Skip to main content
      </a>
      <p className="header-title">The Planets</p>
      <nav>
        <ul className="nav-list">
          {props.isMobile ? generateListButtons() : generateListItems()}
        </ul>
      </nav>
      <button
        type="button"
        aria-label="toggle nav bar"
        className="nav-toggle"
        onClick={e => {
          handleNavToggle(e)
        }}
      >
        <img src={iconHamburgerUrl} alt="toggle nav bar" />
      </button>
    </header>
  )
}
