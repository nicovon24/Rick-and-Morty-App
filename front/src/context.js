import React, { useContext, useState} from 'react'

const DataContext = React.createContext() //creating a context

const DataProvider = ({ children }) => {
    let [favorites, setFavorites] = useState([])
    let [initialFavorites, setInitialFavorites] = useState([])

    return <DataContext.Provider value={{favorites, setFavorites,
    initialFavorites, setInitialFavorites}}>{children}</DataContext.Provider>
}

export const useGlobalContext = () => { 
  return useContext(DataContext)
}

export { DataContext, DataProvider }
