import {CHANGE_SEARCH, CHANGE_SEARCH_GLOBAL} from "../actions/actionTypes";


const initialState = {
    search: '',
    searchGlobal: '',
};


export default function appReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_SEARCH:
            return ({...state, search: action.payload})
        case CHANGE_SEARCH_GLOBAL:
            return ({...state, searchGlobal: action.payload})
        default:
            return state;
    }
}


