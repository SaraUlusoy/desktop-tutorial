// src/assignment_3.js
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function MovieList() {
    const [movies, setMovies] = useState([]);
    const [title, setTitle] = useState('');
    const [rating, setRating] = useState('0');

    const addMovie = (title, rating) => {
        const newMovie = { title, rating: parseInt(rating, 10) };
        setMovies([...movies, newMovie]);
    };

    const deleteMovie = (index) => {
        setMovies(movies.filter((_, i) => i !== index));
    };

    const sortByTitle = () => {
        const sortedMovies = [...movies].sort((a, b) => a.title.localeCompare(b.title));
        setMovies(sortedMovies);
    };

    const sortByRating = () => {
        const sortedMovies = [...movies].sort((a, b) => b.rating - a.rating);
        setMovies(sortedMovies);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title !== '' && rating !== '0') {
            addMovie(title, rating);
            setTitle('');
            setRating('0');
        } else {
            alert("Ange både titel och betyg för att lägga till en film.");
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} id="add-movie-form">
                <input 
                    type="text" 
                    id="title-field" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                />
                <select 
                    id="rating-field"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                >
                    <option value="0">Rating</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <button type="submit" id="add-movie-button">Add Movie</button>
            </form>
            <button onClick={sortByTitle} id="sort-title">Sort by Title</button>
            <button onClick={sortByRating} id="sort-rating">Sort by Rating</button>
            <ul id="movies">
                {movies.map((movie, index) => (
                    <li key={index} className="d-flex justify-content-between align-items-center" data-title={movie.title} data-grade={movie.rating}>
                        {movie.title}
                        <span className="stars-container">
                            {[...Array(movie.rating)].map((_, i) => (
                                <img key={i} src="star.png" alt="Star" className="star-icon star-size" />
                            ))}
                        </span>
                        <img 
                            src="delete.png" 
                            alt="Delete movie" 
                            className="delete-movie-icon delete-size" 
                            onClick={() => deleteMovie(index)}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}

ReactDOM.render(<MovieList />, document.getElementById('root'));
