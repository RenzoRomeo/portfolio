import { Box, Container, Stack } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import SmoothLink from './smoothlink';
import HoverBox from './hoverbox';

const MotionBox = motion(Box);

const Navbar = ({ shouldShow }) => {
  return (
    <MotionBox
      animate={{ opacity: shouldShow ? 1 : 0 }}
      initial={{ opacity: 0 }}
      w="100%"
      position="fixed"
      as="nav"
      zIndex={1}
    >
      <Container
        maxW="container.lg"
        bg="blackAlpha.200"
        style={{ backdropFilter: 'blur(10px)' }}
        my={5}
        py={5}
        align="center"
        borderRadius={10}
      >
        <Stack
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          px={5}
          fontSize={25}
        >
          <HoverBox fontWeight="bold">
            <SmoothLink section="about">About Me</SmoothLink>
          </HoverBox>
          <HoverBox fontWeight="bold">
            <SmoothLink section="skills">Skills</SmoothLink>
          </HoverBox>
          <HoverBox fontWeight="bold">
            <SmoothLink section="projects">Projects</SmoothLink>
          </HoverBox>
          <HoverBox fontWeight="bold">
            <SmoothLink section="contact">Contact Me</SmoothLink>
          </HoverBox>
        </Stack>
      </Container>
    </MotionBox>
  );
};

export default Navbar;
