import { Box } from 'utils/Box.styled';
import { Outlet } from 'react-router-dom';
import { Link } from './App.styled';

const Layout = () => {
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
      <Outlet />
    </Box>
  );
};

export default Layout;
