import { ADD_BASKET } from "../actions/actionTypes";
const initialState = { name: "", price: "" };


export default function basketAddReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_BASKET:
            const { name, value } = action.payload;
            return { ...state, [name]: value };
        default:
            return state;
    }
}
