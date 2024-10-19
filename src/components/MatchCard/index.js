import './index.css'

const MatchCard = props => {
  const {value1} = props
  const {competingTeam, competingTeamLogo, matchStatus, matchResult} = value1
  return (
    <li className="bg">
      <img src={competingTeamLogo} alt={competingTeam} className="imgg" />
      <h1 className="latest">{competingTeam}</h1>
      <p className="latest1">{matchResult}</p>
      <h1 className={`${matchStatus}`}>{matchStatus}</h1>
    </li>
  )
}

export default MatchCard
