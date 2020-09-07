import {createStore, combineReducers} from "redux";
import basketAddReducer from "../redusers/backetReducer";


const reducer = combineReducers({
    basket: basketAddReducer
});

const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),);

export default store;
