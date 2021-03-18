import React from 'react';
// React Router Dom
import { Link } from 'react-router-dom';

const MovieList = ({movieList}) => {

    return (
        <section className="list">
            <div className="container">
                <h1>Popular Movies</h1>
                {movieList && (
                    <div className="topRated-list">
                        {movieList.map((item, index) => (
                        <div key={index}>
                        <Link to={`/movies/${item.original_title}`}><img src={`https://image.tmdb.org/t/p/w400/${item.backdrop_path}`} alt={item.title}/></Link>
                        <div className="card-bottom">
                            <h4>{item.original_title}</h4>
                            {item.vote_average}
                        </div>
                        </div>
                    ))}
                </div>
                )}
            </div>
        </section>
    );
};

export default MovieList;
