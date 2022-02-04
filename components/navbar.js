import { useState } from 'react';
import {
  Box,
  Container,
  Stack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';

import SmoothLink from './smoothlink';
import ToggleTheme from './toggleTheme';
import NavbarButton from './navbarButton';

const MotionStack = motion(Stack);

const Navbar = ({ shouldShow }) => {
  const [pressed, setPressed] = useState('about');
  const handleClick = section => {
    setPressed(section);
  };

  return (
    <MotionStack
      animate={{
        opacity: shouldShow ? 1 : 0,
        scaleY: shouldShow ? 1 : 0
      }}
      transition={{ duration: 0.2 }}
      initial={{ opacity: 0 }}
      position="fixed"
      direction={{ base: 'row', md: 'column' }}
      h={{ base: 'fit-content', md: '100%' }}
      w={{ base: '100%', md: 'fit-content' }}
      display="flex"
      style={{ backdropFilter: 'blur(10px)' }}
      as="nav"
      zIndex={1}
      align="center"
    >
      <Box p={5} display="inline-block">
        <ToggleTheme />
      </Box>
      <Container
        maxW="container.xl"
        bg={{
          base: '',
          md: ''
        }}
        style={{ base: '', md: { backdropFilter: 'blur(10px)' } }}
        py={5}
        align="center"
        w="100%"
        justifyContent="space-around"
        borderRadius={10}
      >
        <Stack
          direction="column"
          display={{ base: 'none', md: 'flex' }}
          justify="space-between"
          px={5}
          fontSize={22}
          spacing={10}
        >
          <NavbarButton
            section="about"
            onClick={handleClick}
            pressed={pressed}
            title="About Me"
          />
          <NavbarButton
            section="skills"
            onClick={handleClick}
            pressed={pressed}
            title="My Skills"
          />
          <NavbarButton
            section="projects"
            onClick={handleClick}
            pressed={pressed}
            title="My Projects"
          />
          <NavbarButton
            section="contact"
            onClick={handleClick}
            pressed={pressed}
            title="Contact Me"
          />
        </Stack>

        <Box
          w="100%"
          display={{ base: 'inline-block', md: 'none' }}
          align="right"
        >
          <Menu>
            <MenuButton
              as={IconButton}
              icon={<HamburgerIcon />}
              variant="outline"
              aria-label="sections"
              boxSize={10}
            ></MenuButton>
            <MenuList>
              <SmoothLink section="about">
                <MenuItem>About</MenuItem>
              </SmoothLink>
              <SmoothLink section="skills">
                <MenuItem>Skills</MenuItem>
              </SmoothLink>
              <SmoothLink section="projects">
                <MenuItem>Projects</MenuItem>
              </SmoothLink>
              <SmoothLink section="contact">
                <MenuItem>Contact</MenuItem>
              </SmoothLink>
            </MenuList>
          </Menu>
        </Box>
      </Container>
    </MotionStack>
  );
};

export default Navbar;
