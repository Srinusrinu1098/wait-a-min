import './index.css'

const LatestMatch = props => {
  const {value} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    id,
    manOfTheMatch,
    results,
    secondInnings,
    umpires,
    venue,
  } = value

  return (
    <li key={id} className="li-back-ground">
      <div>
        <h1 className="latest-heading3">{competingTeam}</h1>
        <p className="latest-heading4">{date}</p>
        <p className="latest-heading2">{venue}</p>
        <p className="latest-heading2">{results}</p>
      </div>
      <div>
        <img
          src={competingTeamLogo}
          alt={competingTeam}
          className="latest-img"
        />
      </div>
      <div>
        <h1 className="latest-heading">First Innings</h1>
        <p className="latest-heading1">{firstInnings}</p>
        <h1 className="latest-heading">Second Innings</h1>
        <p className="latest-heading1">{secondInnings}</p>
        <h1 className="latest-heading">Man Of The Match</h1>
        <p className="latest-heading1">{manOfTheMatch}</p>
        <h1 className="latest-heading">Umpires</h1>
        <p className="latest-heading1">{umpires}</p>
      </div>
    </li>
  )
}
export default LatestMatch
