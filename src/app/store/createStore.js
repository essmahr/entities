import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './reducers';

export default (initialState = {}) => {
  const enhancers = [];

  let composeEnhancers = compose;

  if (__DEV__) {
    const composeWithDevToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    if (typeof composeWithDevToolsExtension === 'function') {
      composeEnhancers = composeWithDevToolsExtension;
    }
  }

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      ...enhancers
    )
  )

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer);
    })
  }

  return store;
}
