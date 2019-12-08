import types from "../actions/types";

const initialState = {
  songTitle: "",
  songAudio: "",
  playerOpen: false,
  songHistory: []
};

const reducer = (state = initialState, action) => {
  const { songTitle, songAudio, dateTime, type } = action;
  switch (type) {
    case types.PLAY_SONG:
      return {
        songTitle,
        songAudio,
        playerOpen: true,
        songHistory: [...state.songHistory, { dateTime, songTitle }]
      };
    case types.CLOSE_PLAYER:
      return {
        ...state,
        playerOpen: false
      };
    default:
      return state;
  }
};

export default reducer;
