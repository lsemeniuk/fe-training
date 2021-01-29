import React, { Component } from 'react'
import Characters from '../Characters/Characters';

export default class FilmDetail extends Component {
  render() {
    const {film} = this.props;

    return (
      <>
        <div>Episode id: {film.id}</div>
        <div>Opening crawl: {film.openingCrawl}</div>
        <div>Characters: <Characters film={film} /></div>
      </>
    )
  }
}
