import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Loader from '../Loader/Loader';

const Characters = ({film}) => {
  const [characters, setCharacters] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios.all(film.characters.map(c => axios(c)))
    .then(res => {
      setIsLoading(false)
      setCharacters(res.map(i => i.data)
    )
    })
  }, [film])

    if (isLoading) {
      return <Loader />
    }

    const charactersNames = characters.map(c => c.name).join(', ');

    return charactersNames

}

export default Characters