import { useContext } from "react"
import {DataContext} from "../../../context.js"
import styles from "./Forms.module.css"

export default function AddButtons({onShowCreatedChars, isActiveShowAll}){
    return(
        <div className={styles.character_form}>
            <p className={styles.character_filterTitle}>Created characters actions:</p>
            <div>
                <button className={`animated_btn ${styles.add_buttons_btn}`} onClick={onShowCreatedChars}>
                    {isActiveShowAll ? <label>Show the created</label> : <label>Show all characters</label>}
                </button>
            </div>
        </div>
    )
}