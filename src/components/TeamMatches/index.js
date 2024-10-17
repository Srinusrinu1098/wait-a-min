import {Component} from 'react'

class TeamMatches extends Component {
  componentDidMount = () => {
    this.getTeamById()
  }

  getTeamById = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    console.log(data.latest_match_details)
  }

  render() {
    return <h1>hi</h1>
  }
}

export default TeamMatches
