import { Box, Center, Heading, Text, VStack } from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { motion } from 'framer-motion';

import { slideIn, staggerContainer, textVariant } from '../../utils/motion';
const MotionBox = motion(Box);

export const SkillPage = ({ lightMode }) => {
  const [mainWidth, setMainWidth] = useState(0);
  const mainCircle = useRef();

  let width1 = 0.4 * mainWidth; // 1 , 2
  let top1 = (mainWidth - width1) / 2;
  let side1 = mainWidth / 2 - width1;

  let width2 = 0.3 * mainWidth; // 3 , 4
  let top2 = (mainWidth - 0.97 * width1 - 2 * width2) / 2;
  let side2 = (mainWidth - width2) / 2;

  let width3 = 0.18 * mainWidth; // 5 , 6, 7, 8
  let top3 = (mainWidth - 1.04 * width1 - 2 * width3) / 2;
  let side3 = (mainWidth - 1.04 * width2 - 2 * width3) / 2;

  let width4 = 0.13 * mainWidth; // 9, 10
  let top4 = top1 - 0.55 * width4;
  let side4 = side3 - 0.9 * width4;

  let width5 = 0.09 * mainWidth; // 11, 12, 13, 14
  let top5 = top1 - 0.1 * width5;
  let side5 = side1 - 0.75 * width5;

  let width6 = 0.06 * mainWidth; // 15, 16
  let top6 = top1 - 0.55 * width6;
  let side6 = side3 - 0.45 * width6;

  let width7 = 0.04 * mainWidth;
  let circles = [
    {
      width: width1,
      height: width1,
      top: top1,
      left: side1 - 5,
    },
    {
      width: width1,
      height: width1,
      top: top1,
      right: side1 - 5,
    },
    {
      width: width2,
      height: width2,
      top: top2 + 20,
      left: side2,
    },
    {
      width: width2,
      height: width2,
      bottom: top2 + 20,
      left: side2,
    },
    {
      width: width3,
      height: width3,
      top: top3,
      left: side3,
    },
    {
      width: width3,
      height: width3,
      top: top3,
      right: side3,
    },
    {
      width: width3,
      height: width3,
      bottom: top3,
      left: side3,
    },
    {
      width: width3,
      height: width3,
      bottom: top3,
      right: side3,
    },
    {
      width: width4,
      height: width4,
      top: top4,
      left: side4,
    },
    {
      width: width4,
      height: width4,
      bottom: top4,
      right: side4,
    },
    {
      width: width5,
      height: width5,
      top: top5,
      right: side5,
    },
    {
      width: width5,
      height: width5,
      bottom: top5,
      left: side5,
    },
    {
      width: width5,
      height: width5,
      top: top5 - 1.1 * width5,
      right: side3 - 1.1 * width5,
    },
    {
      width: width5,
      height: width5,
      bottom: top5 - 1.1 * width5,
      left: side3 - 1.1 * width5,
    },
    {
      width: width6,
      height: width6,
      top: top6,
      right: side6,
    },
    {
      width: width6,
      height: width6,
      bottom: top6,
      left: side6,
    },
    {
      width: width6,
      height: width6,
      top: top5 + 1.1 * width5,
      right: side5,
    },
    { width: width6, height: width6, bottom: top5 + 1.1 * width5, left: side5 },
    {
      width: width6,
      height: width6,
      top: top3 - 0.7 * width6,
      left: side2 - 0.8 * width6,
    },
    { width: width6, height: width6, top: top3 - 1.6 * width6, left: side2 },
    {
      width: width6,
      height: width6,
      top: top3 - 1.3 * width6,
      right: side2 - 7,
    },
    {
      width: width6,
      height: width6,
      top: -1,
      right: side2 + 0.7 * width6,
    },
    {
      width: width7,
      height: width7,
      top: top2,
      left: side2 + width6 + 5,
    },
    {
      width: width7,
      height: width7,
      top: top3 - 0.5 * width7,
      right: side2 - 0.8 * width7,
    },
  ];
  let logos = [
    'logos:nodejs',
    'logos:react',
    'logos:typescript-icon-round',
    'logos:redux',
    'vscode-icons:file-type-node2',
    'logos:figma',
    'logos:python',
    'logos:mongodb-icon',
    'logos:css-3',
    'logos:c-plusplus',
    'logos:react-router',
    'bytesize:github',
    'logos:react-spring',
    'logos:c',
    'logos:framer',
    'simple-icons:chakraui',
    'logos:firebase',
    'logos:bootstrap',
    'logos:babel',
    'cib:jquery',
    'cib:next-js',
    'vscode-icons:file-type-matlab',
    'bi:git',
    'logos:handlebars',
  ];
  const renderSmallCircles = (style, index) => {
    return (
      <Box
        key={index}
        borderRadius={'50%'}
        bg={'white'}
        p={'1px'}
        pos={'absolute'}
        style={style}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        fontSize={'1rem'}
        color='black'
        transform='scale(1)'
        transition={'all linear 0.3s'}
        _hover={{ transform: 'scale(1.05)' }}
      >
        {logos[index] ? (
          <Icon
            icon={logos[index]}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
            }}
            color={
              logos[index] === 'bi:git'
                ? '#E84D31'
                : logos[index] === 'simple-icons:chakraui'
                ? '#55C8C6'
                : logos[index] === 'cib:jquery'
                ? '#0075F7'
                : ''
            }
          />
        ) : (
          index
        )}
      </Box>
    );
  };
  useEffect(() => {
    let main = mainCircle.current;
    setMainWidth(main.clientWidth);
    window.addEventListener('resize', () => {
      setMainWidth(main.clientWidth);
    });
    return () => {
      window.removeEventListener('resize', () => {
        setMainWidth(main.clientWidth);
      });
    };
  }, []);
  return (
    <MotionBox
      as='section'
      variants={staggerContainer()}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.05 }}
      pos='relative'
      zIndex={0}
    >
      <MotionBox
        variants={slideIn('left', 'tween', 0.2, 1)}
        mt={'17px'}
        mb={'34px'}
        ml={'10'}
      >
        <Text
          letterSpacing='wider'
          color='secondary'
          fontSize={{ xs: '14px', md: '18px' }}
          mb='10px'
          textTransform={'uppercase'}
        >
          What can I do
        </Text>
        <Heading as='h2' fontSize={['3xl', '4xl', '5xl']}>
          My Skills.
        </Heading>
      </MotionBox>
      <VStack overflowX={'hidden'} py={2}>
        <Box
          w={'100vw'}
          h={'100vw'}
          maxW={'700px'}
          maxH={'700px'}
          borderRadius={'50%'}
          bg={'tertiary'}
          ref={mainCircle}
          pos={'relative'}
          boxShadow={
            lightMode ? '0px -1px 12px #8E8D8A' : '0px -1px 12px #434141'
          }
        >
          {circles.map((style, index) => renderSmallCircles(style, index))}
        </Box>
      </VStack>
    </MotionBox>
  );
};
