import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import { staggerContainer } from '../utils/motion';
const MotionBox = motion(Box);
const StarWrapper = (Component, idName) =>
  function HOC() {
    return (
      <MotionBox
        as='section'
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        px={[6, 6, 16, 16]}
        py={[10, 10, 16, 16]}
        max={'7xl'}
        mx='auto'
        pos='relative'
        zIndex={0}
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>

        <Component />
      </MotionBox>
    );
  };

export default StarWrapper;
