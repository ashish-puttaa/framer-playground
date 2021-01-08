import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.div)`
   cursor: pointer;
   width: 80px;
   height: 80px;
`;

export const Circle = styled(motion.div)`
   width: 100%;
   height: 100%;
   border-radius: 50%;
   background-color: ${(props) => props.color};
   position: relative;
`;

export const Outline = styled(motion.div)`
   position: absolute;
   border: 8px solid ${(props) => props.color}; // 10 : 1
   top: -16px; // 20 : 1
   left: -16px; // 20 : 1
   right: -16px; // 20 : 1
   bottom: -16px; // 20 : 1
   border-radius: 50%;
`;
