const defaultState = {loaded: false, data: [], page: 1, lastPage: false}

export default function createCollection({name, enhancer, extraState = {}}) {
    return (state = {...defaultState, ...extraState}, action) => {
        const {type}= action
        if (type === `${name}_REQUEST`) {
            return {
                ...state,
                loaded: true
            }
        }
        if (type === `${name}_SUCCESS`) {
            const page = action.payload.page ? action.payload.page : 1
            const lastPage = (action.payload.data && action.payload.data.length < 6)
            if(action.payload.data) {
                console.log(action.payload.data)
                return {
                    ...state,
                    loaded: false,
                    data: [...state.data, ...action.payload.data], page: page, lastPage: lastPage
                }
            }

        }
        if (type === `${name}_FAILURE`) {
            return {
                ...state,
                loaded: false
            }
        }
        if (type === `${name}_CHANGE_EXTRA`) {
            return {
                ...state,
                ...action.payload
            }
        }
        if (type === `${name}_CLEAR`) {
            return {
                ...state,
                ...defaultState
            }
        }
        if (typeof enhancer === 'function') {
            const newState = enhancer(state,action);
            if(state !== enhancer) {
                return newState
            }
        }
        return state
    }
}


