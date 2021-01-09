import { useMotionValue, useTransform } from 'framer-motion';

import { Box, Wrapper, ProgressSvg } from './draggable-switch.style';
import { RingPath, TickPath } from './draggable-switch.style';
import { CrossPathA, CrossPathB } from './draggable-switch.style';

const red = 'rgb(255, 0, 85)';
const blue = 'rgb(0, 153, 255)';
const green = 'rgb(34, 204, 136)';

const DraggableSwitch = () => {
   const xAxis = useMotionValue(0);

   const color = useTransform(xAxis, [-100, 0, 100], [red, blue, green]);
   const tickPath = useTransform(xAxis, [10, 100], [0, 1]);
   const crossPathA = useTransform(xAxis, [-10, -55], [0, 1]);
   const crossPathB = useTransform(xAxis, [-50, -100], [0, 1]);

   return (
      <Wrapper style={{ background: color }}>
         <Box style={{ x: xAxis }} drag="x" dragConstraints={{ left: 0, right: 0 }}>
            <ProgressSvg viewBox="0 0 50 50">
               <RingPath d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0" stroke={color} />
               <TickPath
                  d="M14,26 L 22,33 L 35,16"
                  style={{ pathLength: tickPath }}
                  stroke={color}
               />
               <CrossPathA d="M17,17 L33,33" style={{ pathLength: crossPathA }} stroke={color} />
               <CrossPathB d="M33,17 L17,33" style={{ pathLength: crossPathB }} stroke={color} />
            </ProgressSvg>
         </Box>
      </Wrapper>
   );
};

/* 
   <Box style={{ x: xAxis }} /> 

   - Here xAxis acts like a 'ref'. 
   - When the Box's x-value updates, it is assigned to xAxis. 
   - It doesn't trigger re-renders
*/

export default DraggableSwitch;
