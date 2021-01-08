import { useState } from 'react';
import { AnimateSharedLayout } from 'framer-motion';

import RadioButton from '../radio-button';

import { Wrapper } from './animated-radio-grid.style';

const red = 'rgb(255, 0, 85)';
const blue = 'rgb(0, 153, 255)';
const green = 'rgb(34, 204, 136)';
const yellow = 'rgb(255, 170, 0)';

const AnimatedRadioGrid = () => {
   const [selected, setSelected] = useState('yellow');

   return (
      <Wrapper>
         <AnimateSharedLayout>
            <RadioButton
               color={red}
               active={selected === 'red'}
               onClick={() => setSelected('red')}
            />
            <RadioButton
               color={blue}
               active={selected === 'blue'}
               onClick={() => setSelected('blue')}
            />
            <RadioButton
               color={green}
               active={selected === 'green'}
               onClick={() => setSelected('green')}
            />
            <RadioButton
               color={yellow}
               active={selected === 'yellow'}
               onClick={() => setSelected('yellow')}
            />
         </AnimateSharedLayout>
      </Wrapper>
   );
};

export default AnimatedRadioGrid;
