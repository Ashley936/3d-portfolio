import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { Box, Flex } from '@chakra-ui/react';

const Tech = () => {
  return (
    <Flex justifyContent={'center'} flexWrap={'wrap'} gap={10}>
      {technologies.map((tech) => (
        <Box key={tech.name} h={28} w={28}>
          <BallCanvas icon={tech.icon} />
        </Box>
      ))}
    </Flex>
  );
};

export default Tech;
