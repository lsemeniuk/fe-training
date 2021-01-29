import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from '../Button/Button';
import FilmDetail from '../FilmDetail/FilmDetail';

export default class Film extends Component {
  state = {
    expanded: false,
  }

  expandedFilm = () => {
    this.setState({expanded: true})
  }

  render() {
    const {film} = this.props;
    const { expanded } = this.state;

    return (
      <li>
        <div>
          {film.name}
          {!expanded && <button onClick={this.expandedFilm}>Детальнее</button>}
        </div>
        {expanded && <FilmDetail film={film} />}
      </li>
    )
  }
}
