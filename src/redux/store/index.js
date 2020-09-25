import {createStore, combineReducers, compose, applyMiddleware} from "redux";
import basketAddReducer from "../redusers/backetReducer";
import appReducer from "../redusers/appReduser";
import thunk from 'redux-thunk';
import collectionReducer from "../redusers/collectionReducer";

const catalog = collectionReducer({name: 'CATALOG', extraState: {currentCategory: '', searchGlobal:''}})
const top = collectionReducer({name: 'TOP', extraState: {}})
const search = collectionReducer({name: 'SEARCH', extraState: {currentCategory: '', searchGlobal:'', searchOpen: false , search: ''}})

const reducer = combineReducers({
    catalog,
    search,
    top,
    basket: basketAddReducer,
    app: appReducer
});

const store = createStore(reducer,
    compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())
    );

export default store;
