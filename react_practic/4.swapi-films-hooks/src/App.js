import React, { Component } from 'react'
import Loader from './components/Loader/Loader'
import axios from 'axios'
import Film from './components/Film/Film'

export default class App extends Component {
  state = {
    films: [],
    isLoading: true
  }

  componentDidMount() {
    axios('https://ajax.test-danit.com/api/swapi/films')
    .then(res => this.setState({films: res.data, isLoading: false}))
  }
  

  render() {
    const { films, isLoading } = this.state;
    if (isLoading) {
      return <Loader />
    }

    const filmItem = films.map((f) =>(
      <ol key={f.id}><Film film={f} /></ol>
    ))

    return (
      <ul>
        {filmItem}
      </ul>
    )
  }
}
