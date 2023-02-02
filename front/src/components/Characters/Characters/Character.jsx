import { useEffect, useState  } from "react";
import styles from "./Characters.module.css"
import {Link, NavLink} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../../../redux/actions";

export default function Character({character, areCreatedOnes, onRemoveChar, showLink}) {
   let [statusColor, setStatusColor] = useState("")
   let [isFavorite, setIsFavorite] = useState(false)

   // let {favorites, setFavorites, setInitialFavorites} = useContext(DataContext)

   let dispatch = useDispatch()

   //getting first episode name

   //getting the status color
   useEffect(()=>{
      switch(character.status){
         case "Alive"  : setStatusColor("alive"); break;
         case "Dead"   : setStatusColor("dead")  ; break;
         case "unknown": setStatusColor("unknown"); break;
         default: setStatusColor("unknown"); break;
      }
   }, [character])

   const handleChangeFav = () => {
      if(isFavorite){
         setIsFavorite(false)
         dispatch(removeFavorite(character.id))
      }
      else{
         setIsFavorite(true)
         dispatch(addFavorite(character))
      }
   }

   let {initialFavorites} = useSelector(state=>state)

   let some = initialFavorites.some(el=>el.id===character.id)

   useEffect(()=>{
      some ? setIsFavorite(true) : setIsFavorite(false)
   }, [some])

   if(character.name) var name = character.name.split(" ") 
   //para que no quede tan largo el nombre y descoloque las cajas, tomo solo el nombre 1 y apellido 1 (2 palabras)

   return (
      <div className={`${styles.character_item} ${areCreatedOnes && styles.character_item_created}`}>
         
         <div>
            {/* in created characters, we do not use the fav and close btn, we can add it! */
               <div className={styles.btn_container}>
                  <div className={styles.fav_container}>
                  <div className={styles.fav_subcontainer}>
                     {!isFavorite 
                     ? <img src={require("../../../assets/unfavorite.png")} alt="fav btn"
                     onClick={handleChangeFav}/>
                     : <img src={require("../../../assets/favorite.png")} alt="fav btn"
                     onClick={handleChangeFav}/>}
                  </div>   


                  <div className={styles.delete_container} >
                     <img src={require("../../../assets/delete_blue.png")}  alt="delete btn"
                     onClick={()=>onRemoveChar(character.id)}/>
                  </div>
               </div>
               </div>
            }
            <img src={character?.image} alt="character img"/>
         </div>
         
         <div className={styles.character_info}>
            <h2 className={styles.character_name}>{`${name[0]} ${name[1] ? name[1] : ""}`}</h2>
            <div>
               <label className={`${styles.character_statusColor} ${styles[statusColor]}`}></label>
               <label>{character?.status} - </label>
               <label>{character?.species}</label>
            </div>
            {/* <div className="character-origin">
               <p className={styles.character_subtitle}>Origin:</p>
               <p>{character.origin.name ? character.origin?.name : character.origin}</p>
            </div> */}
            {/* {character.episode && 
            <>
               <div className="character-num_episodes">
                  <p className={styles.character_subtitle}>N of episodes:</p>
                  <p>{character?.episode.length}</p>
               </div>
            </>
            } */}
            
            {!areCreatedOnes ? 
            <div className={styles.btn_details_container}>
               <Link to={`/characters/${character.id}`} className={`${styles.btn_details} btn_animated_border`}>View details</Link>
            </div>
            : 
            <div className="character-id">
               <p className={styles.character_subtitle}>ID:</p>
               <p>{character.id}</p>
            </div>}
         </div>
      </div>
   );
}