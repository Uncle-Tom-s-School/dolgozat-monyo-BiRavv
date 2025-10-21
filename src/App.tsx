import { useEffect, useState } from "react"
import BeerCard from "./components/BeerCard"

const App = () => {

  const [beers,setBeers] = useState()
  useEffect(() =>{  
    fetch("data.json")
      .then(response => {return response.json()})
      .then(json => {
        setBeers(json)
      })
  },[])

  


  return (
    <div className="beerCardWrapper">
      <BeerCard/>
    </div>
  )
}

export default App