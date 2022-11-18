import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const MovieListItem = styled.li`
  width: 200px;
  cursor: pointer;
`;

export const Photo = styled.img`
  width: 200px;
  height: 300px;
`;

export const TitleRating = styled.div`
  padding-top: 8px;
  width: 200px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
