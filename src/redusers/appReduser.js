import {
    CHANGE_SEARCH,
    CHANGE_SEARCH_GLOBAL,
    SEARCH_COLLECTION,
    LOAD_MORE,
    CATALOG_TITLE,
    SELECT_ITEM, SELECT_ALL, GET_HITS, CATALOG_REQUEST, TOP_REQUEST, SEARCH_REQUEST,
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
    loadingHit: false,
    loadingCatalog: false,
    loadingSearch: false,
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
            return ({...state, items: action.payload.data, currentCategory: action.payload.currentCategory, lastPage: false , page: 1, loadingCatalog: false})
        case GET_HITS:
            return ({...state, top: action.payload, loadingHit: false})
        case SELECT_ALL:
            return ({...state, items: action.payload.data, currentCategory: action.payload.currentCategory, lastPage: false , page: 1, loadingCatalog: false})
        case LOAD_MORE:
            console.log(action.payload, state.items )
                return ({...state, items: [...state.items, ...action.payload.data], page: action.payload.page, lastPage: (action.payload.data.length < 6) })
        case CATALOG_REQUEST:
            return ({...state, loadingCatalog: action.payload})
        case TOP_REQUEST:
            return ({...state, loadingHit: action.payload})
        case SEARCH_REQUEST:
            return ({...state, loadingSearch: action.payload})
        default:
            return state;
    }
}

