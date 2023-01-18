import { useContext, useEffect, useState } from 'react'
import {DataContext} from "../../../context.js"
import styles from "./Forms.module.css"

export default function SearchCharacter(){
    let [matchedCharacters, setMatchedCharacters] = useState([]) //characters which match the filter
    let {setCharacters, initialCharacters, character, setCharacter} = useContext(DataContext)

    const handleSubmit = e=>{
        e.preventDefault()
        if(character!==""){
            setMatchedCharacters([])
            fetch(`https://rickandmortyapi.com/api/character/?name=${character}`)
                .then(resp=>resp.json())
                .then(data=>{
                    if(data.results) setMatchedCharacters([...data.results])
                    else setMatchedCharacters([])
                })
                .catch(err=>setMatchedCharacters([]))
        }
        else setMatchedCharacters([...initialCharacters])
    }

    useEffect(()=>{
        setCharacters([...matchedCharacters])
    }, [matchedCharacters])

    useEffect(()=>{
        if(!character) setCharacters([...initialCharacters]) //the input null, we restore the characters
    }, [character])

    return(
        <>
            <form className={styles.character_form} onSubmit={handleSubmit}>
                <p className={styles.character_filterTitle}>Search a character by name</p>
                <input className={`input_primary ${!character ? "input_invalid" : "input_valid"}`} value={character} type="text" placeholder="Example: Rick..." 
                onChange={e=>setCharacter(e.target.value)}></input>
                {character ? "" : <p className={styles.uncompleted_data}>Uncompleted data</p>}
                <div>
                    <button className="animated_btn" type="submit"><label>Submit</label></button>
                </div>
            </form>
        </>
    )
}