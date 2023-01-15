# Frontend Mentor - Planets fact site solution

This is a solution to the [Planets fact site challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/planets-fact-site-gazqN8w_f). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- View each planet page and toggle between "Overview", "Internal Structure", and "Surface Geology"


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- CSS custom properties
- Flexbox
- Desktop-first workflow
- [React](https://reactjs.org/) - JS library
- [Vite](https://vitejs.dev/)

### What I learned

My solution requires a number of states to be set concurrently when the data is initially loaded and when the user selects certain options (such as selecting a planet's page). I found that React useState cannot be trusted to handle setting state sequentially (i.e., you cannot set a new state, and then use that newly set state to then set another state).

For example, when the json file is initially loaded, the data, itself, the names of the planets in a separate array (for the navbar), the inital planet page, and the color theme tied to the planet all need to be set. However, you cannot set the state of the data and then set the other states from the data. All the properties need to be set from the json file itself.

```
useEffect(() => {
    fetch("/data.json", { mode: "no-cors" })
      .then(res => res.json())
      .then(jsonArray => {
        setData(jsonArray)
        setPlanetNames(jsonArray.map(entry => entry.name.toLowerCase()))
        setSelectedPlanet(jsonArray[0])
        setTheme(jsonArray[0].name.toLowerCase())
      })
  }, [])
```

Another issue I ran into is that React immediately tries to render everything before useEffect finishes loading the data and setting the needed states, and then throws an error because the data is not there. To force React to wait, I added conditionals so that the components that rely on the loaded data (basically the whole page) will not render until the needed states are set.

```
return (
    <>
      {/* Force React to wait for the data before rendering components */}
      {theme && planetNames && selectedPlanet && (
        <Header
          theme={theme}
          planetNames={planetNames}
          loadPlanetPage={loadPlanetPage}
          isMobile={isMobile}
        />
      )}
      {theme && planetNames && selectedPlanet && (
        <PlanetPage theme={theme} data={selectedPlanet} isMobile={isMobile} />
      )}
    </>
  )
}
```




### Continued development

Continuing to improve in understanding of React (learning hooks and also learning where to break code into separate components), increasing accessibility, and improving organization of CSS stylesheets

### Useful resources

- [Daggala](https://www.daggala.com/react-state-not-updating-immediately/) - Blog post that helped me diagnose the issue of React states not setting immediately
- [Dave Ceddia](https://daveceddia.com/react-before-render/) - Blog article that helped me with setting up conditional rendering (preventing React from trying to render components before the data was loaded and set in state)
- [Dev.to blog post](https://dev.to/nicm42/fading-in-and-fading-out-with-css-transitions-3lc1) - Blog article that helped me with setting up the fade in/out for the mobile navbar


## Author

- Github - [joshdail](https://github.com/joshdail)
- Frontend Mentor - [@joshdail](https://www.frontendmentor.io/profile/joshdail)
