import axios from "axios"

export let GET_ALL_CHARS= 'GET_ALL_CHARS'
export let GET_CHAR_DETAILS = 'GET_CHAR_DETAILS'

export const getCharDetails = (id)=>{
    return async function(dispatch){
        let response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        console.log(response)
        return dispatch({
                type: GET_CHAR_DETAILS,
                payload: response.data
            }
        )
    }
}

