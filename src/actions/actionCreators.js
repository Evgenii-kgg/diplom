import {
    CHANGE_ADDRESS,
    CHANGE_PHONE,
    ADD_ITEMS,
    DELETE_ITEMS,
    CHANGE_SEARCH,
    LOAD_MORE,
    CATALOG_TITLE,
    SEARCH_REQUEST,
    TOP_REQUEST,
    TOP_SUCCESS,
    CATALOG_REQUEST,
    CATALOG_SUCCESS,
    CATALOG_CHANGE_EXTRA,
    CATALOG_CLEAR,
    SEARCH_SUCCESS,
    SEARCH_CHANGE_EXTRA,
    SEARCH_CLEAR,
    CLEAR_ITEMS,
} from "./actionTypes";
import {netWorkService} from "../api";


export function changePhone(phone) {
    console.log(phone)
    return  {type: CHANGE_PHONE, payload: phone };
}

export function changeAddress( address) {
    console.log(address)
    return {type: CHANGE_ADDRESS, payload: address};
}

export function addItems(item) {
    return {type: ADD_ITEMS, payload: item };
}

export function clearItems() {
    return {type: CLEAR_ITEMS };
}

export function deleteItems(id) {
    return {type: DELETE_ITEMS, payload: id };
}

export function changeSearch (query) {
    return {type: CHANGE_SEARCH, payload: query };
}

export function changeSearchGlobal (query) {
    return {type: SEARCH_CHANGE_EXTRA, payload: {searchGlobal: query} };
}

export function onSearch (query) {
    return (dispatch) => {
        dispatch({type: SEARCH_CLEAR })
        dispatch({type: SEARCH_REQUEST, payload: true })
        return netWorkService({url: `items?q=${query}`, method: "GET"}).then(
            (response)=> dispatch({type: SEARCH_SUCCESS, payload: {data: response} })
        )
    };
}

export function onLoadMore (page, category) {
    return (dispatch) => {
        return netWorkService({url: `items?categoryId=${category}&offset=${page}`, method: "GET"}).then(
            (response)=> {
                dispatch({type: LOAD_MORE, payload: {data: response , page: page} })
            }
        )
    };
}

export function getCatalogTitle () {
    return (dispatch) => {
        return netWorkService({url: `categories`, method: "GET"}).then(
            (response)=> dispatch({type: CATALOG_TITLE, payload: response })
        )
    };
}

export function onSelectItem (query) {
    return (dispatch) => {
        dispatch({type: CATALOG_CLEAR })
        dispatch({type: CATALOG_REQUEST, payload: true })
         dispatch({type: CATALOG_CHANGE_EXTRA , payload: {currentCategory: query}})
        return netWorkService({url: !query ? `items`:`items?categoryId=${query}`, method: "GET"}).then(
            (response)=> dispatch({type: CATALOG_SUCCESS, payload: {data: response } })
        )
    };
}

export function getTop () {
    return (dispatch) => {
        dispatch({type: TOP_REQUEST, payload: true })
        return netWorkService({url: `top-sales`, method: "GET"}).then(
            (response)=> dispatch({type: TOP_SUCCESS, payload: {data: response} })
        )
    };
}




