import {CHANGE_PHONE, CHANGE_ADDRESS, ADD_ITEMS} from "../actions/actionTypes";
import storage from '../service/storage'


const initialState = {
    address: '',
    items: storage.get("basket").items || [],
    phone: '',
};


export default function basketAddReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_PHONE:
            return ({...state, phone: action.payload})
        case CHANGE_ADDRESS:
            return ({...state, address: action.payload})
        case ADD_ITEMS: {
            storage.set("basket", { items: [...state.items, action.payload]})
            return ({...state, items: [...state.items, action.payload]})
        }
        default:
            return state;
    }
}
