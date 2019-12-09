const actions = [
  // User
  "UPDATE_NAME",
  "UPDATE_DETAILS",
  // Player
  "PLAY_SONG",
  "CLOSE_PLAYER"
];

const actionTypes = {};
actions.forEach(action => {
  actionTypes[action] = action;
});

export default actionTypes;
