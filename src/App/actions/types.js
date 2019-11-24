const actions = [
    // Usuarios
    "UPDATE_NAME"
  ];
  
  const actionTypes = {};
  actions.forEach(action => {
    actionTypes[action] = action;
  });
  
  export default actionTypes;