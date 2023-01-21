import { useState, useContext } from "react"
import {DataContext} from "../../../context.js"
import styles from "./Forms.module.css"

export default function FormAddCharacter(){
    let [dataNewChar, setDataNewChar] = useState({name: "", status: "", species: "", origin: "", location: "", image: ""})

    //arrays to define the select options
    let arrSpecies = ['Human', 'Alien', 'Humanoid', 'Animal', 'Robot', 'Disease', 'Mythological Creature', 'Poopybutthole', 'unknown', 'Cronenberg'].sort((a,b)=>a.localeCompare(b))
    let arrStatus  = ['Alive', 'Dead', 'unknown']
    let arrOrigins = ['Earth (C-137)', 'Earth (Replacement Dimension)', 'Earth (K-83)', 'unknown']

    let isFormFilled = dataNewChar.name!=="" && dataNewChar.status!=="" && dataNewChar.species!=="" && dataNewChar.origin!=="" && dataNewChar.location!=="" //true or false

    //function to submit
    const handleSubmit = e=>{
        e.preventDefault()
        let id = 10000
        
        //local storage only supports strings, use JSON.stringify and JSON.parse
        if(isFormFilled){
            let createdChars = JSON.parse(localStorage.getItem('createdCharacters'))
            if(createdChars.length>0) id = createdChars[createdChars.length-1].id+1
            let newItems = [...createdChars, {...dataNewChar, id: id}]
            localStorage.setItem('createdCharacters', JSON.stringify(newItems))
            setDataNewChar({name: "", id: "", status: "", species: "", origin: "", location: "", image: ""})
        }
        else console.log("uncompleted data")
    }

    
    return(
        <form className={styles.character_form} onSubmit={handleSubmit} name="add_form">
            <p className={styles.character_filterTitle}>Add a character</p>
            <label className={styles.add_property} htmlFor="name">Name:</label>
            <input className={`input_primary ${!dataNewChar.name ? "input_invalid" : "input_valid"}`} value={dataNewChar.name} htmlFor="name" onChange={e=>setDataNewChar({...dataNewChar, name: e.target.value})} type="text" placeholder="Example: Rick..."></input>

            <label className={styles.add_property} htmlFor="species">Species:</label>
            <select className={`input_primary ${!dataNewChar.species ? "input_invalid" : "input_valid"}`} value={dataNewChar.species} name="species" onChange={e=>setDataNewChar({...dataNewChar, species: e.target.value})}>
                <option value="">Select an option...</option>
                {arrSpecies.map((el,index)=><option value={el} key={index}>{el}</option>)}
            </select>

            <label className={styles.add_property} htmlFor="status">Status:</label>
            <select className={`input_primary ${!dataNewChar.status ? "input_invalid" : "input_valid"}`} name="status" value={dataNewChar.status} onChange={e=>setDataNewChar({...dataNewChar, status: e.target.value})}>
                <option value="">Select an option...</option>
                {arrStatus.map((el,index)=><option value={el} key={index}>{el}</option>)}
            </select>

            <label className={styles.add_property} htmlFor="origin">Origin:</label>
            <select className={`input_primary ${!dataNewChar.origin ? "input_invalid" : "input_valid"}`} value={dataNewChar.origin} name="origin" onChange={e=>setDataNewChar({...dataNewChar, origin: e.target.value})}>
                <option value="">Select an option...</option>
                {arrOrigins.map((el,index)=><option value={el} key={index}>{el}</option>)}
            </select>

            <label className={styles.add_property} htmlFor="location">Location:</label>
            <select className={`input_primary ${!dataNewChar.location ? "input_invalid" : "input_valid"}`} value={dataNewChar.location} name="location" onChange={e=>setDataNewChar({...dataNewChar, location: e.target.value})}>
                <option value="">Select an option...</option>
                {arrOrigins.map((el,index)=><option value={el} key={index}>{el}</option>)}
            </select>

            {/* <label className={styles.add_property}>Image:</label> 
            <label htmlFor="image" className="input_primary">
                Select an image...
                <input type="file" id="image" className={styles.add_file_input} value={dataNewChar.image} onChange={e=>setDataNewChar({...dataNewChar, image: e.target.value})} src="" alt="image" accept=".jpg, .png" name="image"/>
            </label> */}

            {isFormFilled ? "" : <p className={styles.uncompleted_data}>Uncompleted data</p>}

            <div><button className="animated_btn" type="submit" name="submit"><label>Submit</label></button></div>
        </form>
    )
}