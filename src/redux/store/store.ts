/* eslint-disable import/no-cycle */

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import rootReducer from '../reducers/index';

export type AppState = ReturnType<typeof rootReducer>;
const composeEnhancers = composeWithDevTools({});
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk as ThunkMiddleware<AppState>)),
);
export default store;
