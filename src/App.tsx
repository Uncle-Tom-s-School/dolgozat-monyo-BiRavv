import { useEffect, useState } from "react"
import BeerCard from "./components/BeerCard"

const App = () => {

  const [beers,setBeers] = useState<typeof BeerCard[]>([])
  useEffect(() =>{  
    fetch("data.json")
      .then(response => {return response.json()})
      .then(json => {
        setBeers(json)
      })
  },[])

  


  return (
    <div className="beerCardWrapper">

    </div>
  )
}

export default App