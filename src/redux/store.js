import {
  createStore,
  // , applyMiddleware
} from "redux";
import reducer from "../stateManeger/reducer";
// import logger from "redux-logger";

// const middlewares = [];

// if (process.env.NODE_ENV === `development`) {
//   const { logger } = require(`redux-logger`);

//   middlewares.push(logger);
// }

// const store = compose(applyMiddleware(...middlewares))(createStore)(reducer);

export default createStore(
  reducer
  //  applyMiddleware(logger)
);
