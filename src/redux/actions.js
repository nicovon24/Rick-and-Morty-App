import axios from "axios"
import {   
    GET_INITIAL_CHARS, GET_CHAR_DETAILS,  DELETE_CHAR, SEARCH_CHAR, SAVE_SEARCH_INPUT,
    ADD_PAGE_CHAR, DECREASE_PAGE_CHAR, MOVE_PAGE_CHAR, FETCH_PAGE,
    ADD_FAVORITE, REMOVE_FAVORITE, FILTER_FAVORITE_GENDER, FILTER_FAVORITE_ASCENDANT, FILTER_FAVORITE_DESCENDANT, RESTART_MATCHED_FAV
} from "./action-types.js"

export const getInitialChars = ()=>{
    return async function(dispatch){
        let response = await axios.get(`https://rickandmortyapi.com/api/character`)
        return dispatch({
                type: GET_INITIAL_CHARS,
                payload: response.data.results
            }
        )
    }
}

export const getCharDetails = (id)=>{
    return async function(dispatch){
        let response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        return dispatch({
                type: GET_CHAR_DETAILS,
                payload: response.data
            }
        )
    }
}

export const deleteChar = (id)=>{
    return {
        type: DELETE_CHAR, 
        payload: id
    }
}

export const searchChar = (input)=>{
    return async function(dispatch){
        let response = await axios.get(`https://rickandmortyapi.com/api/character/?name=${input}`)
        return dispatch({
            type: SEARCH_CHAR,
            payload: response.data.results
        })    
    }
}

export const saveSearchInput = (input)=>{
    return {
        type: SAVE_SEARCH_INPUT,
        payload: input
    }
}

export const fetchPage = (page)=>{
    return async function(dispatch){
        let response = await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`)
        return dispatch({
                type: FETCH_PAGE,
                payload: response.data.results
            }
        )
    }
}

export const addPageChar = ()=>{
    return({type: ADD_PAGE_CHAR})
}

export const decreasePageChar = ()=>{
    return({type: DECREASE_PAGE_CHAR})
}

export const movePageChar = (pageNum) => {
    return {type: MOVE_PAGE_CHAR, payload: pageNum}
}

export const addFavorite = (character) => {
    return {
        type: ADD_FAVORITE,
        payload: character
    }
}

export const removeFavorite = (id) => {
    return {
        type: REMOVE_FAVORITE,
        payload: id
    }
}

export const filterFavoriteGender = (gender)=>{
    return {
        type: FILTER_FAVORITE_GENDER,
        payload: gender
    }
}

export const filterFavoriteAscendant = ()=>{
    return {
        type: FILTER_FAVORITE_ASCENDANT
    }
}

export const filterFavoriteDescendant = ()=>{
    return {
        type: FILTER_FAVORITE_DESCENDANT
    }
}   

export const restartMatchedFav = ()=>{ //for filters
    return {
        type: RESTART_MATCHED_FAV
    }
}
