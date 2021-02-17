import React, { useState } from 'react'
import FilmDetail from '../FilmDetail/FilmDetail';

const Film = ({ film }) => {
  const [expanded, setExpanded] = useState(false)

  const expandedFilm = () => {
    setExpanded(true)
  }

    return (
      <div>
        <div>
          {film.name}
          {!expanded && <button onClick={expandedFilm}>Детальнее</button>}
        </div>
        {expanded && <FilmDetail film={film}/>}
      </div>
    )
}

export default Film