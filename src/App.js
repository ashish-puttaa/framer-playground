import AnimatedTabs from './components/animated-tabs';
import styled from 'styled-components';

const Wrapper = styled.div`
   display: grid;
   place-items: center;
   height: 80vh;
`;

function App() {
   return (
      <Wrapper>
         <AnimatedTabs />
      </Wrapper>
   );
}

export default App;
