import { useState, useMemo } from 'react';
import reactLogo from '../assets/react.svg'
import { useAuth } from './contexts/AuthContext';
import useDebounce from '../hooks/useDebounce';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom';


const MovieList = () => {

    const movies = [
        {
            id: 1,
            title: '12 Angry Men',
            image: <><img src={reactLogo}></img></>,
            releaseYear: 1957,
            rating: 5,
            genre: 'drama'
        },
        {
            id: 2,
            title: 'Fight Club',
            image: <><img src={reactLogo}></img></>,
            releaseYear: 1957,
            rating: 4.9,
            genre: 'fantasy'
        },
        {
            id: 3,
            title: 'Memento',
            image: <><img src={reactLogo}></img></>,
            releaseYear: 1957,
            rating: 4.8,
            genre: 'drama'
        },
        {
            id: 4,
            title: 'Joker',
            image: <><img src={reactLogo}></img></>,
            releaseYear: 2019,
            rating: 4.8,
            genre: 'thriller'
        },
        {
            id: 5,
            title: 'Godfather',
            image: <><img src={reactLogo}></img></>,
            releaseYear: 1960,
            rating: 5,
            genre: 'drama'
        }
    ]

    const [searchTerm, setSearchTerm] = useState('');
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
    const debouncedSetSearchTerm = useDebounce((value) => {
        setDebouncedSearchTerm(value);
    }, 300);
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        setDebouncedSearchTerm(e.target.value);
    };
    const navigate = useNavigate();

    const filteredMovies = useMemo(() => {
        return movies.filter(movie => {
            return (
                movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                movie.releaseYear.toString().includes(searchTerm.toLowerCase()) ||
                movie.genre.toLowerCase().includes(searchTerm.toLowerCase())
            )
        })
    }, [movies, debouncedSetSearchTerm]);

    const columns = useMemo(() => [
        { key: 'title', label: 'Title' },
        { key: 'image', label: 'Poster' },
        { key: 'releaseYear', label: 'Release Year' },
        { key: 'rating', label: 'Average Rating' },
        { key: 'genre', label: 'Genre' },
    ], []);

    const handleTitleClick = (id) => {
        navigate(`/movies-app/${id}`)
    };

    return (
        <>

            <div>
                <button onClick={() => navigate('/dashboard')}>Back</button>
                <div className="movie-list">
                    <h2>Movie List</h2>
                    <label >Search</label>
                    <input type='text' value={debouncedSetSearchTerm} placeholder='Search Movies...' onChange={handleSearchChange}></input >
                    <table>
                        <thead>
                            <tr >
                                {columns.map(column => (
                                    <td>{column.label}</td>
                                ))}
                            </tr>
                        </thead>

                        <tbody>
                            {filteredMovies.length > 0 ? (
                                filteredMovies.map(movie => (
                                    <tr key={movie.id}>
                                        {columns.map(column => (
                                            <td key={`${movie.id}-${column.key}`}>
                                                {column.key == 'title' ? (
                                                    <span className='movie-title' onClick={() => handleTitleClick(movie)} >
                                                        {movie[column.key]}
                                                    </span>
                                                ) : (movie[column.key])}
                                            </td>
                                        ))}
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={columns.length} className="no-results">
                                        No movies found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default MovieList;
