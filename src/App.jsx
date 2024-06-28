import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import MovieDetails from './Components/MovieDetails';
import TopRating from './Components/TopRating';
import UpComming from './Components/UpComming';
import PageNotFound from './Components/PageNotFound';
import Footer from './Components/Footer';


export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/movie" element={<MovieDetails />} /> {/* Route for movie details */}
        <Route path="/top-rating" element={<TopRating />} />
        <Route path="/upcoming" element={<UpComming />} />
        <Route path="/movie/:id" element={<MovieDetails />} /> {/* Dynamic route for movie details */}
        <Route path="*" element={<PageNotFound />} /> 
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
