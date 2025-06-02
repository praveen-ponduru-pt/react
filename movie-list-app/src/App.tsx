import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

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
      rating: 5,
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
  const filteredMovies = useMemo(() => {
    return movies.filter(movie => {
      return (
        movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        movie.releaseYear.toString().includes(searchTerm.toLowerCase()) ||
        movie.genre.toLowerCase().includes(searchTerm.toLowerCase())
      )
    })
  }, [movies, searchTerm]);

  const columns = useMemo(() => [
    { key: 'title', label: 'Title' },
    { key: 'imageUrl', label: 'Image' },
    { key: 'releaseYear', label: 'Year' },
    { key: 'rating', label: 'Rating' },
    { key: 'genre', label: 'Genre' }
  ], []);

  return (
    <>
      <h1>Movie List</h1>
      <input type='text' value={searchTerm} placeholder='Search Movies...' onChange={(e) => setSearchTerm(e.target.value)}></input >
      <table>
        <thead>
          <tr> {columns.map((column) => (
            <th key={column.key}>
              {column.label}
            </th>
          ))}
          </tr>
        </thead>
        <tbody>
          {filteredMovies.length > 0 ? (
            filteredMovies.map(movie => (
              <tr key={movie.id}>
                {columns.map(column => (
                  <td key={`${movie.id}-${column.key}`}>
                    {movie[column.key]}
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
    </>
  )
}

export default App
