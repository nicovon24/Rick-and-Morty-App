import { useEffect, useState, useContext } from "react";
// import {useDispatch, useSelector} from "react-redux"
// import {addFav, removeFav} from "../../../redux/actions.js"
import {DataContext} from "../../../context"
import styles from "./Characters.module.css"
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faClose } from '@fortawesome/free-solid-svg-icons'

export default function Character({character, areCreatedOnes, onRemoveChar}) {
   let [firstEpisodeName, setFirstEpisodeName] = useState("") 
   let [statusColor, setStatusColor] = useState("")
   let [isFavorite, setIsFavorite] = useState(false)

   let {favorites, setFavorites} = useContext(DataContext)

   //getting first episode name
   if(character.episode){
      let firstEpisodeURL  = character.episode[0]
      fetch(firstEpisodeURL)
         .then(resp=>resp.json())
         .then(data=>setFirstEpisodeName(data.name))
   }

   //getting the status color
   useEffect(()=>{
      switch(character.status){
         case "Alive"  : setStatusColor("alive"); break;
         case "Dead"   : setStatusColor("dead")  ; break;
         case "unknown": setStatusColor("unknown"); break;
         default: setStatusColor("unknown"); break;
      }
   }, [character])

   const handleChangeFav = ()=> {
      if(isFavorite){
         setFavorites([...favorites.filter(el=>el.id!==character.id)])
         setIsFavorite(false)
      }
      else{
         setFavorites([...favorites, character])
         setIsFavorite(true)
      }
   }

   let some = favorites.some(el=>el.id===character.id)

   useEffect(()=>{
      some ? setIsFavorite(true) : setIsFavorite(false)
   }, [some])

   return (
      <div className={`${styles.character_item} ${areCreatedOnes && styles.character_item_created}`}>
         
         <div>
            {/* in created characters, we do not use the fav and close btn, we can add it! */
               <>
                  <button  className={`${styles.character_fav} ${!isFavorite ? styles.character_fav_inactive : styles.character_fav_active} ${styles.character_btn}`}
                  onClick={()=>handleChangeFav()}>
                     <FontAwesomeIcon icon={faHeart}/>
                  </button>


                  <div className={styles.btn_close_container}>
                     <button className={`${styles.character_close} ${styles.character_btn}`}><FontAwesomeIcon icon={faClose}
                     onClick={()=>onRemoveChar(character.id)}/></button>
                  </div>
               </>
            }
            <Link to={`/characters/${character.id}`}><img src={character?.image} alt=""/></Link>
         </div>
         
         <div className={styles.character_info}>
            <h2 className={styles.character_name}>{character?.name}</h2>
            <div>
               <label className={`${styles.character_statusColor} ${styles[statusColor]}`}></label>
               <label>{character?.status} - </label>
               <label>{character?.species}</label>
            </div>
            <div className="character-origin">
               <p className={styles.character_subtitle}>Origin:</p>
               <p>{character.origin.name ? character.origin?.name : character.origin}</p>
            </div>
            {character.episode && 
            <>
               <div className="character-first_episode">
                  <p className={styles.character_subtitle}>First seen in:</p>
                  <p>{firstEpisodeName}</p>
               </div>
               <div className="character-num_episodes">
                  <p  className={styles.character_subtitle}>Number of episodes:</p>
                  <p>{character?.episode.length}</p>
               </div>
            </>
            }
            {areCreatedOnes && <div className="character-id">
               <p className={styles.character_subtitle}>ID:</p>
               <p>{character.id}</p>
            </div>}
         </div>
      </div>
   );
}


// const dispatch = useDispatch()

// let listFavs = useSelector(state=>state.listFavs)

// useEffect(()=>{
//    dispatch(addFav(character))
//    dispatch(removeFav(character.id))
// }, [])

// const handleChangeFav = (id)=>{
//    if(isFavorite){
//       setIsFavorite(false)
//       dispatch(removeFav(id))
//    } else{
//       setIsFavorite(true)
//       dispatch(addFav(character))
//    }
// }

// useEffect(()=>{
// }, [listFavs])