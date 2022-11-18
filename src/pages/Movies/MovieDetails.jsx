import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieDetails, startImageUrl } from 'utils/api/api';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    getMovieDetails(movieId)
      .then(setMovieDetails)
      .catch(error => console.log(error));
  }, [movieId]);

  if (!movieDetails) return null;

  const { id, title, poster_path, overview, genres, vote_average } =
    movieDetails;

  return (
    <>
      <NavLink to={backLinkHref}>Back</NavLink>
      <ul key={id}>
        <h1>{title}</h1>
        <img src={startImageUrl + poster_path} alt="title"></img>
        <h3>Overview:</h3>
        <p>{overview}</p>

        <h3>Genres:</h3>
        <p>{genres.map(({ name }) => name).join(', ')}</p>

        <b>Users score: {(vote_average * 10).toFixed(2)}%</b>
      </ul>
      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetails;
