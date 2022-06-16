import { combineReducers, createStore, applyMiddleware } from "redux";
import characters from "./reducers/characters";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import person from "./reducers/person";
import search from "./reducers/search";
import localStore from "./reducers/localStore";
import filterData from "./reducers/filterData";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const data = combineReducers({
  characters,
  person,
  search,
  localStore,
  filterData,
});

const store = createStore(data, composedEnhancer);

export default store;
