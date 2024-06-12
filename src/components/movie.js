import React from 'react';

function Movie({ title, rating, onDelete }) {
    return (
        <li className="d-flex justify-content-between align-items-center">
            {title}
            <span className="stars-container">
                {[...Array(rating)].map((_, i) => (
                    <img key={i} src="star.png" alt="Star" className="star-icon star-size" />
                ))}
            </span>
            <img
                src="delete.png"
                alt="Delete movie"
                className="delete-movie-icon delete-size"
                onClick={onDelete}
            />
        </li>
    );
}

export default Movie;
