import { useState, useEffect } from "react"
import Header from "./components/Header"
import PlanetPage from "./components/PlanetPage"

function App() {
  const [data, setData] = useState([])
  const [planetNames, setPlanetNames] = useState([])
  const [selectedPlanet, setSelectedPlanet] = useState(null)
  const [theme, setTheme] = useState(null)

  useEffect(() => {
    fetch("/data.json", { mode: "no-cors" })
      .then(res => res.json())
      .then(jsonArray => {
        setData(jsonArray)
        console.log(jsonArray)
        setPlanetNames(jsonArray.map(entry => entry.name.toLowerCase()))
        setSelectedPlanet(jsonArray[0])
        setTheme(jsonArray[0].name.toLowerCase())
      })
  }, [])

  function loadPlanetPage(index) {
    setSelectedPlanet(data[index])
    setTheme(data[index].name.toLowerCase())
  }

  return (
    <>
      {/* Force React to wait for the data before rendering components */}
      {theme && planetNames && selectedPlanet && (
        <Header
          theme={theme}
          planetNames={planetNames}
          loadPlanetPage={loadPlanetPage}
        />
      )}
      {theme && planetNames && selectedPlanet && (
        <PlanetPage theme={theme} data={selectedPlanet} />
      )}
    </>
  )
}

export default App
