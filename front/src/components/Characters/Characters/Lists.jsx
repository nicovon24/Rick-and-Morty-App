import { useState, useEffect } from 'react';
import styles from "./Characters.module.css"
import Character from './Character.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { deleteChar, removeCreatedChar, removeFavorite } from '../../../redux/actions.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTriangleExclamation} from '@fortawesome/free-solid-svg-icons'

export function NormalCharactersList(){

    let dispatch = useDispatch()
    let {matched_characters} = useSelector(state=>state)

    const handleRemoveChar = (id) => {
        dispatch(deleteChar(id))
        dispatch(removeFavorite(id))
     }

    if(matched_characters.length>0){
        var map = matched_characters.map((person, index)=><Character character={person} 
        onRemoveChar={()=>handleRemoveChar(person?.id)} 
        key={index}/>)
    }

    return(
        <>
            {map}
        </>
    )
}

export function CreatedCharactersList(){
    let [createdCharacters, setCreatedCharacters] = useState([]);
    let dispatch = useDispatch()
    let {createdChar} = useSelector(state=>state)

    useEffect(()=>{
        setCreatedCharacters([...createdChar])
    }, [])

    const handleRemoveChar = (id)=>{
        dispatch(removeCreatedChar(id))
        setCreatedCharacters([...createdChar.filter(el=>el.id!==id)])
        dispatch(removeFavorite(id))
    }

    if(createdCharacters.length>0){
        var map = createdCharacters.map((person, index)=>{
            return ( <Character character={person}  
            onRemoveChar={()=>handleRemoveChar(person?.id)} 
            key={index} areCreatedOnes={true}/>)
        })
    }

    return(
        <>
            {createdCharacters.length>0 ? map
              : <h2 className={styles.none_characters}><FontAwesomeIcon icon={faTriangleExclamation}/>There is no characters created</h2>
            }
        </>
    )
}