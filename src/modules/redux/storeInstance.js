import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { orderReducer } from './reducers/order.reducers';

const storeInstance = createStore(
    combineReducers({
        orderReducer,
    }),
    applyMiddleware(logger),
);

export default storeInstance;