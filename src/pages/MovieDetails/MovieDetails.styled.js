import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const BackBtn = styled(NavLink)`
  border-radius: 5px;
  padding: 8px 14px;
  display: inline-block;
  text-decoration: none;
  color: white;
  background-color: rgba(255, 69, 0, 1);
  cursor: pointer;
  margin-bottom: 20px;

  &:hover,
  :focus {
    background-color: rgba(255, 69, 0, 0.85);
  }
`;

export const MovieDetailList = styled.div`
  display: flex;
  gap: 20px;
  border-bottom: 1px solid black;
`;

export const Title = styled.h1`
  margin-bottom: 14px;
`;

export const SubTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 8px;
`;

export const TextContent = styled.p`
  margin-bottom: 14px;
  font-size: 20px;
`;

export const LinkWrapper = styled.div`
  border-bottom: 1px solid black;
  padding: 20px;
`;

export const DetailsLink = styled(NavLink)`
  padding: 2px 6px;
  width: 200px;
  border-radius: 5px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  font-size: 24px;
  border: 1.5px solid orangered;

  &.active {
    color: white;
    background-color: orangered;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: white;
    background-color: orangered;
  }
`;

export const Rating = styled.p`
  font-size: 18px;
  padding: 4px 8px;
  border-radius: 5px;
  border: 1px solid black;
  display: inline-block;

  background-color: ${({ rating }) => {
    if (rating > 7) {
      return '#6c3';
    }
    if (rating >= 4 && rating <= 7) {
      return '#fc0';
    }
    return '#f00';
  }};

  color: ${({ rating }) => (rating >= 4 && rating <= 7 ? 'black' : 'white')};
`;
