import React,{createContext, useState } from 'react'

export const  AppContext = createContext()

export const AppProvider =  ({children}) => {

    const [input, setInput] = useState("");
    const [heroes, setHeroes] = useState([]);
    const [currentPage,setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(20);
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [favorite,setFavorite] = useState(JSON.parse(localStorage.getItem("favorite")) || []);

    return (
    <AppContext.Provider 
    value={{
        input,
        setInput,
        heroes,
        setHeroes,
        currentPage,
        setCurrentPage,
        postsPerPage,
        setPostsPerPage,
        isBookmarked,
        setIsBookmarked,
        favorite,
        setFavorite,
        }}>
        {children}
    </AppContext.Provider>);
};


