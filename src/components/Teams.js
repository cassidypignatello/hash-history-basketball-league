import React, { Component } from 'react'
import Sidebar from './Sidebar'
import { getTeamNames } from '../api'
import { parse } from 'query-string'

export default class Teams extends Component {
  state = {
    loading: true,
    teams: []
  }
  componentDidMount() {
    const { location } = this.props
    location.search ?
    this.fetchTeams(parse(location.search).teamId) :
    this.fetchTeams()
  }
  fetchTeams = (teamId) => {
    getTeamNames(teamId)
      .then((teams) => this.setState(() => ({
        loading: false,
        teams
      })))
  }
  render() {
    const { teams, loading } = this.state
    const { location } = this.props
    return(
      <div className='container two-column'>
        <Sidebar
          title='Teams'
          list={teams}
          loading={loading}
          {...this.props}
        />
        {loading === false && location.pathname === '/teams' ?
        <div className='sidebar-instruction'>Select a Team</div> :
        null}
      </div>
    )
  }
}
