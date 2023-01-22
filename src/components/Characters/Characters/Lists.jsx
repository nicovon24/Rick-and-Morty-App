import { useState, useEffect } from 'react';
import styles from "./Characters.module.css"
import Character from './Character.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { deleteChar, removeFavorite } from '../../../redux/actions.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTriangleExclamation} from '@fortawesome/free-solid-svg-icons'

export function NormalCharactersList(){

    let dispatch = useDispatch()
    let {matched_characters} = useSelector(state=>state)

    const handleRemoveChar = (id) => {
        dispatch(deleteChar(id))
        dispatch(removeFavorite(id))
     }

    return(
        <>
            {matched_characters.map((person, index)=><Character character={person} 
            onRemoveChar={()=>handleRemoveChar(person.id)} 
            key={index}/>)}
        </>
    )
}

export function CreatedCharactersList(){
    let [createdCharacters, setCreatedCharacters] = useState([]);
    let dispatch = useDispatch()

    useEffect(()=>{
        let newData = JSON.parse(localStorage.getItem('createdCharacters'))
        if (newData) {
            setCreatedCharacters([...newData])
        }
    }, [])

    const handleRemoveChar = (id)=>{
        let filter = createdCharacters.filter(el=>el.id!==id)
        localStorage.setItem('createdCharacters', JSON.stringify(filter))
        setCreatedCharacters([...filter])
        dispatch(removeFavorite(id))
    }

    return(
        <>
            { createdCharacters.length>0 ? createdCharacters.map((person, index)=><Character character={person}  
            onRemoveChar={()=>handleRemoveChar(person.id)} 
            key={index} areCreatedOnes={true}/>)
            : <h2 className={styles.none_characters}><FontAwesomeIcon icon={faTriangleExclamation}/>There is no characters created</h2>}
        </>
    )
}