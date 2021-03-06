import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import combinReducer from './reducer/index';
import { initDefaultStore } from './actions/types_and_initval'
const persistConf = {
    key: 'myhhhapp',
    storage
};


const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  // other store enhancers if any
);

const persistedReducer = persistReducer(persistConf, combinReducer);

export default  () => {
    let store = createStore(
        persistedReducer, 
        initDefaultStore, 
        enhancer
    );
    let persistor = persistStore(store);
    return { store, persistor};
}