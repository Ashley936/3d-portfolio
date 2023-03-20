import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import {
  Box,
  Card,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';

const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionCard = motion(Card);
const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='cardTilt'>
    <MotionCard
      variant={'red'}
      w={{ xs: '250px', md: 'full' }}
      maxW={{ md: '250px' }}
      p='1px'
      borderRadius='20px'
      flex={1}
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className='green-pink-gradient'
      boxShadow='0px 35px 120px -15px #211e35'
    >
      <VStack
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        rounded='20px'
        py={5}
        px={12}
        minH='280px'
        justifyContent={'space-evenly'}
        alignItems='center'
        bg='purple'
      >
        <Image
          src={icon}
          alt='web-development'
          w={'50px'}
          h={'50px'}
          objectFit={'contain'}
        />

        <Heading
          as='h3'
          color='white'
          fontSize={'20px'}
          fontWeight='bold'
          textAlign={'center'}
        >
          {title}
        </Heading>
      </VStack>
    </MotionCard>
  </Tilt>
);

const About = () => {
  return (
    <>
      <MotionBox variants={textVariant()}>
        <Text
          className={'sectionSubText'}
          letterSpacing='wider'
          color='secondary'
          fontSize={{ xs: '14px', md: '18px' }}
          mb='10px'
        >
          INTRODUCTION
        </Text>
        <Heading as='h2' fontSize={['3xl', '4xl', '5xl']}>
          Overview.
        </Heading>
      </MotionBox>

      <MotionText
        variants={fadeIn('', '', 0.1, 1)}
        mt={4}
        fontSize={{ base: '14px', md: '17px' }}
        maxW='3xl'
        lineHeight={{ base: '25px', md: '30px' }}
        color='secondary' // may change
      >
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </MotionText>

      <Flex mt={20} flexWrap='wrap' gap={10}>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </Flex>
    </>
  );
};

export default SectionWrapper(About, 'about');
