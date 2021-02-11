import React, { useState, useEffect } from 'react'
import Loader from '../Loader/Loader'
import axios from 'axios'
import Film from '../Film/Film'

const Films = () => {
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
    <Film key={f.id} film={f} />
  ))

  return (
    <ol>
      {filmItem}
    </ol>
  )
}

export default Films