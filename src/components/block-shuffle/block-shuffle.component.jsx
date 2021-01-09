import { useState } from 'react';
import { Wrapper, Block, Button, GlobalStyles } from './block-shuffle.styles';

import { colors } from '../../utils/colors';
import { shuffleArray } from '../../utils/functions';

const { red, blue, green, yellow } = colors;
const blockData = [
   { color: red, height: '45px' },
   { color: blue, height: '60px' },
   { color: green, height: '30px' },
   { color: yellow, height: '75px' },
];

const BlockShuffle = () => {
   const [blocks, setBlocks] = useState(blockData);

   const handleClick = () => {
      const shuffled = shuffleArray([...blocks]);
      setBlocks(shuffled);
   };

   return (
      <>
         <GlobalStyles />
         <Wrapper>
            {blocks.map(({ color, height }, i) => (
               <Block
                  key={color}
                  color={color}
                  height={height}
                  layout
                  transition={{ type: 'spring', bounce: 0.35 }}
               />
            ))}
            <Button onClick={handleClick}>Shuffle</Button>
         </Wrapper>
      </>
   );
};

export default BlockShuffle;
