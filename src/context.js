import React, { useContext, useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import { getInitialChars } from './redux/actions'

const DataContext = React.createContext() //creating a context

const DataProvider = ({ children }) => {
    let [idCreated, setIdCreated] = useState(10000)
    let [favorites, setFavorites] = useState([])
    let [initialFavorites, setInitialFavorites] = useState([])

    return <DataContext.Provider value={{idCreated, setIdCreated, favorites, setFavorites,
    initialFavorites, setInitialFavorites}}>{children}</DataContext.Provider>
}

export const useGlobalContext = () => { 
  return useContext(DataContext)
}

export { DataContext, DataProvider }
