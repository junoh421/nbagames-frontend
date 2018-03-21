import $ from "jquery";
const ROOT_URL = 'https://nbagames-backend.herokuapp.com/api/v1';

export const AllPlayers = () => {
  return (dispatch, getState) => {
    $.ajax({
    method: 'GET',
    url: ROOT_URL + '/players',
    error: function () {
      dispatch(NoMatch("No Matches, Please Try Again!"));
    },
    success: function(data) {
      dispatch(Players(data.players));
    }
  })
  }
}

export const NameMatch = (name) => {
  return (dispatch) => {
    if (name.trim().length > 1) {
      $.ajax({
        method: 'GET',
        url: ROOT_URL + '/names',
        data: {
          name: name
        },
        error: function () {
        },
        success: function(data) {
          dispatch(Players(data.matchingname))
        }
      })
    } else {
      $.ajax({
        method: 'GET',
        url: ROOT_URL + '/players',
        error: function () {
        },
        success: function(data) {
          dispatch(Players(data.players))
        }
      })
    }
  }
}

export const PlayerInfo = (id) => {
  debugger;
  return (dispatch, getState) => {
    $.ajax({
    method: 'GET',
    url: ROOT_URL + `/players/${id}`,
    error: function () {
      dispatch(NoMatch("No Matches, Please Try Again!"));
    },
    success: function(data) {
      dispatch(Average(data.season_average));
      dispatch(PlayerProfile(data.player));
      dispatch(BoxScore(data.stats));
    }
  })

  }
}

export const Players = (players) => {
  return {
    type: "ALL_PLAYERS_INFO",
    players
  }
}

export const NoMatch = (error) => {
  return {
    type: "ERROR",
    error
  }
}

export const Average = (seasonaverage) => {
  return {
    type: "SEASON_AVERAGE",
    seasonaverage
  }
}

export const PlayerProfile = (player) => {
  return {
    type: "PLAYER_PROFILE",
    player
  }
}

export const BoxScore = (boxscore) => {
  return {
    type: "PLAYER_BOXSCORE",
    boxscore
  }
}
