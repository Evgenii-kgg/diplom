import {
    CHANGE_ADDRESS,
    CHANGE_PHONE,
    ADD_ITEMS
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
