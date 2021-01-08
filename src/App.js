import styled from 'styled-components';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import NavbarComponent from './components/navbar';

import { routes, defaultPath } from './routes';

const Wrapper = styled.div`
   display: grid;
   grid-template-columns: minmax(280px, 20%) 80%;
   min-height: 100vh;
`;

const Navbar = styled(NavbarComponent)`
   grid-column: 1;
`;

const RouteView = styled.div`
   grid-column: 2;
   display: grid;
   place-items: center;
`;

function App() {
   return (
      <Wrapper>
         <BrowserRouter>
            <Navbar></Navbar>
            <RouteView>
               <Switch>
                  <Redirect exact from="/" to={defaultPath} />
                  {routes.map((route, i) => (
                     <Route path={route.path} component={route.component} key={`route-${i}`} />
                  ))}
               </Switch>
            </RouteView>
         </BrowserRouter>
      </Wrapper>
   );
}

export default App;
