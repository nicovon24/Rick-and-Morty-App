import { useState } from "react"
import styles from "../Login/Login.module.css"
import styles2 from "./Sign_in.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faXmark } from '@fortawesome/free-solid-svg-icons'

export default function SignIn(){
    let [isHiddenActive, setIsHiddenActive] = useState(true)
    let [inputs, setInputs] = useState({
        username: "",
        email: "",
        gender: "",
        password: ""
    })
    let [errors, setErrors] = useState({
        username: "",
        email: "",
        gender: "",
        password: ""
    })

    let isFormFilled = inputs.username!=="" && inputs.email!=="" && inputs.gender!=="" && inputs.password!==""

    const handleChangeInput = e=>{
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }

    return(
        <div className={styles2.signIn_container}>
            <div className={styles.subcontainer}>
                <h1 className={styles.h1}>USER SIGN IN</h1>
                <form className={styles.form} >
                    {/* <div className={styles2.name_container}>
                        <input className={`${styles.input} ${styles2.input_name}`} placeholder="First name..." name="fname"
                        maxLength={15}></input>

                        <input className={`${styles.input} ${styles2.input_name}`}  placeholder="Last name..." name="lname" maxLength={25}></input>
                    </div> */}
                    <input className={`${styles.input} ${styles.input_name}`} placeholder="Username..." name="username" maxLength={25} onChange={handleChangeInput}
                    ></input>

                    <input className={`${styles.input} ${styles.input_name}`} placeholder="Email..." name="email" type="email" maxLength="30" onChange={handleChangeInput}
                    ></input>

                    <div className={styles2.sign_in_gender}>
                        <div className={styles2.sign_in_gender_subcontainer}>
                            <label className={styles.sign_in_gender_option}>Male</label>
                            <input type="radio" name="gender" value="male" id=""
                            onChange={handleChangeInput} />
                        </div>

                        <div className={styles2.sign_in_gender_subcontainer}>
                            <label className={styles2.sign_in_gender_option}>Female</label>
                            <input type="radio" name="gender" value="female" id=""
                            onChange={handleChangeInput} />
                        </div>

                        <div className={styles2.sign_in_gender_subcontainer}>
                            <label className={styles2.sign_in_gender_option}>No binary</label>
                            <input type="radio" name="gender" value="no binary" id=""
                            onChange={handleChangeInput} />
                        </div>
                    </div>

                    <div className={styles.divPassword}>
                        <input  className={`${styles.input_password}`} name="password" 
                        type={isHiddenActive ? "password" : "text"}placeholder="Password..." 
                        onChange={handleChangeInput}
                        ></input>

                        <button className={styles.btn_hide} type="button" onClick={()=>setIsHiddenActive(prev=>!prev)}>
                            {<FontAwesomeIcon className={styles.hide_icon} icon={isHiddenActive ? faEye : faXmark}/>}
                        </button>
                    </div>

                    {isFormFilled ? "" : <p className={styles2.uncompleted_data}>Uncompleted data</p>}
                    
                    <button className={`${styles.login}`} type="submit"><label>Sign in</label></button>

                </form>
            </div>
        </div>
    )
}