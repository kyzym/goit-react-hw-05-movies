import { Box } from 'utils/Box.styled';
import { Outlet } from 'react-router-dom';

import * as SC from './App.styled';

const Layout = () => {
  return (
    <Box as="div">
      <Box as="header">
        <Box as="nav" display="flex">
          <SC.Link to="/" end>
            Home
          </SC.Link>
          <SC.Link to="/movies">Movies</SC.Link>
        </Box>
      </Box>
      <Outlet />
    </Box>
  );
};

export default Layout;
