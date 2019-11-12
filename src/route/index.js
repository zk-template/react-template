import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import StorePersistor from '../store/index';
import AppRouter from './routes/index';
const { store, persistor } = StorePersistor();

class StoreRouter extends Component {

    render() {
        return(
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <AppRouter></AppRouter>
                </PersistGate>
            </Provider>
        )
    }
}

export default  StoreRouter;