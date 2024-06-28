import axios from 'axios';
import { useEffect, useState } from 'react';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
          params: {
            api_key: '30ce8247fcc026bdb94db50402aa8366',
            query: searchQuery,
            page: 1,
            per_page: 10 // Adjust per_page as needed
          }
        });
        setMovies(response.data.results);
        setFilteredMovies(response.data.results); // Initialize filtered movies with fetched movies
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, [searchQuery]);

  const handleSearchInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearchQuery(searchTerm);

    // Filter movies based on search term
    const filtered = movies.filter(movie =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMovies(filtered);
  };

  return (
    <div className="container mx-auto px-4 pt-8">
      <input
        type="text"
        placeholder="Search movies..."
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
        onChange={handleSearchInputChange}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
        {filteredMovies.map(movie => (
          <div key={movie.id} className="bg-white rounded-lg overflow-hidden shadow-lg transition duration-300 transform hover:scale-105">
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className="w-full h-100 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold leading-tight">{movie.title}</h3>
              <div className="flex items-center mt-2">
                <span className="text-yellow-500 mr-1">{movie.vote_average}</span>
                <svg
                  className="w-4 h-4 fill-current text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2c-1.1 0-2 .9-2 2v13.3l-3.5-3.4c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l5.3 5.3c.4.4 1 .4 1.4 0l5.3-5.3c.4-.4.4-1 0-1.4s-1-.4-1.4 0L14 17.3V4c0-1.1-.9-2-2-2z" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
