import React from 'react'
import Characters from '../Characters/Characters';

const FilmDetail = ({ film }) => {
    return (
      <div>
        <div>Episode ID: {film.episodeId}</div>
        <div>Opening crawl: {film.openingCrawl}</div>
        <div>Characters: <Characters film={film} /></div>
      </div>
    )
}

export default FilmDetail