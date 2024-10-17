import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {value} = props
  const {id, name, teamImageUrl} = value
  return (
    <Link to={`/team-matches/${id}`}>
      <li className="li">
        <div className="logo-flex">
          <img src={teamImageUrl} alt={name} className="team-logo-Img" />
          <h1 className="logo-heading">{name}</h1>
        </div>
      </li>
    </Link>
  )
}
export default TeamCard
