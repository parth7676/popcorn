import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas';
import { middleware } from './src/navigation/AppNavigator';
import { fromJS } from 'immutable';

const sagaMiddleware = createSagaMiddleware();
const initialState = {};
const middlewares = [
    sagaMiddleware,
    middleware,
];

const store = createStore(
    reducers,
    fromJS(initialState),
    applyMiddleware(...middlewares),
)

sagaMiddleware.run(sagas);

export default store;