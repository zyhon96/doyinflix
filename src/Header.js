import React, { useState } from 'react'
import './index.css'
import './Header.css'
import './Film'

function Header({setMovies, movies}) {

  const  [search, setSearch] = useState('');

const handleChange = e =>{
    setSearch((s) => e.target.value)
}

const handleSubmit = (e) => {
    e.preventDefault()
    const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(search.toLowerCase()))
    setMovies(filteredMovies)


}



    return (
        <div className="header">
           <div className="head">

            <div className="logo">
                <h1>DOYINFLIX</h1>
            </div>
            <div className="mid-head">
                
                <h3 className="green">Coming soon</h3>
                <h3 className="red">New Releases</h3>
                <h3 className="yellow">Office Box</h3>
              
            </div>
            <div className="search-box">
                <form onSubmit={handleSubmit}>
                <input type="search" placeholder="Search Your Movies"  onChange={handleChange}/>

                </form>
            </div>


           </div>
        </div>
    )
}

export default Header;
