import { Routes, Route } from 'react-router-dom';
import { GlobalStyle } from '../utils/GlobalStyle';
import { Home } from '../pages/Home';
import { Movies } from '../pages/Movies';
import { Box } from 'utils/Box.styled';
import { Link } from './App.styled';
import { MovieDetails } from 'pages/Movies/MovieDetails';
import { Cast } from 'components/Cast/Cast';
import { Reviews } from 'pages/Movies/Reviews';

export const App = () => {
  return (
    <Box as="div">
      <Box as="header">
        <Box as="nav" display="flex">
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </Box>
      </Box>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />}>
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="/movies/:movieId/cast" element={<Cast />}></Route>
            <Route
              path="/movies/:movieId/reviews"
              element={<Reviews />}
            ></Route>
          </Route>
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
      <GlobalStyle />
    </Box>
  );
};
