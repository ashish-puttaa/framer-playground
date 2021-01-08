import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
   background-color: #fff;
   padding: 30% 10%;
   display: flex;
   flex-direction: column;
   gap: 10px;
`;

export const NavLink = styled(Link)`
   text-decoration: none;
   color: #000;
   gap: 10px;
   transition: all 0.1s;

   ${(props) =>
      props.selected &&
      css`
         font-weight: bold;
      `}
`;
