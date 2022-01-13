import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../AppContext'
import Hero from '../Hero/Hero'
import "./ShowHeroes.css"

const ShowHeroes = () => {

    const {heroes,currentPage,postsPerPage,input,favorite,setFavorite,isBookmarked,setIsBookmarked} = useContext(AppContext)

    //current posts
    const indexOfLastPost = parseFloat(currentPage * postsPerPage)
    const indexOfFirstPost = parseFloat(indexOfLastPost - postsPerPage)
    const currentHeroes = heroes.slice(indexOfFirstPost, indexOfLastPost)

    

    let itemi = [];

  useEffect(()=> {

   itemi = [...itemi, localStorage.setItem("favorite",JSON.stringify(favorite))];
  
  },[favorite]);
  
  
  const addFavorite = (name,id,path) => {

    //setIsBookmarked(!isBookmarked)
    setFavorite( (favorite)=> [ ...favorite, {name:name,id:id,path:path}]);
    
      const existingHero = favorite.find(
        (f) => f.id === id
      );

      if (existingHero) {

        setFavorite(favorite.filter((f) => f.id !== id));
        setIsBookmarked(!isBookmarked)
    
      };  
  };
  
   
    return (
        <div className='heroes'>
            {
            ((input.trim() === ""))
                ? favorite?.map((f)=> {
                    return <Hero key={f.id} addFavorite={addFavorite} id={f.id} name={f.name} path={f.path} />
                }) 
                : currentHeroes?.map( (hero)=> {
                    return <Hero key={hero.id} addFavorite={addFavorite} id={hero.id} name={hero.name} path={hero.thumbnail.path}/>
            })
            }
        
        </div>
    );
};

export default ShowHeroes;
