import { Wrapper, Circle, Outline } from './radio-button.styles';

const spring = {
   type: 'spring',
   stiffness: 500,
   damping: 30,
};

const RadioButton = ({ color, active, ...props }) => {
   return (
      <Wrapper {...props}>
         <Circle color={color}>
            {active && (
               <Outline
                  color={color}
                  layoutId="outline"
                  transition={spring}
                  initial={false}
                  animate={{ borderColor: color }}
               />
            )}
         </Circle>
      </Wrapper>
   );
};

export default RadioButton;
