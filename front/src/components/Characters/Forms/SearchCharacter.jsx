import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getInitialChars, saveSearchInput, searchChar } from '../../../redux/actions.js'
import styles from "./Forms.module.css"

export default function SearchCharacter(){

    let dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getInitialChars())
    }, [])

    const handleChangeInput = e=> {
        dispatch(saveSearchInput(e.target.value))
    }

    let {searchInput} = useSelector(state=>state)

    const handleSubmit = e=>{
        e.preventDefault()
        if(searchInput!=="") dispatch(searchChar(searchInput))
        else dispatch(getInitialChars())
    }

    useEffect(()=>{
        if(!searchInput) dispatch(getInitialChars()) //the input null, we restore the characters
    }, [searchInput])

    return(
        <>
            <form className={styles.character_form} onSubmit={handleSubmit}>
                <p className={styles.character_filterTitle}>Search a character by name</p>
                
                <input className={`input_primary ${!searchInput ? "input_invalid" : "input_valid"}`} value={searchInput} type="text" placeholder="Example: Rick..." 
                onChange={handleChangeInput}></input>
                {searchInput ? "" : <p className={styles.uncompleted_data}>Uncompleted data</p>}

                <div>
                    <button className="animated_btn" type="submit"><label>Submit</label></button>
                </div>
            </form>
        </>
    )
}