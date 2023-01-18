import { useContext } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft, faBackwardFast, faForwardFast } from '@fortawesome/free-solid-svg-icons'
import {DataContext} from "../../../context.js"
import styles from "./Page_number.module.css"

export default function Page(){
    let {page, setPage} = useContext(DataContext)

    const addPage = ()=> setPage(prev=>prev<41 ? prev+1 : prev)
    const decreasePage = ()=>setPage(prev=>prev>1 ? prev-1 : prev)

    return(
        <div className={styles.page_container}>
            <div></div>
            <div className={styles.page_menu}>
                <div className={styles.page_menu_top}> 
                    <button className={`${styles.page_numBtn} ${styles.page_previous}`} onClick={decreasePage}>
                        <FontAwesomeIcon icon={faArrowLeft} className="page-btnIcon" />
                        Previous
                    </button>

                    <div>
                        <label className={`${styles.page_num} ${styles.page_numStart}`}>{page} </label>
                        <label className={styles.page_num}> of 41</label>
                    </div>
                    
                    <button className={`${styles.page_numBtn} ${styles.page_next}`} onClick={addPage}>
                        Next
                        <FontAwesomeIcon icon={faArrowRight} className="page-btnIcon" />
                    </button><br></br>
                </div>
                <div className={styles.page_menu_bottom}>
                    <button onClick={()=>setPage(1)}><FontAwesomeIcon icon={faBackwardFast}/> Back to 1</button>
                    <button onClick={()=>setPage(41)}>To 41 <FontAwesomeIcon icon={faForwardFast}/></button>
                </div>
            </div>
            
        </div>
    )
}