import React, { useState, useEffect } from 'react'

const Search = (props) => {


    const [searchTerm, setSearchTerm] = useState(localStorage.getItem('search') || '');

    const handleChange = event => {
        setSearchTerm(event.target.value);
        
    }

useEffect(() => {
    localStorage.setItem('search', searchTerm);
    
}, [searchTerm])


    // const { search, onSearch} = props;

    return (
        <>
            <label htmlFor="search">Search: </label>
            <input 
                id="search" 
                type="text"
                value={props.search} 
                onChange={handleChange}/>
                
            <p>Searching for <strong>{searchTerm}</strong></p>
        </>
    )
}


export default Search;