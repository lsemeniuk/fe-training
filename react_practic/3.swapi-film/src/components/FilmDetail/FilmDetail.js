import React, { PureComponent } from 'react'
import Characters from '../Characters/Characters';

export default class FilmDetail extends PureComponent {
  render() {
    const { film } = this.props
    return (
      <div>
        <div>Episode ID: {film.episodeId}</div>
        <div>Opening crawl: {film.openingCrawl}</div>
        <div>Characters: <Characters film={film} /></div>
      </div>
    )
  }
}
