import React, { useContext } from 'react'
import "./Pagination.css"
import { AppContext } from '../../AppContext'

const Pagination = () => {

    const {heroes,postsPerPage,setCurrentPage} = useContext(AppContext);
    const totalPosts = heroes.length;
    const pageNumbers = [];

    for ( let i=1 ; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    };

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
        window.scrollTo(0,0)
    }

    return (
        <div className='pagination'>
            <ul className='pagination__numbers'>
                {pageNumbers.map(number => {
                    return <li key={number}  className='number'>
                        <button onClick={()=> paginate(number)} className='number__button'>{number}</button>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default Pagination
