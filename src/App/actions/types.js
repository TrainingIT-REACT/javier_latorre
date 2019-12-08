const actions = [
  // User
  "UPDATE_NAME",
  // Player
  "PLAY_SONG",
  "CLOSE_PLAYER"
];

const actionTypes = {};
actions.forEach(action => {
  actionTypes[action] = action;
});

export default actionTypes;
