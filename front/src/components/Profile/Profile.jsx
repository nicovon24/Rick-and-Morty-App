import styles from "./Profile.module.css"
import {useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"
import Navbar from "../Navbar/Navbar.jsx"
import TitlesFlip from "../Titles_Flip/TitlesFlip"

export default function Profile(){
    let {profile} = useSelector(state=>state)
    let navigateToHome = useNavigate()
    const handleBackToHome = ()=> navigateToHome("/characters")
    return(
        <>
            <Navbar/>
            <div className={styles.container}>
                <TitlesFlip word={"Profile"} classes={styles.subtitle}/>
                {/* <h1 className={styles.subtitle}>User Profile</h1> */}
                <div className={styles.card}>
                    <div className={styles.card_img_container}>
                        <div className={styles.card_img_fondo}></div>
                        <img src={profile.image} className={styles.image} alt="profile img"/>
                    </div>
                    <h1 className={styles.name}>{profile.name}</h1>
                    {/* <ul>
                        
                        <li className={styles.age}>{profile.age} years old</li>
                        <li className={styles.country}>From {profile.country}</li>
                    </ul> */}
                    <table>
                        <tbody>
                            <tr>
                                <td className={styles.separate_first}>Age:</td>
                                <td className={styles.separate_second}>{profile?.age} years old</td>
                            </tr>
                            <tr>
                                <td className={styles.separate_first}>Country:</td>
                                <td className={styles.separate_second}>{profile?.country}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <button className="btn_backHome" onClick={handleBackToHome}>Back to characters</button>
            </div>
        </>
    )
}