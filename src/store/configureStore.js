import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import promiseMiddleware from '../middlewares/promiseMiddleware';
import createLogger from 'redux-logger';

//Usually I would add things in here for server-side rendering but that's out of the scope
//I like to have a central hub that configures my Redux factory though
export default function configureStore(initialState) {
  const middleware = [thunk, promiseMiddleware];

//Responsible for the logger
  middleware.push(createLogger());

//This is the store and the central hub part I was referencing earlier
  const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(...middleware),
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
  ));

  if (module.hot) {

// Enable hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
