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
    currentCategory: "1",
    lastPage: false,
};

export default function appReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_SEARCH:
            return ({...state, search: action.payload})
        case CHANGE_SEARCH_GLOBAL:
            return ({...state, searchGlobal: action.payload})
        case SEARCH_COLLECTION:
            return ({...state, searchCollection: action.payload})
        case CATALOG_TITLE:
            return ({...state, categories: action.payload})
        case SELECT_ITEM:
            return ({...state, items: action.payload.data, currentCategory: action.payload.currentCategory, lastPage: false , page: 1})
        case GET_HITS:
            return ({...state, top: action.payload})
        case SELECT_ALL:
            return ({...state, items: action.payload.data, currentCategory: action.payload.currentCategory, lastPage: false , page: 1})
        case LOAD_MORE:
            console.log(action.payload, state.items )
                return ({...state, items: [...state.items, ...action.payload.data], page: action.payload.page, lastPage: (action.payload.data.length < 6) })
        default:
            return state;
    }
}


