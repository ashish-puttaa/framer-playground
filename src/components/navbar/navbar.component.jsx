import { useState } from 'react';

import { Wrapper, NavLink as Link } from './navbar.styles';

import { routes, defaultPath } from '../../routes';

const Navbar = () => {
   const [selectedPath, setSelectedPath] = useState(defaultPath);

   return (
      <Wrapper>
         {routes.map((route, i) => (
            <Link
               to={route.path}
               key={`link-${i}`}
               onClick={() => setSelectedPath(route.path)}
               selected={selectedPath === route.path}
            >
               {route.name}
            </Link>
         ))}
      </Wrapper>
   );
};

export default Navbar;
