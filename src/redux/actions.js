export let CHANGE_FAV = 'CHANGE_FAV'
// export let ADD_TO_TOTAL_FAVS = 'ADD_TO_TOTAL_FAVS'
// export let ADD_VISIT = 'ADD_VISIT'

export const changeFav = (id)=>{ //*adds or remove the fav
    return { type: CHANGE_FAV, payload: id }  
}

// export const addToTotalFavs = ()=>{
//     return { type: ADD_TO_TOTAL_FAVS }  
// }

// export const addVisit = ()=>{
//     return { type: ADD_VISIT }  
// }