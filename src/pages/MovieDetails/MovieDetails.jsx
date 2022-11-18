import { Outlet, useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieDetails, startImageUrl } from 'utils/api/api';
import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';
import * as SC from '../MovieDetails/MovieDetails.styled';
import { Box } from 'utils/Box.styled';

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
    <Box as="div" p="20px" maxWidth="1200px" m="0 auto">
      <SC.BackBtn to={backLinkHref}>Back</SC.BackBtn>
      <SC.MovieDetailList key={id}>
        <img src={startImageUrl + poster_path} alt="title" width="350px"></img>
        <div>
          <SC.Title>{title}</SC.Title>
          <SC.SubTitle>Overview:</SC.SubTitle>
          <SC.TextContent>{overview}</SC.TextContent>

          <SC.SubTitle>Genres:</SC.SubTitle>
          <SC.TextContent>
            {genres.map(({ name }) => name).join(', ')}
          </SC.TextContent>

          <SC.SubTitle>
            Users score:{' '}
            <SC.Rating rating={vote_average.toFixed()}>
              {(vote_average * 10).toFixed(2)}
            </SC.Rating>
            %
          </SC.SubTitle>
        </div>
      </SC.MovieDetailList>
      <SC.LinkWrapper>
        <SC.SubTitle>Additional information:</SC.SubTitle>
        <Box as="ul" display="flex" flexDirection="column" gridGap={20}>
          <li>
            <SC.DetailsLink to="cast">Cast</SC.DetailsLink>
          </li>
          <li>
            <SC.DetailsLink to="reviews">Reviews</SC.DetailsLink>
          </li>
        </Box>
      </SC.LinkWrapper>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Box>
  );
};

export default MovieDetails;
