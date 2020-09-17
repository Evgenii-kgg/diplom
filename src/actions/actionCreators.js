import {
    CHANGE_ADDRESS,
    CHANGE_PHONE,
    ADD_ITEMS,
    DELETE_ITEMS,
    CHANGE_SEARCH,
    CHANGE_SEARCH_GLOBAL,
    SEARCH_COLLECTION, LOAD_MORE, SELECT_ITEM, SELECT_ALL, CATALOG_TITLE, GET_HITS,
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

export function deleteItems(id) {
    return {type: DELETE_ITEMS, payload: id };
}

export function changeSearch (query) {
    return {type: CHANGE_SEARCH, payload: query };
}

export function changeSearchGlobal (query) {
    return {type: CHANGE_SEARCH_GLOBAL, payload: query };
}

export function onSearch (query) {
    return (dispatch) => {
        return netWorkService({url: `items?q=${query}`, method: "GET"}).then(
            (response)=> dispatch({type: SEARCH_COLLECTION, payload: response })
        )
    };
}

export function onLoadMore (page) {
    return (dispatch) => {
        return netWorkService({url: `items?offset=${page}`, method: "GET"}).then(
            (response)=> dispatch({type: LOAD_MORE, payload: response })
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
        return netWorkService({url: `items?categoryId=${query}`, method: "GET"}).then(
            (response)=> dispatch({type: SELECT_ITEM, payload: response })
        )
    };
}

export function onSelectAll () {
    return (dispatch) => {
        return netWorkService({url: `items`, method: "GET"}).then(
            (response)=> dispatch({type: SELECT_ALL, payload: response })
        )
    };
}

export function getHits () {
    return (dispatch) => {
        return netWorkService({url: `top-sales`, method: "GET"}).then(
            (response)=> dispatch({type: GET_HITS, payload: response })
        )
    };
}




