import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import logger from 'redux-logger';


import thunk from 'redux-thunk';
import { charsReducer } from './reducers';
// applyMiddleware from redux
const store = createStore(
rootReducer, 
applyMiddleware(thunk, logger),);



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
