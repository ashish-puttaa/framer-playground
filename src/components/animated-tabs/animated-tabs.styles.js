import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.div)`
   width: 330px;
   display: flex;
   border-radius: 10px;
   overflow: hidden;
   background-color: white;

   -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
   -webkit-tap-highlight-color: transparent;
`;

export const Button = styled(motion.span)`
   flex: 1;
   display: flex;
   gap: 0.35em;
   padding: 12px 17px;
   font-weight: 700;
   justify-content: center;
   background-color: white;
   color: white;
   cursor: pointer;

   ${(props) =>
      props.selected &&
      css`
         background-color: #222;
         border-top-left-radius: 10px;
         border-top-right-radius: 10px;
      `}
`;

export const IconContainer = styled(motion.div)`
   width: 22px;

   svg {
      fill: #222;
      width: 100%;
   }
`;

export const Text = styled(motion.span)``;
