import types from "./types";

export const playSong = (songTitle, songAudio, dateTime) => ({
  type: types.PLAY_SONG,
  songTitle,
  songAudio,
  dateTime
});

export const closePlayer = () => ({
  type: types.CLOSE_PLAYER
});
