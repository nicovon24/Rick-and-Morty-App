export let ADD_FAV = 'ADD_FAV'
export let REMOVE_FAV = 'REMOVE_FAV'

export const addFav = (character)=>{ //*adds or remove the fav
    return { 
        type: ADD_FAV, 
        payload: character 
    }  
}

export const removeFav = (id)=>{ //*adds or remove the fav
    return { 
        type: REMOVE_FAV, 
        payload: id 
    }  
}