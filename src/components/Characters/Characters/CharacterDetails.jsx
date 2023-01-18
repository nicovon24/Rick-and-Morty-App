import { useEffect, useState } from "react"
import {useParams, useNavigate} from "react-router-dom"
import styles from "./Characters.module.css"
import Navbar from "../../Navbar/Navbar.jsx"

export default function CharacterDetails(){
    let [character, setCharacter] = useState({})
    let {id} = useParams()
    let navigateToHome = useNavigate()
    
    useEffect(()=>{
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then(response=>response.json())
            .then(data=>setCharacter({...data}))
    }, [])
    
    const handleBackToHome = ()=> navigateToHome("/characters")
    
    return(
        <>
            <Navbar/>
            <div className={styles.details_container}>
                <p className={styles.details_name}>{character?.name}</p>
                <div className={styles.card}>
                    <img src={character?.image} alt="character img"></img>
                    <table>
                        <tbody>
                            <tr>
                                <td className={styles.separate_first}>STATUS:</td>
                                <td className={styles.separate_second}>{character?.status}</td>
                            </tr>
                            <tr>
                                <td className={styles.separate_first}>SPECIE:</td>
                                <td className={styles.separate_second}>{character?.gender}</td>
                            </tr>
                            <tr>
                                <td className={styles.separate_first}>ORIGIN:</td>
                                <td className={styles.separate_second}>{character.origin?.name}</td>
                            </tr>
                            <tr>
                                <td className={styles.separate_first}>LOCATION:</td>
                                <td className={styles.separate_second}>{character.location?.name}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <button className={styles.btn_backHome} onClick={handleBackToHome}>Back to characters</button>
            </div>
        </>
    )
}