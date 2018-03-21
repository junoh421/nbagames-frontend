import React, { Component } from 'react'
import { connect } from 'react-redux'
import PlayerShow from '../components/show/PlayerShow'
import * as actions from '../actions/ApiActions';

class PlayerContainer extends Component {
  componentDidMount() {
    let playerId = window.location.pathname.split("/")[2];
    this.props.PlayerInfo(playerId);
  }

  render() {
    return (
      <PlayerShow
       seasonAverage={this.props.seasonAverage}
       playerProfile={this.props.playerProfile}
       playerBoxScore={this.props.playerBoxScore}
      />
    )
  }
}

const mapStoreToProps = store => {
  return {
    seasonAverage: store.seasonAvgState,
    playerProfile: store.playerProfileState,
    playerBoxScore: store.boxScoreState,
  }
}

export default connect(mapStoreToProps, actions)(PlayerContainer);
