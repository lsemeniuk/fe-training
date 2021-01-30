import React, { PureComponent } from 'react'
import axios from 'axios'
import Loader from '../Loader/Loader';

export default class Characters extends PureComponent {
  state = {
    characters: [],
    isLoading: true
  }

  componentDidMount() {
    const { film } = this.props;
    axios.all(film.characters.map(c => axios(c)))
    .then(res => this.setState(
      {isLoading: false, characters: res.map(i => i.data)}
    ))
  }
  

  render() {
    const { characters, isLoading } = this.state;

    if (isLoading) {
      return <Loader />
    }

    const charactersNames = characters.map(c => c.name).join(', ');

    return charactersNames
  }
}
