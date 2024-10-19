import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {
    backGround: '',
    banner: '',
    recentMatches: {},
    recentTeams: [],
    isLoading: true,
  }

  componentDidMount = () => {
    this.getTeamById()
  }

  getTeamById = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    console.log(data)
    const formatedBanner = {
      bannerUrl: data.team_banner_url,
    }

    const recent = data.latest_match_details

    const formatedRecent = {
      competingTeam: recent.competing_team,
      competingTeamLogo: recent.competing_team_logo,
      date: recent.date,
      firstInnings: recent.first_innings,
      id: recent.id,
      manOfTheMatch: recent.man_of_the_match,
      results: recent.result,
      secondInnings: recent.second_innings,
      umpires: recent.umpires,
      venue: recent.venue,
    }

    const formattedRecentMatches = data.recent_matches.map(each => ({
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      id: each.id,
      matchStatus: each.match_status,
      matchResult: each.result,
    }))

    this.setState({
      backGround: id,
      banner: formatedBanner.bannerUrl,
      recentMatches: formatedRecent,
      recentTeams: formattedRecentMatches,
      isLoading: false,
    })
  }

  render() {
    const {
      backGround,
      banner,
      recentMatches,
      isLoading,
      recentTeams,
    } = this.state
    console.log(banner)
    console.log(backGround)
    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className={`${backGround}`}>
            <div className="banner">
              <img src={banner} alt="team banner" className="team-image" />
            </div>
            <div className="display">
              <p className="main-para">Latest Matches</p>
            </div>
            <LatestMatch value={recentMatches} />
            <ul className="team-ul">
              {recentTeams.map(eachItem => (
                <MatchCard kry={eachItem.id} value1={eachItem} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
