import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

/* import { styles } from '../styles'; */
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { Box, Center, Flex, Heading, Image, Text } from '@chakra-ui/react';

const MotionBox = motion(Box);
const MotionText = motion(Text);

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <MotionBox
      bg='tertiary'
      p={5}
      rounded={'2xl'}
      w={{ base: 'full', sm: '360px' }}
      variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        // className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <Box pos='relative' w='full' h='230px'>
          <Image
            w='full'
            h='full'
            objectFit={'cover'}
            rounded='2xl'
            src={image}
            alt='project_image'
          />

          <Flex
            pos='absolute'
            inset={0}
            justifyContent='flex-end'
            m={3}
            //className='card-img_hover'
          >
            <Center
              w={7}
              h={7}
              rounded={'full'}
              bg='blackAlpha.800'
              cursor='pointer'
              onClick={() => window.open(source_code_link, '_blank')}
            >
              <Image
                w={'100%'}
                h={'100%'}
                objectFit={'contain'}
                src={github}
                alt='source code'
                //className='w-1/2 h-1/2'
              />
            </Center>
          </Flex>
        </Box>

        <Box mt={5}>
          <Heading as='h3' color='white' fontWeight={'bold'} fontSize='24px'>
            {name}
          </Heading>
          <Text mt={2} color='secondary' fontSize={'14px'}>
            {description}
          </Text>
        </Box>

        <Flex mt={4} flexWrap='wrap' gap={2}>
          {tags.map((tag) => (
            <Text
              fontSize={'14px'}
              key={`${name}-${tag.name}`}
              className={tag.color}
            >
              #{tag.name}
            </Text>
          ))}
        </Flex>
      </Tilt>
    </MotionBox>
  );
};

const Works = () => {
  return (
    <>
      <MotionBox variants={textVariant()}>
        <Text
          className={'sectionSubText'}
          letterSpacing='wider'
          color='secondary'
          fontSize={{ xs: '14px', md: '18px' }}
          mb='10px'
          textTransform={'uppercase'}
        >
          My work
        </Text>
        <Heading as='h2' fontSize={['3xl', '4xl', '5xl']}>
          Projects.
        </Heading>
      </MotionBox>

      <Flex w='full'>
        <MotionText
          mt={3}
          color='secondary'
          fontSize={{ base: '14px', md: '17px' }}
          maxW='3xl'
          lineHeight={{ base: '25px', md: '30px' }}
          variants={fadeIn('', '', 0.1, 1)}
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </MotionText>
      </Flex>

      <Flex mt={20} flexWrap='wrap' gap={7}>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </Flex>
    </>
  );
};

export default SectionWrapper(Works, '');
