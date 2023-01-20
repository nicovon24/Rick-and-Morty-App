// import {useSelector} from "react-redux"
import { useContext } from "react"
import { DataContext } from "../../context"
import styles from "./Favorites.module.css"
import Navbar from "../../components/Navbar/Navbar.jsx"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTriangleExclamation} from '@fortawesome/free-solid-svg-icons'
import CharacterFavorites from "./CharacterFavorites"
import { useState } from "react"
import { useEffect } from "react"

export default function Favorites(){
    let {favorites, setFavorites, initialFavorites} = useContext(DataContext)
    let [order, setOrder] = useState("")
    let [gender, setGender] = useState("")

    const handleChangeOrder = (e)=>setOrder(e.target.value)
    const handleChangeGender = (e)=>{
        setGender(e.target.value)
    }

    useEffect(()=>{
        setFavorites([...initialFavorites])

        //ordering by order
        switch(order){
            case "ascendent":
                setFavorites([...initialFavorites.sort((a,b)=>a.name.localeCompare(b.name))])
                break;
            case "decrement":
                setFavorites([...initialFavorites.sort((a,b)=>b.name.localeCompare(a.name))])
                break;
            default:
                break;
        }

        //ordering by gender
        switch(gender){
            case "genderless":
                setFavorites([...initialFavorites.filter(char=>char.gender.toLowerCase()==="genderless")])
                break;
            case "male":
                setFavorites([...initialFavorites.filter(char=>char.gender.toLowerCase()===gender)])
                break;
            case "female":
                setFavorites([...initialFavorites.filter(char=>char.gender.toLowerCase()===gender)])
                break;
            case "unknown":
                setFavorites([...initialFavorites.filter(char=>char.gender.toLowerCase()===gender)])
                break;
            default:
                break;
        }
    }, [order, gender])
    return(
        <>
            <Navbar/>
            <div className={`${styles.favorites_container}`}>
                <h1 className={styles.subtitle}>FAVORITES</h1>

                {initialFavorites.length>0 ?
                <>
                    <form className={styles.form_favorites}> 
                        <select value={order} name="order" onChange={handleChangeOrder}>
                            <option>Order by letters...</option>
                            <option value="ascendent">ascendent</option>
                            <option value="decrement">decrement</option>
                        </select>

                        <select value={gender} name="gender" onChange={handleChangeGender}>
                            <option>Order by sex...</option>
                            <option value="genderless">genderless</option>
                            <option value="male">male</option>
                            <option value="female">female</option>
                            <option value="unknown">unknown</option>
                        </select>
                    </form>
                    {favorites.length>0 ?
                    <div className={`${styles.favorites_subcontainer}`}>
                        {favorites.map(el=><CharacterFavorites character={el} key={el.id}/>)}
                    </div>
                    : <div className={styles.none_favorites}>
                    <FontAwesomeIcon icon={faTriangleExclamation}/><p className={styles.none_favorites}>No favorites matches the condition</p>
                    </div>}
                </>
                : <div className={`${styles.none_favorites}`}>
                <FontAwesomeIcon icon={faTriangleExclamation}/><p className={styles.none_favorites}>The user has marked none favorites yet</p>
                </div>}
            </div>
        </>
                    
    )
}