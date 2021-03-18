import React from 'react';
// Use Params
import { Link, useParams } from 'react-router-dom';

const SingleMovie = ({movieList, setMovieList}) => {
    const { original_title } = useParams();

    return (
        <section className="single">
            <div className="container">
            {movieList.filter(singleItem => singleItem.original_title === original_title).map((singleItem, index) => (
                <div className="single-container" key={index}>
                    <h1>{singleItem.original_title}</h1>
                    <div className="row">
                        <img src={`https://image.tmdb.org/t/p/w400/${singleItem.poster_path}`} alt={singleItem.original_title}/>
                        <div className="single-content">
                            <h2>Movie Info</h2>
                            <div className="top-content">
                            <p><span className="blue bold">Release Date:</span> {singleItem.release_date}</p>
                            <p><span className="blue bold">Original Language:</span> {singleItem.original_language}</p>
                            <p><span className="blue bold">Popularity:</span> {singleItem.popularity}</p>
                            <p><span className="blue bold">Rating:</span>{singleItem.vote_average}</p>
                            </div>
                            <p className="text">{singleItem.overview}</p>
                            <div className="cta">
                            <Link to="/" className="btn btn-single">Go Back</Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </section>
    )
}

export default SingleMovie
