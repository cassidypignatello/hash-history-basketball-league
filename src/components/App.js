import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Home from './Home'
import Players from './Players'
import Teams from './Teams'
import Team from './Team'
import Navbar from './Navbar'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/players' component={Players} />
            <Route path='/teams' component={Teams} />
            <Route path='/:teamId' component={Team} />
            <Route render={({ location }) => (
              <h3 className='text-center'>Sorry, {location.pathname} wasn't found. Please check the URL and try again.</h3>
            )} />
          </Switch>
        </div>
      </Router>
    )
  }
}
