import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Movie from './components/Movie';
import './components/movie.css';



function MovieList() {
    const [movies, setMovies] = useState([]);
    const [title, setTitle] = useState('');
    const [rating, setRating] = useState('0');

    const addMovie = (title, rating) => {
        console.log("Adding movie:", title, rating);
        const newMovie = { title, rating: parseInt(rating, 10) };
        setMovies([...movies, newMovie]);
        console.log("Movies after adding:", [...movies, newMovie]);
    };

    const deleteMovie = (index) => {
        console.log("Deleting movie at index:", index);
        setMovies(movies.filter((_, i) => i !== index));
    };

    const sortByTitle = () => {
        console.log("Sorting by title");
        const sortedMovies = [...movies].sort((a, b) => a.title.localeCompare(b.title));
        setMovies(sortedMovies);
    };

    const sortByRating = () => {
        console.log("Sorting by rating");
        const sortedMovies = [...movies].sort((a, b) => b.rating - a.rating);
        setMovies(sortedMovies);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted with title:", title, "and rating:", rating);
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
                    <Movie
                        key={index}
                        title={movie.title}
                        rating={movie.rating}
                        onDelete={() => deleteMovie(index)}
                    />
                ))}
            </ul>
            <div className="button-container">
             <button onClick={sortByTitle} id="sort-title" className="btn btn-primary">Alfabetisk ordning</button>
             <button onClick={sortByRating} id="sort-rating" className="btn btn-primary">Betygsordning</button>
             </div>
        </div>
    );
}

ReactDOM.render(<MovieList />, document.getElementById('root'));
