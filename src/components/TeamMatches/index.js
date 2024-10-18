import {Component} from 'react'
import LatestMatch from '../LatestMatch'
import './index.css'

class TeamMatches extends Component {
  state = {backGround: '', banner: '', recentMatches: {}}

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

    this.setState({
      backGround: id,
      banner: formatedBanner.bannerUrl,
      recentMatches: formatedRecent,
    })
  }

  render() {
    const {backGround, banner, recentMatches} = this.state
    console.log(banner)
    console.log(backGround)
    return (
      <div className={`${backGround}`}>
        <div className="banner">
          <img src={banner} alt="team banner" className="team-image" />
        </div>
        <div className="display">
          <p className="main-para">Latest Matches</p>
        </div>
        <LatestMatch value={recentMatches} />
      </div>
    )
  }
}

export default TeamMatches
