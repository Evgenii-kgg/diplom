import {
    CHANGE_SEARCH,
    CHANGE_SEARCH_GLOBAL,
    SEARCH_COLLECTION,
    LOAD_MORE,
    CATALOG_TITLE,
    SELECT_ITEM, SELECT_ALL, GET_HITS,
} from "../actions/actionTypes";


const initialState = {
    search: '',
    searchGlobal: '',
    searchCollection: [],
    offset: [],
    page: 1,
    items: [],
    categories: [],
    top: [],
};

export default function appReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_SEARCH:
            return ({...state, search: action.payload})
        case CHANGE_SEARCH_GLOBAL:
            return ({...state, searchGlobal: action.payload})
        case SEARCH_COLLECTION:
            return ({...state, searchCollection: action.payload})
        case LOAD_MORE:
            return ({...state, page: action.payload})
        case CATALOG_TITLE:
            return ({...state, categories: action.payload})
        case SELECT_ITEM:
            console.log(state.items)
            return ({...state, items: action.payload})
        case GET_HITS:
            return ({...state, top: action.payload})
        case SELECT_ALL:
            console.log(state.items)
            return ({...state, items: action.payload})
        default:
            return state;
    }
}


