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
                <fieldset>
                    <legend>Lägg till en film</legend>
                    <label htmlFor="title-field">Titel:</label>
                    <input
                        type="text"
                        id="title-field"
                        className="form-control"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Title"
                    />
                    <label htmlFor="rating-field">Betyg:</label>
                    <select
                        id="rating-field"
                        className="form-control"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                    >
                        <option value="0">Välj betyg här...</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <button type="submit" className="btn btn-success mt-3">Spara film</button>
                </fieldset>
            </form>
            <hr />
            <h2>Filmer</h2>
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
            <button onClick={sortByTitle} id="sort-title" className="btn btn-primary">Alfabetisk ordning</button>
            <button onClick={sortByRating} id="sort-rating" className="btn btn-primary">Betygsordning</button>
        </div>
    );
}

ReactDOM.render(<MovieList />, document.getElementById('root'));
