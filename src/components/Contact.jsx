import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
} from '@chakra-ui/react';

const MotionBox = motion(Box);
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(form);

    /* 
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Namita Rastogi",
          from_email: form.email,
          to_email: "namitarastogimwn@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
    */
  };

  return (
    <Flex
      mt={{ lg: 12 }}
      flexDir={{ base: 'column-reverse', lg: 'row' }}
      gap={5}
      overflow='hidden'
    >
      <MotionBox
        variants={slideIn('left', 'tween', 0.2, 1)}
        flex={0.75}
        minW={{ lg: '390px' }}
        bg={'blackAlpha.500'}
        p={8}
        rounded='2xl'
        // className='flex-[0.75]'
      >
        <Text
          className={'sectionSubText'}
          letterSpacing='wider'
          color='secondary'
          fontSize={{ xs: '14px', md: '18px' }}
          mb='10px'
          textTransform={'uppercase'}
        >
          Get in touch
        </Text>
        <Heading as='h2' fontSize={['3xl', '4xl', '5xl']}>
          Contact.
        </Heading>
        <Box mt={12}>
          <form ref={formRef} onSubmit={handleSubmit}>
            <FormControl color='white' fontWeight={'medium'} mb={8}>
              <FormLabel mb={4}>Your Name</FormLabel>
              <Input
                bg='tertiary'
                py={4}
                px={6}
                rounded='lg'
                outline='none'
                border='none'
                _placeholder={{ color: 'secondary' }}
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
              />
            </FormControl>
            <FormControl color='white' fontWeight={'medium'} mb={8}>
              <FormLabel mb={4}>Your email</FormLabel>
              <Input
                bg='tertiary'
                py={4}
                px={6}
                rounded='lg'
                outline='none'
                border='none'
                _placeholder={{ color: 'secondary' }}
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder="What's your web address?"
              />
            </FormControl>
            <FormControl color='white' fontWeight={'medium'} mb={8}>
              <FormLabel mb={4}>Your Message</FormLabel>
              <Textarea
                bg='tertiary'
                py={4}
                px={6}
                rounded='lg'
                outline='none'
                border='none'
                _placeholder={{ color: 'secondary' }}
                rows={7}
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder='What you want to say?'
              />
            </FormControl>

            <Button
              bg='tertiary'
              py={3}
              px={8}
              rounded='xl'
              outlineColor='transparent'
              w='fit-content'
              color={'white'}
              fontWeight='bold'
              _hover={{ transform: 'scale(1.05)' }}
              type='submit'
            >
              {loading ? 'Sending...' : 'Send'}
            </Button>
          </form>
        </Box>
      </MotionBox>

      <MotionBox
        flex={{ lg: 1 }}
        h={{ base: '350px', md: '550px', lg: 'auto' }}
        variants={slideIn('right', 'tween', 0.2, 1)}
      >
        <EarthCanvas />
      </MotionBox>
    </Flex>
  );
};

export default SectionWrapper(Contact, 'contact');
