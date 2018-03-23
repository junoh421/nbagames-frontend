import React from 'react';

const PlayerProfile = props => {
  let player_id = props.player.id;
  return (
    <div className="player-display col-md-2">
      <img alt="player-pic" src= {props.player.image} className="player-image"/>
      <p><a href={'/players/' + player_id}>{props.player.first_name} {props.player.last_name}</a> {props.player.number}</p>
      <p> Position: {props.player.position} </p>
      <p> Height: {props.player.height} | Weight: {props.player.weight} </p>
      <p> Team: {props.player.team} </p>
    </div>
  )
}

export default PlayerProfile;
