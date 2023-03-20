import { Box, Heading } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  StarsCanvas,
  Tech,
  Works,
} from './components';
const App = () => {
  return (
    <BrowserRouter>
      <Box pos='relative' zIndex={0} bg={'primary'}>
        <Box
          bgImg={"url('/src/assets/herobg.png')"}
          bgPos='center'
          bgSize={'cover'}
          bgRepeat='no-repeat'
        >
          <Navbar />
          <Hero />
        </Box>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks /> {/* WON'T DO */}
        <Box pos='relative' zIndex={0}>
          <Contact />
          <StarsCanvas />
        </Box>
      </Box>
    </BrowserRouter>
  );
};

export default App;
