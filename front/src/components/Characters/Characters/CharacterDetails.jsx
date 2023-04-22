import { useEffect } from "react"
import {useParams, useNavigate} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import styles from "./Characters.module.css"
import Navbar from "../../Navbar/Navbar.jsx"
import { getCharDetails } from "../../../redux/actions"

export default function CharacterDetails(){
    let {id} = useParams()
    let navigateToHome = useNavigate()
    let dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(getCharDetails(id))
    }, [dispatch, id])
    
    const handleBackToHome = ()=> navigateToHome("/characters")
    let character = useSelector(state=>state.charDetails)
    
    return(
        <>
            <Navbar/>
            <div className={styles.details_container}>
                <p className={styles.details_name}>{character?.name}</p>
                <div className={styles.card}>
                    <div className={styles.card_img_container}>
                        <div className={styles.card_img_fondo}></div>
                        <img src={character?.image} alt="character img"></img>
                    </div>
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
                <button className="btn_backHome" onClick={handleBackToHome}>Back to characters</button>
            </div>
        </>
    )
}