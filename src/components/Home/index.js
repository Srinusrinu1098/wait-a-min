import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teamLists: [], isLoading: true}

  componentDidMount = () => {
    this.getTeamListByAPIS()
  }

  getTeamListByAPIS = async () => {
    const response = await fetch(`https://apis.ccbp.in/ipl`)
    const data = await response.json()

    const formattedData = data.teams.map(eachData => ({
      id: eachData.id,
      name: eachData.name,
      teamImageUrl: eachData.team_image_url,
    }))
    console.log(formattedData)
    this.setState({teamLists: formattedData, isLoading: false})
  }

  render() {
    const {teamLists, isLoading} = this.state
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
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <ul className="ul">
            {teamLists.map(eachTeam => (
              <TeamCard key={eachTeam.id} value={eachTeam} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}
export default Home
