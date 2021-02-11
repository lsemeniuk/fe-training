import React, { useState, useEffect } from 'react'
import Loader from './components/Loader/Loader'
import axios from 'axios'
import Film from './components/Film/Film'

const App = () => {
  const [films, setFilms] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios('https://ajax.test-danit.com/api/swapi/films')
    .then(res => {
      setFilms(res.data)
      setIsLoading(false)
    })
  }, [])


  if (isLoading) {
    return <Loader />
  }

  const filmItem = films.map((f) =>(
    <ol key={f.id}><Film film={f} /></ol>
  ))

  return (
    <ul>
      {filmItem}
    </ul>
  )
}

export default App