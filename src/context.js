import React, { useContext, useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import { getInitialChars } from './redux/actions'

const DataContext = React.createContext() //creating a context

const DataProvider = ({ children }) => {
    let [initialCharacters, setInitialCharacters] = useState([])
    let [character, setCharacter] = useState("") //will be used to show or not the page menu
    let [characters, setCharacters] = useState([])
    let [page, setPage] = useState(1)
    let [idCreated, setIdCreated] = useState(1)
    let [favorites, setFavorites] = useState([])

    //dispatch
    let dispatch = useDispatch()
    useEffect(()=>{
      dispatch(getInitialChars)
    }, [])

    //selector
    let initialCharactersRedux = useSelector(state=>state.initialCharacters)
    
    useEffect(()=>{
      setInitialCharacters([...initialCharactersRedux])
      setCharacters([...initialCharactersRedux])
    }, [])


    return <DataContext.Provider value={{initialCharacters, characters, setCharacters, character, setCharacter,
    page, setPage, idCreated, setIdCreated, favorites, setFavorites}}>{children}</DataContext.Provider>
}

export const useGlobalContext = () => { 
  return useContext(DataContext)
}

export { DataContext, DataProvider }
