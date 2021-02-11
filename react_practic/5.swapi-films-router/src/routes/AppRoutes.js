import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import FilmDetail from '../components/FilmDetail/FilmDetail'
import Films from '../components/Films/Films'

function AppRoutes() {
  return (
    <Switch>
      <Redirect exact from='/' to='/films' />
      <Route exact path='/films'><Films /></Route>
      <Route exact path='/films/:filmId'><FilmDetail /></Route>
    </Switch>
  )
}

export default AppRoutes
