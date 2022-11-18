import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const BackBtn = styled(NavLink)`
  border: 1px solid black;
  border-radius: 5px;
  padding: 8px 12px;
  display: inline-block;
  text-decoration: none;
  color: white;
  background-color: orangered;
  cursor: pointer;
  margin-bottom: 20px;
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
  color: black;
  text-decoration: none;
  font-size: 24px;
  cursor: pointer;
`;
