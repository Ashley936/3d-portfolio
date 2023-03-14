import {
  Box,
  Heading,
  HStack,
  VStack,
  Text,
  Center,
  Flex,
  Link,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { ComputersCanvas } from './canvas';

const MotionBox = motion(Box);
const Hero = () => {
  return (
    <Box as='section' pos='relative' w='full' mx='auto' h={'100vh'}>
      <HStack
        pos='absolute'
        inset={0}
        top={'120px'}
        maxW='7xl'
        mx='auto'
        padding='16px'
        alignItems={'flex-start'}
        gap={5}
        pt={5}
      >
        <VStack alignItems={'center'}>
          <Box w={5} h={5} rounded={'full'} bg='#915EFF' />
          <Box w={1} h={{ base: 80, md: 40 }} className='violet-gradient' />
        </VStack>

        <Box>
          <Heading fontSize={'5xl'} as='h1' className={`heroHeadText`}>
            Hi, I'm{' '}
            <Text as='span' color='#915eff'>
              Namita
            </Text>
          </Heading>
          <Text
            fontSize={'lg'}
            mt={3}
            color={'whiteAlpha.900'}
            className={`heroSubText`}
            maxW={{ base: '350px', md: 'fit-content' }}
          >
            I am a full-stack web developer from India
          </Text>
        </Box>
      </HStack>

      <ComputersCanvas />

      <Center
        pos='absolute'
        bottom={['10px', '32px']}
        w='full'
        className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'
      >
        <Link to='#about'>
          <Flex
            w='35px'
            h='64px'
            rounded='3xl'
            border={'4px solid white'}
            borderColor={'secondary'}
            p={2}
            justifyContent='center'
            alignItems={'flex-start'}
          >
            <MotionBox
              w='3'
              h='3'
              rounded='full'
              bg='secondary'
              mb={1}
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
            />
          </Flex>
        </Link>
      </Center>
    </Box>
  );
};

export default Hero;
