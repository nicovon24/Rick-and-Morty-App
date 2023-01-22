import { useEffect, useState  } from "react";
import styles from "./Characters.module.css"
import {Link} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite, deleteChar } from "../../../redux/actions";

export default function Character({character, areCreatedOnes, onRemoveChar}) {
   let [firstEpisodeName, setFirstEpisodeName] = useState("") 
   let [statusColor, setStatusColor] = useState("")
   let [isFavorite, setIsFavorite] = useState(false)

   // let {favorites, setFavorites, setInitialFavorites} = useContext(DataContext)

   let dispatch = useDispatch()

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

   const handleRemoveChar = () => {
      dispatch(deleteChar(character.id))
      dispatch(removeFavorite(character.id))
   }

   let {initialFavorites} = useSelector(state=>state)

   let some = initialFavorites.some(el=>el.id===character.id)

   useEffect(()=>{
      some ? setIsFavorite(true) : setIsFavorite(false)
   }, [some])

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
                     onClick={handleRemoveChar}/>
                  </div>
               </div>
               </div>
            }
            <Link to={`/characters/${character.id}`} className={styles.character_link_details}><img src={character?.image} alt="character img"/></Link>
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
                  <p className={styles.character_subtitle}>Number of episodes:</p>
                  <p>{character?.episode.length}</p>
               </div>
            </>
            }
            {!areCreatedOnes ? 
            <></>
            // TODO IMPLEMENTAR
            // <div>
            //     <p className={styles.character_subtitle}>Number of visits:</p>
            //     <p></p>
            // </div>
            : <div className="character-id">
               <p className={styles.character_subtitle}>ID:</p>
               <p>{character.id}</p>
            </div>}
         </div>
      </div>
   );
}