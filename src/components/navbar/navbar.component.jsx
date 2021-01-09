import { useLocation } from 'react-router-dom';

import { Wrapper, NavLink as Link } from './navbar.styles';

import { routes } from '../../routes';

const Navbar = () => {
   const location = useLocation();

   return (
      <Wrapper>
         {routes.map((route, i) => (
            <Link to={route.path} key={`link-${i}`} selected={location.pathname === route.path}>
               {route.name}
            </Link>
         ))}
      </Wrapper>
   );
};

export default Navbar;
