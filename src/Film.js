import React from 'react'
import './index.css';
import FilmBox from '../src/filmBox'
import '../src/Film.css'


function Film({movies}) {

    return (
        <div className="film">
            {movies.map(movie => {
                const {runtime, title, large_cover_image: imgUrl, description_full: description, year , rating, genres, torrents} = movie;
                return <FilmBox
                    title={title}mins
                    imgUrl={imgUrl}quality
                    description={description}
                    year={year}
                    download=""
                    rating={rating}
                    genres={genres}
                    torrents={torrents}
                    runtimme={runtime} 
                />
            })}


        </div>
    )
}

export default Film
