import { Routes, Route, Navigate } from 'react-router-dom';
import { GlobalStyle } from '../utils/GlobalStyle';
import Home from '../pages/Home';
import Movies from '../pages/Movies';
import MovieDetails from 'pages/Movies/MovieDetails';
import Cast from 'components/Cast/Cast';
import Reviews from 'pages/Movies/Reviews';
import Layout from './Layout';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />}></Route>
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />}></Route>
            <Route path="reviews" element={<Reviews />}></Route>
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
