import {createStore, combineReducers} from "redux";
import basketAddReducer from "../redusers/backetReducer";
import appReducer from "../redusers/appReduser";


const reducer = combineReducers({
    basket: basketAddReducer,
    app: appReducer
});

const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),);

export default store;
