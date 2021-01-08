import { useState } from 'react';
import { AnimateSharedLayout } from 'framer-motion';

import { ReactComponent as CommentsIcon } from '../../assets/comments.svg';
import { ReactComponent as TagsIcon } from '../../assets/user-tag.svg';

import { Wrapper, Button, IconContainer, Text } from './animated-tabs.styles';

import { buttonMotion, textMotion } from './animated-tabs.motion';

const AnimatedTabs = () => {
   const [selected, setSelected] = useState('comments');

   const isCommentsSelected = selected === 'comments';
   const isTagsSelected = selected === 'tags';

   return (
      <Wrapper>
         <AnimateSharedLayout>
            <Button
               {...buttonMotion(isCommentsSelected)}
               onClick={() => setSelected('comments')}
               selected={isCommentsSelected}
            >
               {isCommentsSelected ? (
                  <Text {...textMotion}>Comments</Text>
               ) : (
                  <IconContainer layoutId="icon">
                     <CommentsIcon />
                  </IconContainer>
               )}
            </Button>
            <Button
               {...buttonMotion(isTagsSelected)}
               onClick={() => setSelected('tags')}
               selected={isTagsSelected}
            >
               {isTagsSelected ? (
                  <Text {...textMotion}>Tags</Text>
               ) : (
                  <IconContainer layoutId="icon">
                     <TagsIcon />
                  </IconContainer>
               )}
            </Button>
         </AnimateSharedLayout>
      </Wrapper>
   );
};

export default AnimatedTabs;
