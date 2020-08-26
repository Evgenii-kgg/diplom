import {createStore, combineReducers} from "redux";
import basketAddReducer from "../redusers/backetAdd";


const reducer = combineReducers({
    basketAdd: basketAddReducer
});

const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),);

export default store;
