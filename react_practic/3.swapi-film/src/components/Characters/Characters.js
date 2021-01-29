import React, { Component } from 'react'
import axios from 'axios'

export default class Characters extends Component {
  state = {
    characters: [],
    isLoading: true
  }

  componentDidMount() {
    const { film } = this.props;
    axios.all(film.characters.map(c => axios(c)))
      .then(res => this.setState(
        { isLoading: false, characters: res.map(i => i.data) }
      ))
  }

  render() {
    const {characters, isLoading} = this.state;
    {if (isLoading) {
      return <Loader />
    }
    return ()
   }
  }
}
