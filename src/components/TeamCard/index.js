import './index.css'

const TeamCard = props => {
  const {value} = props
  const {name, teamImageUrl} = value
  return (
    <li className="li">
      <div className="logo-flex">
        <img src={teamImageUrl} alt={name} className="team-logo-Img" />
        <h1 className="logo-heading">{name}</h1>
      </div>
    </li>
  )
}
export default TeamCard
