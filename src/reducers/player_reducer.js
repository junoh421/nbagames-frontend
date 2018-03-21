export const allPlayersReducer = (state="", action) => {
  switch (action.type) {
    case "ALL_PLAYERS_INFO":
      return action.players
    default:
      return state
  }
}

export const errorReducer = (state="", action) => {
  switch (action.type) {
    case "ERROR":
      return action.error
    default:
      return state
  }
}


export const seasonAverageReducer = (state="", action) => {
  switch (action.type) {
    case "SEASON_AVERAGE":
      return action.seasonaverage
    default:
      return state
  }
}

export const boxScoreReducer = (state="", action) => {
  switch (action.type) {
    case "PLAYER_BOXSCORE":
      return action.boxscore
    default:
      return state
  }
}

export const playerProfileReducer = (state="", action) => {
  switch (action.type) {
    case "PLAYER_PROFILE":
      return action.player
    default:
      return state
  }
}
