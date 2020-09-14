import {CHANGE_PHONE, CHANGE_ADDRESS, ADD_ITEMS, DELETE_ITEMS} from "../actions/actionTypes";
import storage from '../service/storage'
import item from "../Components/item";


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
             const allPrice = state.items.find()
            const simular = state.items.find(item => item.id == action.payload.id )
            if(simular) {
                storage.set("basket", { items: [...state.items.filter(item=> item.id !== simular.id), {...simular, count: !!simular.count ? simular.count+1 : 1}]})
                return ({...state, items: [...state.items.filter(item=> item.id !== simular.id), {...simular, count: !!simular.count ? simular.count+1 : 1}]})
            }
            storage.set("basket", { items: [...state.items, {...action.payload, count: 1 }], })
            return ({...state, items: [...state.items, {...action.payload, count: 1 }]})
        }
        case DELETE_ITEMS:
            return ({...state, items: state.items.filter(item => item.id !== action.payload)})
        default:
            return state;
    }
}


