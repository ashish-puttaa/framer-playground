import { useState } from 'react';

import { Wrapper, Handle, GlobalStyles } from './animated-switch.styles';

const spring = {
   type: 'spring',
   stiffness: 700,
   damping: 30,
};

const colors = ['rgb(255, 0, 85)', 'rgb(0, 153, 255)', 'rgb(34, 204, 136)', 'rgb(255, 170, 0)'];

const AnimatedSwitch = () => {
   const [active, setActive] = useState(false);
   const [color, setColor] = useState(colors[0]);

   const handleClick = () => {
      setActive(!active);

      const filteredColors = colors.filter((c) => c !== color);
      const newIndex = Math.floor(Math.random() * (colors.length - 1));
      setColor(filteredColors[newIndex]);
   };

   return (
      <>
         <GlobalStyles />
         <Wrapper onClick={handleClick} active={active} color={color}>
            <Handle layout transition={spring} />
         </Wrapper>
      </>
   );
};

export default AnimatedSwitch;
