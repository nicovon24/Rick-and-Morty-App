import axios from "axios"

export let GET_INITIAL_CHARS= 'GET_INITIAL_CHARS'
export let GET_CHAR_DETAILS = 'GET_CHAR_DETAILS'
export let DELETE_CHAR = 'DELETE_CHAR'
export let ADD_PAGE_CHAR= 'ADD_PAGE_CHAR'
export let DECREASE_PAGE_CHAR = 'DECREASE_PAGE_CHAR'
export let MOVE_PAGE_CHAR = 'MOVE_PAGE_CHAR'
export let FETCH_PAGE = 'FETCH_PAGE'
export let SEARCH_CHAR = 'SEARCH_CHAR'
export let SAVE_SEARCH_INPUT = 'SAVE_SEARCH_INPUT'

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