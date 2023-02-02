import styles from "./Favorites.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTriangleExclamation} from '@fortawesome/free-solid-svg-icons'
import CharacterFavorites from "./CharacterFavorites"
import { useState } from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { filterFavoriteAscendant, filterFavoriteDescendant, filterFavoriteGender, restartMatchedFav } from "../../redux/actions"

export default function Favorites(){
    // let {favorites, setFavorites, initialFavorites} = useContext(DataContext)
    let {matchedFavorites, initialFavorites} = useSelector(state=>state)
    let [order, setOrder] = useState("")
    let [gender, setGender] = useState("")

    const handleChangeOrder = (e) => setOrder(e.target.value)
    const handleChangeGender = (e)=> setGender(e.target.value)

    let dispatch = useDispatch()

    useEffect(()=>{
        dispatch(restartMatchedFav())
        //ordering by order
        switch(order){
            case "ascendent":
                dispatch(filterFavoriteAscendant())
                break;
            case "decrement":
                dispatch(filterFavoriteDescendant())
                break;
            default:
                break;
        }

        //ordering by gender
        switch(gender){
            case "genderless":
                dispatch(filterFavoriteGender("genderless"))
                break;
            case "male":
                dispatch(filterFavoriteGender("male"))
                break;
            case "female":
                dispatch(filterFavoriteGender("female"))
                break;
            case "unknown":
                dispatch(filterFavoriteGender("unknown"))
                break;
            default:
                break;
        }
    }, [order, gender])
    
    return(
        <>
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
                            <option>Order by gender...</option>
                            <option value="genderless">genderless</option>
                            <option value="male">male</option>
                            <option value="female">female</option>
                            <option value="unknown">unknown</option>
                        </select>
                    </form>
                    {matchedFavorites.length>0 ?
                    <div className={`${styles.favorites_subcontainer}`}>
                        {matchedFavorites.map(el=><CharacterFavorites character={el} key={el.id}/>)}
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