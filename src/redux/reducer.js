import {GET_INITIAL_CHARS, GET_CHAR_DETAILS, 
ADD_PAGE_CHAR, DECREASE_PAGE_CHAR, MOVE_PAGE_CHAR,
} from "./actions.js"

const initialState = {
    matched_characters: [],
    initialCharacters: [],
    charDetails: {}, 
    page: 1
}

const rootReducer = (state = initialState, {type, payload})=>{
    switch(type){
        case GET_INITIAL_CHARS: return {
            ...state,
            initialCharacters: payload
        }

        case GET_CHAR_DETAILS: return {
            ...state,
            charDetails: payload
        }

        case ADD_PAGE_CHAR: return{
            ...state,
            page: state.page<41 ? state.page+1 : state.page
        }

        case DECREASE_PAGE_CHAR: return{
            ...state,
            page: state.page>1 ? state.page-1 : state.page
        }

        case MOVE_PAGE_CHAR: return{
            ...state,
            page: payload
        }

        default: return {
            ...state
        }
    }
}
export default rootReducer;