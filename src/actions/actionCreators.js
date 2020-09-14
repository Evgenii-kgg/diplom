import {
    CHANGE_ADDRESS,
    CHANGE_PHONE,
    ADD_ITEMS,
    DELETE_ITEMS,
    CHANGE_SEARCH,
    CHANGE_SEARCH_GLOBAL
} from "./actionTypes";



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
