import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../AppContext'
import "./SearchInput.css"

const SearchInput = () => {

    const {input,setInput, setHeroes} = useContext(AppContext);

    useEffect(()=> {

        const fetchPost = async (input) => {

            const res = await axios.get(`${process.env.REACT_APP_BASE_URL}?nameStartsWith=${input}&ts=1&limit=100&apikey=${process.env.REACT_APP_PUBLIC_KEY}&hash=${process.env.REACT_APP_HASH_KEY}`)
            setHeroes(res.data.data.results)
            
        };
       
        fetchPost(input);
    },[input,setHeroes]);


    return (
        <div className='search'>
            <input onChange={(e)=> setInput(e.target.value)} type="text"  placeholder='Type your heroe name ...'/>
        </div>
    );
};

export default SearchInput
