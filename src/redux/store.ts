import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import DemoReducer from './reducers/DemoReducer';

const AppReducers = combineReducers({
    DemoReducer:DemoReducer,
});

const rootReducer = (state:any, action:any) => {
    return AppReducers(state, action);
}

export default createStore(
    rootReducer,
    applyMiddleware(thunk)
);
