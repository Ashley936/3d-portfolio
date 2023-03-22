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
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import TypewriterComponent from 'typewriter-effect';
import { ComputersCanvas } from './canvas';
import { Socials } from './mobile/Socials';

const MotionBox = motion(Box);
const Hero = ({ isMobile }) => {
  return (
    <Box as='section' pos='relative' w='full' mx='auto' h={'100vh'}>
      <HStack
        pos='absolute'
        inset={0}
        top={'120px'}
        maxW='7xl'
        mx={{ base: 'auto', lg: '10vw' }}
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
            fontSize={'17px'}
            mt={4}
            color={'whiteAlpha.900'}
            className={`heroSubText`}
            maxW={'450px'}
          >
            I am a full-stack Web developer from India. I love working on
            creative and unique projects. I am currently{' '}
            <TypewriterComponent
              className='HomePage-typewriter'
              options={{
                strings: [
                  'studying engineering.',
                  'doing freelancing.',
                  'learning DSA.',
                ],
                cursor: `<span style={{fontSize: "3rem"}}>|</span>`,
                delay: 100,
                autoStart: true,
                loop: true,
              }}
            />{' '}
          </Text>
          <Text></Text>
        </Box>
      </HStack>

      {!isMobile && <ComputersCanvas isMobile={isMobile} />}
      {isMobile && (
        <>
          <Box pos='absolute' bottom='25%' left='20%'>
            <Socials icon={FaGithub} />
          </Box>
          <Box pos='absolute' bottom='33%' right='20%'>
            <Socials icon={FaLinkedinIn} />
          </Box>
        </>
      )}
      <Center pos='absolute' bottom={['10px', '32px']} w='full'>
        <a href='#about'>
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
        </a>
      </Center>
    </Box>
  );
};

export default Hero;
