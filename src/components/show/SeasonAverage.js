import React from 'react'

const SeasonAverage = props => {
  return (
    <div className="seasonAverage">
      <p className="font-weight-bold"> SEASON AVERAGE (2016-2017) </p>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>PPG</th>
            <th>RPG</th>
            <th>APG</th>
            <th>SPG</th>
            <th>BPG</th>
            <th>FG%</th>
            <th>FT%</th>
            <th>3P%</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> {props.average.ppg} </td>
            <td> {props.average.rpg} </td>
            <td> {props.average.apg} </td>
            <td> {props.average.spg} </td>
            <td> {props.average.bpg} </td>
            <td> {props.average.fgp} </td>
            <td> {props.average.ftp} </td>
            <td> {props.average.threep} </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default SeasonAverage;
