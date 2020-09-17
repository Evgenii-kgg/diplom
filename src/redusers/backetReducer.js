import {CHANGE_PHONE, CHANGE_ADDRESS, ADD_ITEMS, DELETE_ITEMS} from "../actions/actionTypes";
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
            const similar = state.items.find(item => (item.id === action.payload.id && item.size === action.payload.size))
            if(similar && similar.size === action.payload.size) {
                const count = !!similar.count ? similar.count+action.payload.count  : action.payload.count
                storage.set("basket", { items: [...state.items.filter(item=> item.id !== similar.id ), {...similar, count}]})
                return ({...state, items: [...state.items.filter(item=> item.id !== similar.id && item.size !== action.payload.size), {...similar, count}]})
            }
            storage.set("basket", { items: [...state.items, action.payload ]})
            return ({...state, items: [...state.items, action.payload ]})
        }
        case DELETE_ITEMS:
            storage.set("basket", {items: state.items.filter(item => item.id !== action.payload)})
            return ({...state, items: state.items.filter(item => item.id !== action.payload)})
        default:
            return state;
    }
}


