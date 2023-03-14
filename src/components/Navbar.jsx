import React, { useEffect, useState } from 'react';

import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';
import {
  Box,
  Center,
  Flex,
  Image,
  Link,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from '@chakra-ui/react';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Center
      as='nav'
      w='full'
      py={5}
      px={'16px'}
      pos='fixed'
      top={0}
      zIndex={20}
      bg={scrolled ? 'primary' : 'transparent'}
    >
      <Center w='full' justifyContent={'space-between'} maxW='7xl' mx='auto'>
        <Link
          to='/'
          display={'flex'}
          gap={2}
          alignItems='center'
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <Image src={logo} alt='logo' w={9} h={9} objectFit='contain' />
          <Flex as='p' fontSize='18px' fontWeight={600} cursor='pointer'>
            Namita &nbsp;
            <Text as='span' display={{ base: 'none', md: 'block' }}>
              {' '}
              | JavaScript Mastery
            </Text>
          </Flex>
        </Link>

        <UnorderedList
          listStyleType={'none'}
          display={{ base: 'none', md: 'flex' }}
          justifyContent='flex-end'
          flex={1}
          gap={10}
        >
          {navLinks.map((nav) => (
            <ListItem
              key={nav.id}
              fontSize='18px'
              fontWeight={'500'}
              color={active === nav.title ? '#fff' : 'secondary'}
              _hover={{
                color: '#fff',
                transform: 'scale(1.05)',
                cursor: 'pointer',
              }}
              onClick={() => setActive(nav.title)}
            >
              <Link to={`#${nav.id}`} _hover={{ textDecor: 'none' }}>
                {nav.title}
              </Link>
            </ListItem>
          ))}
        </UnorderedList>

        <Flex
          display={{ base: 'flex', md: 'none' }}
          flex={1}
          justifyContent='flex-end'
          alignItems={'center'}
        >
          <Image
            src={toggle ? close : menu}
            alt='menu'
            w='28px'
            h='28px'
            objectFit={'contain'}
            cursor='pointer'
            onClick={() => setToggle(!toggle)}
          />

          <Box
            display={!toggle ? 'none' : 'flex'}
            p={6}
            pos='absolute'
            top={'40px'}
            right={0}
            mx={4}
            my={7}
            minW={'140px'}
            zIndex={10}
            borderRadius='xl'
            className={'black-gradient'}
          >
            <VStack
              as='ul'
              justifyContent={'flex-end'}
              flex={1}
              gap={4}
              listStyleType={'none'}
            >
              {navLinks.map((nav) => (
                <Text
                  as='li'
                  key={nav.id}
                  fontWeight='medium'
                  cursor={'pointer'}
                  fontSize='16px'
                  color={active === nav.title ? '#fff' : '#eee'}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                  _hover={{
                    color: '#fff',
                    transform: 'scale(1.05)',
                    cursor: 'pointer',
                  }}
                >
                  <Link to={`#${nav.id}`} _hover={{ textDecor: 'none' }}>
                    {nav.title}
                  </Link>
                </Text>
              ))}
            </VStack>
          </Box>
        </Flex>
      </Center>
    </Center>
  );
};

export default Navbar;
