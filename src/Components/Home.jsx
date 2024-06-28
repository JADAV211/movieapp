import  { useEffect, useState } from 'react';
import axios from 'axios';
import { FaHeart, FaStar } from 'react-icons/fa'; // Importing Heart and Star icons from react-icons
import { Link } from 'react-router-dom';

const Home = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/discover/movie', {
          params: {
            api_key: '30ce8247fcc026bdb94db50402aa8366',
            page: 1,
            per_page: 30
          }
        });
        setData(response.data.results);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-4 pt-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {error && <p className="text-red-500">Error: {error.message}</p>}
      {data && (
        data.map(movie => (
          <div key={movie.id} className="bg-white rounded-lg overflow-hidden shadow-lg transition duration-300 transform hover:scale-105">
            <Link to={`/movie/${movie.id}`} className="block">
              <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className="w-full h-100 object-cover" />
            </Link>
            <div className="p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold leading-tight">{movie.title}</h3>
                <div className="flex items-center">
                  <FaHeart className="text-red-500 cursor-pointer hover:text-red-600 mr-2" />
                  <div className="flex items-center">
                    <FaStar className="text-yellow-500 mr-1" />
                    <span className="text-gray-700">{movie.vote_average}</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 mb-2">Release Date: {movie.release_date}</p>
              <p className="text-gray-600">{movie.overview.slice(0, 100)}</p>
            </div>
          </div>
        ))
      )}
    </div>
  </div>
  );
}

export default Home;
