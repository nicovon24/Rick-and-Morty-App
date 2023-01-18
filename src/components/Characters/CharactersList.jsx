import { useState, useEffect, useContext  } from 'react'
import {DataContext} from "../../context.js"
import SearchCharacter from "./Forms/SearchCharacter.jsx"
import FormAddCharacter from "./Forms/AddCharacter.jsx"
import AddButtons from './Forms/AddButtons.jsx';
import Page from "./Page_number/Page_number.jsx";
import styles from "./Characters.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTriangleExclamation} from '@fortawesome/free-solid-svg-icons'
import {NormalCharactersList, CreatedCharactersList} from "././Characters/Lists.jsx"

export default function CharactersList() {
   let {page, character, characters, setCharacters} = useContext(DataContext)
   let [isActiveShowAll, setIsActiveShowAll] = useState(true)

   useEffect(()=>{
      fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
         .then(resp=>resp.json())
         .then(data=>{
            setCharacters([...data.results])
         })
   }, [page])

   return(
      <div className={styles.characters_container}>
         <p className={styles.subtitle}>{isActiveShowAll ? "Characters" : "Created Characters"}</p>
         <div className={styles.characters_subcontainer}>

            {/* search and filter values */}
            <div className={styles.search_mobile}><SearchCharacter/></div> {/* we show this in mobile, it is at the beginning before the chars list */}
            <div className={styles.characters_menu}>
               <div className={styles.search_desktop}><SearchCharacter /></div> {/* we show this in desktop */}
               <FormAddCharacter/>
               <AddButtons onShowCreatedChars={()=>setIsActiveShowAll(prev=>!prev)} isActiveShowAll={isActiveShowAll}/>
            </div>

            {/* characters list */}
            {characters.length>0 ?
               <div className={styles.characters_grid}>
                  {isActiveShowAll ? <NormalCharactersList/> : <CreatedCharactersList/>}
               </div>

               : <h2 className={styles.none_characters}><FontAwesomeIcon icon={faTriangleExclamation}/>There is no characters that matched the condition</h2>
            }
            
         </div>
         
         {!character && <Page/>}
      </div>
   );
}
