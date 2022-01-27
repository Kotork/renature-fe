import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { menu, modal } from './reducers';

const reducers = combineReducers({
    menu,
    modal
})

/* @ts-ignore */
const composerEnhacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const storeConfig = createStore(reducers, composerEnhacer(applyMiddleware(thunk)));

export default storeConfig;