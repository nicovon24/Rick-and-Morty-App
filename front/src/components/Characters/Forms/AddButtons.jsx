import styles from "./Forms.module.css"

export default function AddButtons({onShowCreatedChars, isActiveShowAll}){
    return(
        <div className={styles.character_form}>
            <p className={styles.character_filterTitle}>Created characters actions:</p>
            <div>
                <button className={`btn_animated_border ${styles.btn} ${styles.add_buttons_btn}`} onClick={onShowCreatedChars}>
                    {isActiveShowAll ? 'Show the created': 'Show all characters'}
                </button>
            </div>
        </div>
    )
}