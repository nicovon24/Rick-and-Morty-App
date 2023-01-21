import {   
    GET_INITIAL_CHARS, GET_CHAR_DETAILS,  DELETE_CHAR, SEARCH_CHAR,
    ADD_PAGE_CHAR, DECREASE_PAGE_CHAR, MOVE_PAGE_CHAR, FETCH_PAGE,
    SAVE_SEARCH_INPUT
}
from "./actions.js"

const initialState = {
    matched_characters: [],
    initialCharacters: [],
    searchInput: "",
    charDetails: {}, 
    page: 1
}

const rootReducer = (state = initialState, {type, payload})=>{
    switch(type){
        case GET_INITIAL_CHARS: return {
            ...state,
            matched_characters: payload,
            initialCharacters: payload
        }

        case GET_CHAR_DETAILS: return {
            ...state,
            charDetails: payload
        }

        case DELETE_CHAR: 
            return {
                ...state, 
                matched_characters: state.matched_characters.filter(el=>el.id!==payload)
                /* hacer delete favorite tambien */
            }

        case SEARCH_CHAR: return{
            ...state,
            matched_characters: payload ? payload : [],
            page: 1
        }

        case SAVE_SEARCH_INPUT: return {
            ...state,
            searchInput: payload
        }

        case FETCH_PAGE: return{
            ...state, 
            matched_characters: payload
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