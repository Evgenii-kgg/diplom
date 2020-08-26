import {
    ADD_BASKET
} from "./actionTypes";


export function addService(name, price) {
    return { type: ADD_BASKET, payload: { name, price } };
}
