import Character from './Character.jsx';
import {useContext} from 'react'
import {DataContext} from "../../../context.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTriangleExclamation} from '@fortawesome/free-solid-svg-icons'
import styles from "./Characters.module.css"
import { useState } from 'react';
import { useEffect } from 'react';

export function NormalCharactersList(){
    let {characters, setCharacters} = useContext(DataContext)
    const handleRemoveChar = (id)=> setCharacters([...characters.filter(el=>el.id!==id)])
    return(
        <>
            {characters.map((person, index)=><Character character={person} onRemoveChar={handleRemoveChar} key={index}/>)}
        </>
    )
}

export function CreatedCharactersList(){
    let [createdCharacters, setCreatedCharacters] = useState([]);

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