import {GET_CHAR_DETAILS} from "./actions.js"

const initialState = {
    charDetails: {}
}

const rootReducer = (state = initialState, {type, payload})=>{
    switch(type){
        case GET_CHAR_DETAILS: return {
            ...state,
            charDetails: payload
        }

        default: return {
            ...state
        }
    }
}
export default rootReducer;