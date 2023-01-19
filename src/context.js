import React, { useContext, useEffect, useState} from 'react'

const DataContext = React.createContext() //creating a context

const DataProvider = ({ children }) => {
    let [initialCharacters, setInitialCharacters] = useState([])
    let [character, setCharacter] = useState("") //will be used to show or not the page menu
    let [characters, setCharacters] = useState([])
    let [page, setPage] = useState(1)
    let [idCreated, setIdCreated] = useState(1)
    let [favorites, setFavorites] = useState([])

    useEffect(()=>{
      try{
        fetch("https://rickandmortyapi.com/api/character")
          .then(response=>response.json())
          .then(data=>{
            setCharacters([...data.results])
            setInitialCharacters([...data.results])
          })
      }
      catch(err){
        alert("Error: " + err)
      }
    }, [])

    return <DataContext.Provider value={{initialCharacters, characters, setCharacters, character, setCharacter,
    page, setPage, idCreated, setIdCreated, favorites, setFavorites}}>{children}</DataContext.Provider>
}

export const useGlobalContext = () => { 
  return useContext(DataContext)
}

export { DataContext, DataProvider }
