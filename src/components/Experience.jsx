import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css';

import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';
import {
  Box,
  Center,
  Heading,
  Image,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from '@chakra-ui/react';

const MotionBox = motion(Box);
const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: '#1d1836',
        color: '#fff',
      }}
      contentArrowStyle={{ borderRight: '7px solid  #232631' }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <Center w='full' h='full'>
          <Image
            w='60%'
            h='60%'
            objectFit={'contain'}
            src={experience.icon}
            alt={experience.company_name}
          />
        </Center>
      }
    >
      <Box>
        <Heading as='h3' color='white' fontSize={'24px'} fontWeight='bold'>
          {experience.title}
        </Heading>
        <Text color='secondary' fontWeight='semibold' m={0} fontSize='16px'>
          {experience.company_name}
        </Text>
      </Box>

      <UnorderedList
        mt={5}
        ml={5}
        listStyleType='disc'
        className='mt-5 list-disc ml-5 space-y-2'
      >
        {experience.points.map((point, index) => (
          <ListItem
            color='whiteAlpha.800'
            fontSize={'14px'}
            letterSpacing='wider'
            key={`experience-point-${index}`}
          >
            {point}
          </ListItem>
        ))}
      </UnorderedList>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
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
          What I have done so far
        </Text>
        <Heading as='h2' fontSize={['3xl', '4xl', '5xl']}>
          Work Experience.
        </Heading>
      </MotionBox>

      <VStack mt='20'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </VStack>
    </>
  );
};

export default SectionWrapper(Experience, 'work');
