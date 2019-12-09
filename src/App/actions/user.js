import types from "./types";

export const updateUserName = name => ({
  type: types.UPDATE_NAME,
  name
});

export const updateUserDetails = userDetails => ({
  type: types.UPDATE_DETAILS,
  userDetails
});
