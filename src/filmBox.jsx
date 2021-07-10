import React from 'react'
import './Film.css';

const FilmBox = ({title, rating, year, runtimme,
    description, genres, download, torrents,size, imgUrl
   }) =>  {
    return (
            <div className="film-box">
                  <div className="div1">
                       <img src={imgUrl} alt="" />
                      </div> 
                      <div className="div2">
                    <h1>{title}</h1>
                    <span>{runtimme} mins</span>
                    <h3>Rating: <span>{rating ? rating : 'not available'}</span></h3>
                    <span>Year Released: {year}</span>
                    <h3>Description</h3>
                    <p className="description">{description ? description : 'not available'} </p>
                   
                    <h3>GENRE:</h3> <p>{genres.join(", ")}</p>

                        <span className="quality">{torrents.map(q => q.quality).join(", ")}</span> <br/>
                        <span className="quality2"> {torrents.map(p => p.size).join(", ")}</span><br/>
                        {torrents.map((u, i) => <button className="download" > <a href={u.url}> {`Download Link ${i + 1}`} </a> </button> )}

                      </div>
                </div>
    )
}

export default FilmBox ;