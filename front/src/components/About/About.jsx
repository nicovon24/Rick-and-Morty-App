import Navbar from "../Navbar/Navbar.jsx"
import styles from "./About.module.css"
import { useNavigate } from "react-router-dom"

export default function About(){
    let homeNavigate = useNavigate()
    return(
        <>
            <Navbar/>
            <div className={styles.aboutContainer}>
                <div className={styles.about}>
                    <img src={require("../../assets/about.png")} alt="img about"/>
                    <div className={styles.about_text}>
                        <h2>About us</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis eos quibusdam ipsam ad impedit eveniet, saepe maxime nihil quos magni ea cumque exercitationem iure molestias, velit, placeat nemo nisi nam?
                        Ad necessitatibus voluptas placeat, harum totam magni distinctio rem assumenda, eaque laboriosam corrupti laudantium nulla fugit provident mollitia iure eveniet repellendus at ea ratione, consequatur quod eligendi voluptatibus. Placeat, consequatur!
                        Obcaecati dolores ullam iure minus nisi dignissimos velit deserunt magnam nemo repellendus quam doloremque quae possimus cumque quisquam similique iste modi excepturi corrupti, voluptatum architecto quis suscipit! Nam, dolore quaerat.</p>  
                        <button className="animated_btn" onClick={()=>homeNavigate("/")}><label>Learn more</label></button>
                    </div>
                </div>
            </div>
        </>
    )
}