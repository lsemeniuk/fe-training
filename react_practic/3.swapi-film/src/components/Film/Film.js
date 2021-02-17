import React, { PureComponent } from 'react'
import FilmDetail from '../FilmDetail/FilmDetail';

export default class Film extends PureComponent {
  state = {
    expanded: false
  }

  expandedFilm = () => {
    this.setState({expanded: true})
  }

  render() {
    const { film } = this.props;
    const { expanded } = this.state;

    return (
      <div>
        <div>
          {film.name}
          {!expanded && <button onClick={this.expandedFilm}>Детальнее</button>}
        </div>
        {expanded && <FilmDetail film={film}/>}
      </div>
    )
  }
}
