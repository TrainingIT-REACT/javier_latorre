import { createStore, combineReducers, applyMiddleware } from "redux";
import promise from "redux-promise-middleware";

// Reducers
import user from "./reducers/user";
import albums from "./reducers/albums";
import canciones from "./reducers/canciones";

export default createStore(
  combineReducers({ user, albums, canciones }),
  applyMiddleware(promise())
);
