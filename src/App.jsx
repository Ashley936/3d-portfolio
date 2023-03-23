import { Box, Heading } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';
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
import { SkillPage } from './components/mobile/Skills';
import { BgContactCanvas } from './components/mobile/BgContactCanvas';
import { herobgMin } from './assets';
const App = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia('(max-width: 600px)');

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);
  return (
    <BrowserRouter>
      <Box pos='relative' zIndex={0} bg={'primary'}>
        <Box
          bg='primary'
          bgImg={herobgMin}
          bgPos='center'
          bgSize={'cover'}
          bgRepeat='no-repeat'
        >
          <Navbar />
          <Hero isMobile={isMobile} />
        </Box>
        <About />
        <Box overflowX={'hidden'}>
          <Experience />
        </Box>
        {isMobile ? <SkillPage /> : <Tech />}
        <Works />
        {/* <Feedbacks /> */} {/* WON'T DO */}
        <Box pos='relative' zIndex={0}>
          <Contact />
          {isMobile && <BgContactCanvas />}
          {!isMobile && <StarsCanvas />}
        </Box>
      </Box>
    </BrowserRouter>
  );
};
// fine tune some changes
// delete skill balls, earth, comp for mobile
// and use the second portfolio parts

// change img format and try ✅
// remove stars and try ✅
export default App;
