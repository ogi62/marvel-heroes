import React from 'react'
import "./Hero.css"

const Hero = ({name,path,id,addFavorite}) => {

 
    return (
      <div className="hero" id={id}>
        <div className="hero__image">
          <img src={`${path}.jpg`} alt={name} />
        </div>
        <div className="hero__description">
          <div className="hero__name">
            <h4>{name}</h4>
          </div>
          <div className="hero__bookmarkBtn">
           <button onClick={()=> addFavorite(name,id,path)}>Bookmark</button>
          </div>
        </div>
      </div>
    );
};

export default Hero;
