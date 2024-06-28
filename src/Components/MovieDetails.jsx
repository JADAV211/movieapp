import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  let { id } = useParams();
  const [movie, setMovie] = useState(null); // State to store movie details
  const [error, setError] = useState(null); // State for error handling

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
          params: {
            api_key: '30ce8247fcc026bdb94db50402aa8366'
          }
        });
        setMovie(response.data); // Set movie details to state
      } catch (error) {
        setError(error); // Handle error
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (error) {
    return <div className="container mx-auto px-4 pt-8">Error: {error.message}</div>;
  }

  return (
    <div className="container mx-auto px-4 pt-8">
      {movie ? (
        <div className="flex flex-col lg:flex-row bg-white rounded-lg overflow-hidden shadow-lg">
          <div className="lg:w-1/3">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="lg:w-2/3 lg:p-8 flex flex-col">
            <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
            <div className="flex items-center mb-4">
              <svg
                className="w-6 h-6 fill-current text-yellow-500 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 2c-1.1 0-2 .9-2 2v13.3l-3.5-3.4c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l5.3 5.3c.4.4 1 .4 1.4 0l5.3-5.3c.4-.4.4-1 0-1.4s-1-.4-1.4 0L14 17.3V4c0-1.1-.9-2-2-2z" />
              </svg>
              <span className="text-yellow-500 text-lg">{movie.vote_average}</span>
              <span className="text-gray-600 text-sm ml-2">({movie.vote_count} votes)</span>
            </div>
            <p className="text-gray-700 mb-4">{movie.overview}</p>
            <p className="text-gray-700">Release Date: {movie.release_date}</p>

            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4">Additional Information</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-700 mb-2">
                    <span className="font-bold">Original Title:</span> {movie.original_title}
                  </p>
                  <p className="text-gray-700 mb-2">
                    <span className="font-bold">Runtime:</span> {movie.runtime} minutes
                  </p>
                  <p className="text-gray-700 mb-2">
                    <span className="font-bold">Status:</span> {movie.status}
                  </p>
                  <p className="text-gray-700 mb-2">
                    <span className="font-bold">Budget:</span> ${movie.budget.toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-gray-700 mb-2">
                    <span className="font-bold">Genres:</span>{' '}
                    {movie.genres.map((genre) => genre.name).join(', ')}
                  </p>
                  <p className="text-gray-700 mb-2">
                    <span className="font-bold">Spoken Languages:</span>{' '}
                    {movie.spoken_languages.map((lang) => lang.name).join(', ')}
                  </p>
                  <p className="text-gray-700 mb-2">
                    <span className="font-bold">Production Companies:</span>{' '}
                    {movie.production_companies
                      .map((company) => company.name)
                      .join(', ')}
                  </p>
                  <p className="text-gray-700 mb-2">
                    <span className="font-bold">Revenue:</span> ${movie.revenue.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center">Loading...</p>
      )}
    </div>
  );
};

export default MovieDetails;
