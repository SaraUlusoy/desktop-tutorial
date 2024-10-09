import React from 'react';
import star from '../images/star.png';
import delIcon from '../images/delete.png';

function Movie({ title, rating, onDelete }) {
    return (
        <li className="movie-item">
            <span className="movie-title">{title}</span> {/* Lägg till en klass för titel */}
            <span className="stars-container">
                {[...Array(rating)].map((_, i) => (
                    <img key={i} src={star} alt="Star" className="star-icon" />
                ))}
            </span>
            <img
                src={delIcon}
                alt="Delete movie"
                className="delete-movie-icon"
                onClick={onDelete}
            />
        </li>
    );
}

export default Movie;
