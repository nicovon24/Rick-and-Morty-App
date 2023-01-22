import { useState } from "react"
import styles from "./Forms.module.css"

export default function FormAddCharacter(){
    let [inputs, setInputs] = useState({name: "", status: "", species: "", origin: "", gender: "", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfz4px_B-4Z1E6i6kRH2pSgSfCzlk_0if0gw&usqp=CAU"}) //img inicial

    //arrays to define the select options
    let arrSpecies = ['Human', 'Alien', 'Humanoid', 'Animal', 'Robot', 'Disease', 'Mythological Creature', 'Poopybutthole', 'unknown', 'Cronenberg'].sort((a,b)=>a.localeCompare(b))
    let arrStatus  = ['Alive', 'Dead', 'unknown']
    let arrOrigins = ['Earth (C-137)', 'Earth (Replacement Dimension)', 'Earth (K-83)', 'unknown']
    let arrGender  = ["Male", "Female", "Genderless", "Unknown"]

    let isFormFilled = inputs.name!=="" && inputs.status!=="" && inputs.species!=="" && inputs.origin!=="" && inputs.gender!=="" && inputs.image!=="" //true or false

    //function to submit
    const handleSubmit = e=>{
        e.preventDefault()
        let id = 10000
        
        //local storage only supports strings, use JSON.stringify and JSON.parse
        if(isFormFilled){
            let createdChars = JSON.parse(localStorage.getItem('createdCharacters'))
            if(createdChars.length>0) id = createdChars[createdChars.length-1].id+1
            let newItems = [...createdChars, {...inputs, id: id}]
            localStorage.setItem('createdCharacters', JSON.stringify(newItems))
            setInputs({name: "", id: "", status: "", species: "", origin: "", gender: "", image: ""})
        }
    }

    const handleChangeInput = e=>{
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }

    
    return(
        <form className={styles.character_form} onSubmit={handleSubmit} name="add_form">
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

            <label className={styles.add_property}>Image url:</label> 
            <label htmlFor="image">
                <input type="url" className="input_primary" name="image" id="image" onChange={handleChangeInput} placeholder="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfz4px_B-4Z1E6i6kRH2pSgSfCzlk_0if0gw&usqp=CAU" value={inputs.image}/>
            </label>

            {isFormFilled ? "" : <p className={styles.uncompleted_data}>Uncompleted data</p>}

            <div>
                <button className="animated_btn" type="submit" name="submit"><label>Submit</label></button>
            </div>
        </form>
    )
}