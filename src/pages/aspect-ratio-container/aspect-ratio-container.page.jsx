import styled from 'styled-components';
import AspectRatioContainer from '../../components/aspect-ratio-container';

const AspectRatioContainerStyled = styled(AspectRatioContainer)`
   background-color: rgb(255, 0, 85);
   color: white;
   font-size: 24px;
   display: grid;
   place-items: center;
   border-radius: 10px;

   li {
      list-style: none;
      padding: 15px;
   }
`;

const AspectRatioContainerPage = () => {
   return (
      <AspectRatioContainerStyled width="500px" aspectRatio="4:3">
         <div>
            <li>width - 500px</li>
            <li>aspectRatio - 4:3</li>
         </div>
      </AspectRatioContainerStyled>
   );
};

export default AspectRatioContainerPage;
