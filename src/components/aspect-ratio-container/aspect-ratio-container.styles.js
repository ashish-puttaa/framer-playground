import styled from 'styled-components';

const calculateHeight = (aspectRatio) => {
   const [widthR, heightR] = aspectRatio.split(':');
   const percentage = (heightR / widthR) * 100;
   return `${percentage}%`;
};

export const Wrapper = styled.div`
   width: ${(props) => props.width};
   height: 0;
   padding-bottom: ${(props) => props.aspectRatio && calculateHeight(props.aspectRatio)};
   position: relative;
`;

export const Overlay = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
`;
