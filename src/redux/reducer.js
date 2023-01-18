import {CHANGE_FAV} from "./actions.js"

const initialState = {
    listFavs: {},
    totalFavs: 0
    // totalClicks: 0
}

const rootReducer = (state = initialState, action)=>{
    switch(action.type){
        case CHANGE_FAV: 
            let listFavs = state.listFavs
            let id = action.payload
            //* if it is already in the obj, we remove it
            if(listFavs.hasOwnProperty(id)){
                state.totalFavs--
                return{ id, ...state } //removing the char with that id
            } 
            //* else, we add it
            else{
                state.totalFavs++
                return { ...state, id: true }
            }

        default: return {
            ...state
        }
    }
}

export default rootReducer;