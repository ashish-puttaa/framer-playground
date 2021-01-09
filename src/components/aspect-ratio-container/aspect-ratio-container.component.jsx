import { Wrapper, Overlay } from './aspect-ratio-container.styles';

/* This component does not handle overflows */

const AspectRatioContainer = ({ width, aspectRatio, children, ...props }) => {
   return (
      <div>
         <Wrapper aspectRatio={aspectRatio} width={width}>
            <Overlay {...props}>{children}</Overlay>
         </Wrapper>
      </div>
   );
};

export default AspectRatioContainer;
