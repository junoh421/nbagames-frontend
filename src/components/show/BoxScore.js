import React from 'react'

const BoxScore = props => {
  let fgp = "";
  let ftp = "";
  let threep = "";
  let date = props.boxscore.gamecode.slice(4,6) + "/" + props.boxscore.gamecode.slice(6,8);

  if (props.boxscore.fgm === "0" && props.boxscore.fga === "0") {
    fgp = "-";
  } else {
    fgp = (props.boxscore.fgm / props.boxscore.fga).toFixed(3)
  }

  if (props.boxscore.ftm === "0" && props.boxscore.fta === "0") {
    ftp = "-";
  } else {
    ftp = (props.boxscore.ftm / props.boxscore.fta).toFixed(3)
  }

  if (props.boxscore.threepm === "0" && props.boxscore.threepa === "0") {
    threep = "-";
  } else {
    threep = (props.boxscore.threepm / props.boxscore.threepa).toFixed(3);
  }

  return (
    <tr>
      <td>
        <div className="game">
          <span> <img alt="away-team" src= {props.boxscore.away_pic} className="team-image"/> </span>
          <span> @ <img alt="home-team" src= {props.boxscore.home_pic} className="team-image"/> </span>
          <span> ({date}) </span>
        </div>
      </td>
      <td> {props.boxscore.min} </td>
      <td> {props.boxscore.fgm} - {props.boxscore.fga} </td>
      <td> {fgp} </td>
      <td> {props.boxscore.threepm} - {props.boxscore.threepa} </td>
      <td> {threep} </td>
      <td> {props.boxscore.ftm} - {props.boxscore.fta} </td>
      <td> {ftp} </td>
      <td> {props.boxscore.total_rebound} </td>
      <td> {props.boxscore.assist} </td>
      <td> {props.boxscore.block} </td>
      <td> {props.boxscore.steal} </td>
      <td> {props.boxscore.turnover} </td>
      <td> {props.boxscore.plus_minus} </td>
      <td> {props.boxscore.points} </td>
    </tr>
  )
}

export default BoxScore;
