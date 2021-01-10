import styled, { createGlobalStyle } from 'styled-components';
import { motion } from 'framer-motion';

import { colors } from '../../utils/colors';

export const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   gap: 10px;
   width: 310px;
   padding: 30px;
   border-radius: 10px;
   background-color: #fefefe;
`;

export const Block = styled(motion.div)`
   height: ${(props) => props.height || '10px'};
   border-radius: 10px;
   background-color: ${(props) => props.color || colors.blue};
`;

export const Button = styled.span`
   width: max-content;
   margin: 0 auto;
   margin-top: 15px;
   padding: 10px 30px;
   border-radius: 10px;

   font-size: 18px;
   text-align: center;
   color: #fefefe;
   background-color: #222;
   user-select: none;
   cursor: pointer;

   -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
   -webkit-tap-highlight-color: transparent;

   transition: all 0.075s;
   box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);

   &:focus,
   &:active {
      transform: scale(0.95);
   }
`;

export const GlobalStyles = createGlobalStyle`
   body {
      background-color: #222;
   }
`;
