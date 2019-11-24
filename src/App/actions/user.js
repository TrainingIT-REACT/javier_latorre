import types from './types';

export const updateUserName = (name) => ({
  type: types.UPDATE_NAME,
  name
});