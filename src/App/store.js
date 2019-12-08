import { createStore, combineReducers, applyMiddleware } from "redux";
import promise from "redux-promise-middleware";

// Reducers
import user from "./reducers/user";
import albums from "./reducers/albums";
import canciones from "./reducers/canciones";
import player from "./reducers/player";

export default createStore(
  combineReducers({ user, albums, canciones, player }),
  applyMiddleware(promise())
);
