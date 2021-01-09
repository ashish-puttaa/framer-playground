import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.div)`
   width: 100%;
   height: 100vh;
   display: grid;
   place-items: center;
`;

export const Box = styled(motion.div)`
   background: white;
   border-radius: 30px;
   width: 150px;
   height: 150px;

   display: flex;
   justify-content: center;
   align-items: center;
`;

export const ProgressSvg = styled.svg`
   width: 80%;
   height: 80%;
`;

export const Path = styled(motion.path)`
   fill: none;
   stroke-width: 2;
`;

export const RingPath = styled(Path)`
   transform: translate(5px, 5px);
`;

export const TickPath = styled(Path)``;

export const CrossPathA = styled(Path)``;

export const CrossPathB = styled(Path)``;
