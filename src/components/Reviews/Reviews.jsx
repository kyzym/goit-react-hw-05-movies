import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieReviews } from 'utils/api/api';
import { Box } from 'utils/Box.styled';
import * as SC from '../Reviews/Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    getMovieReviews(movieId)
      .then(setReviews)
      .catch(error => console.log(error));
  }, [movieId]);

  if (!reviews) return null;
  return (
    <Box as="div" p="20px">
      {reviews.length > 0 ? (
        <SC.ReviewsList>
          {reviews.map(({ author, content, id, created_at }) => (
            <SC.Review key={id}>
              <h3>Author: {author}</h3>
              <p>
                <b>Review:</b>
              </p>
              <p>{content ? content : <p>No review</p>}</p>
              <p>
                <b>Date:</b>{' '}
                {created_at ? (
                  new Date(created_at).toLocaleDateString('en-US')
                ) : (
                  <p>No date</p>
                )}
              </p>
            </SC.Review>
          ))}
        </SC.ReviewsList>
      ) : (
        <p>We don't have any reviews for this movie, yet.</p>
      )}
    </Box>
  );
};

export default Reviews;
