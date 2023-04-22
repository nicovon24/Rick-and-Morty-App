import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addCreatedChar, postCreatedChar } from "../../../redux/actions"
import styles from "./Forms.module.css"

let arrImg     = [
    ['Bojack', 'https://i1.sndcdn.com/artworks-000677277973-s3s4ew-t500x500.jpg'],
    ['Homero', 'https://i.pinimg.com/564x/6d/fa/bd/6dfabdd00e70fddc4cb6ab65fa338a27.jpg'], 
    ['Ron Weasley', 'https://i.pinimg.com/564x/c9/08/58/c908586ce9e195a0f9ea43bb98e7efa5.jpg'],
    ['Jimenez', 'https://cdns-images.dzcdn.net/images/artist/c7ee19e5a26ed4c381f1ddf2f34c03da/500x500.jpg']
]

export default function FormAddCharacter(){
    let [inputs, setInputs] = useState({id: "", name: "", status: "", species: "", origin: "", gender: "", image: ""}) //img inicial

    //arrays to define the select options
    let arrSpecies = ['Human', 'Alien', 'Humanoid', 'Animal', 'Robot', 'Disease', 'Mythological Creature', 'Poopybutthole', 'unknown', 'Cronenberg'].sort((a,b)=>a.localeCompare(b))
    let arrStatus  = ['Alive', 'Dead', 'unknown']
    let arrOrigins = ['Earth (C-137)', 'Earth (Replacement Dimension)', 'Earth (K-83)', 'unknown']
    let arrGender  = ["Male", "Female", "Genderless", "Unknown"]

    let isFormFilled = inputs.name!=="" && inputs.status!=="" && inputs.species!=="" && inputs.origin!=="" && inputs.gender!=="" && inputs.image!=="" //true or false

    let dispatch = useDispatch()

    let {createdChar} = useSelector(state=>state)
    
    if(createdChar.length>0){
        var id = createdChar[createdChar.length-1].id
    }

    if(!id) id = 1000

    //function to submit
    const handleSubmit = e=>{
        e.preventDefault()
        if(isFormFilled){
            dispatch(addCreatedChar ({...inputs, id: id+1}))
            dispatch(postCreatedChar({...inputs, id: id+1}))

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
            <select className={`input_primary ${!inputs.gender ? "input_invalid" : "input_valid"}`} value={inputs?.gender} name="gender" onChange={handleChangeInput}>
                <option value="">Select an option...</option>
                {arrGender.map((el,index)=><option value={el} key={index}>{el}</option>)}
            </select>

            <label className={styles.add_property}>Image:</label> 
            <select onChange={handleChangeInput} value={inputs.image} className={`input_primary ${!inputs.gender ? "input_invalid" : "input_valid"}`} name="image" id="">
                <option value="">Select an option...</option>
                {arrImg.map((el,index)=><option value={el[1]} key={index}>{el[0]}</option>)}
            </select>

            {isFormFilled ? "" : <p className={styles.uncompleted_data}>Uncompleted data</p>}

            <div>
                <button className={`btn_animated_border ${styles.btn}`} type="submit" name="submit">Submit</button>
            </div>
        </form>
    )
}