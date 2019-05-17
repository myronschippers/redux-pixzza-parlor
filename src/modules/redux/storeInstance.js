import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import * as allReducers from './reducers/all.reducers';

const storeInstance = createStore(
    combineReducers({
        ...allReducers,
    }),
    applyMiddleware(logger),
);

export default storeInstance;