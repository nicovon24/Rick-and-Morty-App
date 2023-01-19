import {ADD_FAV, REMOVE_FAV} from "./actions.js"

const initialState = {
    listFavs: []
    // totalFavs: 0
    // totalClicks: 0
}

const rootReducer = (state = initialState, {type, payload})=>{
    switch(type){
        case ADD_FAV: 
            //* if it is already in the obj, we remove it
            return {
                ...state,
                listFavs: [...state.listFavs, payload]
            }
        case REMOVE_FAV: 
        //* if it is already in the obj, we remove it
            return {
                ...state,
                listFavs: state.listFavs.filter(el=>el.id!==payload)
            }

        default: return {
            ...state
        }
    }
}

export default rootReducer;