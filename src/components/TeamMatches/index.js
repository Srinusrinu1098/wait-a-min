import {Component} from 'react'
import './index.css'

class TeamMatches extends Component {
  state = {backGround: '', banner: ''}

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

    this.setState({backGround: id, banner: formatedBanner.bannerUrl})
  }

  render() {
    const {backGround, banner} = this.state
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
      </div>
    )
  }
}

export default TeamMatches
