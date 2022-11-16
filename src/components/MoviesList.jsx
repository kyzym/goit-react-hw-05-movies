import { Link } from 'react-router-dom';
const MoviesList = ({ movies }) => {
  console.log(movies);
  return movies.map(({ id, title, poster_path, vote_average }) => (
    <li key={id}>
      <Link to={`${id}`}>
        <h3>{title}</h3>
        <img
          src={`https://image.tmdb.org/t/p/w500` + poster_path}
          alt={title}
        ></img>
        <p>{vote_average}</p>
      </Link>
    </li>
  ));
};

export default MoviesList;
