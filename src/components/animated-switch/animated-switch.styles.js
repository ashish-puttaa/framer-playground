import styled, { createGlobalStyle, css } from 'styled-components';
import { lighten } from 'polished';
import { motion } from 'framer-motion';

const red = 'rgb(255, 0, 85)';

const lightenColor = (color) => lighten(0.35, color);

export const Handle = styled(motion.div)`
   width: 50px;
   height: 50px;
   border-radius: 50%;
   background-color: ${red};
`;

export const Wrapper = styled.div`
   display: flex;
   padding: 10px;
   background-color: ${lightenColor(red)};
   border-radius: 100px;
   width: 120px;
   cursor: pointer;

   justify-content: ${(props) => (props.active ? 'flex-end' : 'flex-start')};

   ${(props) =>
      props.color &&
      css`
         background-color: ${lightenColor(props.color)};

         ${Handle} {
            background-color: ${props.color};
         }
      `}
`;

export const GlobalStyles = createGlobalStyle`
   body {
      background-color: #222;
   }
`;
