import {createStore, combineReducers, compose, applyMiddleware} from "redux";
import basketAddReducer from "../redusers/backetReducer";
import appReducer from "../redusers/appReduser";
import thunk from 'redux-thunk';



const reducer = combineReducers({
    basket: basketAddReducer,
    app: appReducer
});

const store = createStore(reducer,
    compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())
    );

export default store;
