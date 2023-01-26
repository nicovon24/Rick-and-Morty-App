import { useState } from "react"
import { useDispatch } from "react-redux"
import { createChar, postData } from "../../../redux/actions"
import styles from "./Forms.module.css"

let arrImg     = [
    ['Bojack', 'https://i1.sndcdn.com/artworks-000677277973-s3s4ew-t500x500.jpg'],
    ['Homero', 'https://i.pinimg.com/564x/6d/fa/bd/6dfabdd00e70fddc4cb6ab65fa338a27.jpg'], 
    ['Ron Weasley', 'https://i.pinimg.com/564x/c9/08/58/c908586ce9e195a0f9ea43bb98e7efa5.jpg'],
    ['Jimenez', 'https://cdns-images.dzcdn.net/images/artist/c7ee19e5a26ed4c381f1ddf2f34c03da/500x500.jpg']
]

let API_URL_CREATED_CHAR = `http://localhost:5000/api/created_char/` //API_URL_CREATED_CHAR

export default function FormAddCharacter(){
    let [inputs, setInputs] = useState({id: 1002, name: "", status: "", species: "", origin: "", gender: "", image: ""}) //img inicial

    //arrays to define the select options
    let arrSpecies = ['Human', 'Alien', 'Humanoid', 'Animal', 'Robot', 'Disease', 'Mythological Creature', 'Poopybutthole', 'unknown', 'Cronenberg'].sort((a,b)=>a.localeCompare(b))
    let arrStatus  = ['Alive', 'Dead', 'unknown']
    let arrOrigins = ['Earth (C-137)', 'Earth (Replacement Dimension)', 'Earth (K-83)', 'unknown']
    let arrGender  = ["Male", "Female", "Genderless", "Unknown"]

    let isFormFilled = inputs.name!=="" && inputs.status!=="" && inputs.species!=="" && inputs.origin!=="" && inputs.gender!=="" && inputs.image!=="" //true or false

    let dispatch = useDispatch()

    //function to submit
    const handleSubmit = e=>{
        e.preventDefault()
        let id = 1002
        //local storage only supports strings, use JSON.stringify and JSON.parse
        if(isFormFilled){
            let createdChars = JSON.parse(localStorage.getItem('createdCharacters'))
            if(createdChars.length>0) {
                id = createdChars[createdChars.length-1].id+1
                if(!id) id=1002
            }
            let newItems = [...createdChars, {...inputs, id: id, url: API_URL_CREATED_CHAR + "?id=" + id}]
            
            localStorage.setItem('createdCharacters', JSON.stringify(newItems))

            dispatch(postData(inputs))

            setInputs(
                {name: "", id: "", status: "", species: "", origin: "", gender: "", image: ""
            })
        }
    }

    const handleChangeInput = e=>{
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }
    
    return(
        <form className={styles.character_form} onSubmit={handleSubmit} name="add_form" 
        method="POST" action="add">
            <p className={styles.character_filterTitle}>Add a character</p>
            <label className={styles.add_property} htmlFor="name">Name:</label>
            <input className={`input_primary ${!inputs.name ? "input_invalid" : "input_valid"}`} value={inputs.name} htmlFor="name" name="name" onChange={handleChangeInput} type="text" placeholder="Example: Rick..."></input>

            <label className={styles.add_property} htmlFor="species">Species:</label>
            <select className={`input_primary ${!inputs.species ? "input_invalid" : "input_valid"}`} value={inputs.species} name="species" onChange={handleChangeInput}>
                <option value="">Select an option...</option>
                {arrSpecies.map((el,index)=><option value={el} key={index}>{el}</option>)}
            </select>

            <label className={styles.add_property} htmlFor="status">Status:</label>
            <select className={`input_primary ${!inputs.status ? "input_invalid" : "input_valid"}`} name="status" value={inputs.status} onChange={handleChangeInput}>
                <option value="">Select an option...</option>
                {arrStatus.map((el,index)=><option value={el} key={index}>{el}</option>)}
            </select>

            <label className={styles.add_property} htmlFor="origin">Origin:</label>
            <select className={`input_primary ${!inputs.origin ? "input_invalid" : "input_valid"}`} value={inputs.origin} name="origin" onChange={handleChangeInput}>
                <option value="">Select an option...</option>
                {arrOrigins.map((el,index)=><option value={el} key={index}>{el}</option>)}
            </select>

            <label className={styles.add_property} htmlFor="gender">Gender:</label>
            <select className={`input_primary ${!inputs.gender ? "input_invalid" : "input_valid"}`} value={inputs.gender} name="gender" onChange={handleChangeInput}>
                <option value="">Select an option...</option>
                {arrGender.map((el,index)=><option value={el.toLowerCase()} key={index}>{el}</option>)}
            </select>

            <label className={styles.add_property}>Image:</label> 
            <select onChange={handleChangeInput} value={inputs.image} className={`input_primary ${!inputs.gender ? "input_invalid" : "input_valid"}`} name="image" id="">
                <option value="">Select an option...</option>
                {arrImg.map((el,index)=><option value={el[1]} key={index}>{el[0]}</option>)}
            </select>

            {isFormFilled ? "" : <p className={styles.uncompleted_data}>Uncompleted data</p>}

            <div>
                <button className="animated_btn" type="submit" name="submit"><label>Submit</label></button>
            </div>
        </form>
    )
}