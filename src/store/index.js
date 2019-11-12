import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import combinReducer from './reducer/index';

const persistConf = {
    key: 'myapp',
    storage
};

const persistedReducer = persistReducer(persistConf, combinReducer);

export default  () => {
    let store = createStore(persistedReducer);
    let persistor = persistStore(store);
    return { store, persistor};
}