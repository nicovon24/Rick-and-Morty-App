import {   
    GET_INITIAL_CHARS, GET_CHAR_DETAILS,  DELETE_CHAR, SEARCH_CHAR, SAVE_SEARCH_INPUT, ADD_CREATED_CHAR, REMOVE_CREATED_CHAR, FETCH_CREATED_CHAR, 
    ADD_PAGE_CHAR, DECREASE_PAGE_CHAR, MOVE_PAGE_CHAR, FETCH_PAGE,
    ADD_FAVORITE, REMOVE_FAVORITE, FILTER_FAVORITE_GENDER, FILTER_FAVORITE_ASCENDANT, FILTER_FAVORITE_DESCENDANT, RESTART_MATCHED_FAV, CHANGE_PROFILE,  
}
from "./action-types.js"

const initialState = {
    matched_characters: [],
    initialCharacters: [],
    searchInput: "",
    charDetails: {}, 
    createdChars: [],
    page: 1,
    matchedFavorites: [],
    initialFavorites: [],
    createdChar: [],
    profile: {age: 22, country: "Argentina", image: "https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg"}
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

        case ADD_FAVORITE: return {
            ...state,
            matchedFavorites: [...state.matchedFavorites, payload],
            initialFavorites: [...state.matchedFavorites, payload]
        }

        case REMOVE_FAVORITE: return {
            ...state,
            matchedFavorites: state.matchedFavorites.filter(fav=>fav.id!==payload),
            initialFavorites: state.initialFavorites.filter(fav=>fav.id!==payload)
        }

        case FILTER_FAVORITE_GENDER: return {
            ...state,
            matchedFavorites: state.matchedFavorites.filter(fav=>fav?.gender.toLowerCase()===payload)
        }

        case FILTER_FAVORITE_ASCENDANT: return {
            ...state,
            matchedFavorites: state.matchedFavorites.sort((a,b)=>a.name.localeCompare(b.name))
        }

        case FILTER_FAVORITE_DESCENDANT: return {
            ...state,
            matchedFavorites: state.matchedFavorites.sort((a,b)=>b.name.localeCompare(a.name))
        }

        case RESTART_MATCHED_FAV: return{ //for filters
            ...state, 
            matchedFavorites: state.initialFavorites
        }

        case CHANGE_PROFILE: return {
            ...state,
            profile: {...state.profile, ...payload}
        }

        case FETCH_CREATED_CHAR: return {
            ...state, 
            createdChar: payload
        }

        case ADD_CREATED_CHAR: return {
            ...state,
            createdChar: [...state.createdChar, payload]
        }

        case REMOVE_CREATED_CHAR: return {
            ...state,
            createdChar: state.createdChar.filter(el=>el.id!==payload)
        }

        default: return {
            ...state
        }
    }
}
export default rootReducer;