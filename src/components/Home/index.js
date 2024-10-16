import {Component} from 'react'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teamLists: []}

  componentDidMount = () => {
    this.getTeamListByAPIS()
  }

  getTeamListByAPIS = async () => {
    const response = await fetch(`https://apis.ccbp.in/ipl`)
    const data = await response.json()
    console.log(data)

    const formattedData = data.teams.map(eachData => ({
      id: eachData.id,
      name: eachData.name,
      teamImageUrl: eachData.team_image_url,
    }))
    this.setState({teamLists: formattedData})
  }

  render() {
    const {teamLists} = this.state
    return (
      <div className="flex">
        <div className="bat-flex">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="batting-img"
          />
          <h1 className="main-heading">IPL Dashboard</h1>
        </div>
        <ul className="ul">
          {teamLists.map(eachTeam => (
            <TeamCard key={eachTeam.id} value={eachTeam} />
          ))}
        </ul>
      </div>
    )
  }
}
export default Home
