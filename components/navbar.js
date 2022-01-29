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
import HoverBox from './hoverbox';
import ToggleTheme from './toggleTheme';

const MotionBox = motion(Box);

const Navbar = ({ shouldShow }) => {
  return (
    <MotionBox
      animate={{
        opacity: shouldShow ? 1 : 0,
        scaleY: shouldShow ? 1 : 0
      }}
      transition={{ duration: 0.2 }}
      initial={{ opacity: 0 }}
      w="100%"
      position="fixed"
      display="flex"
      style={{ backdropFilter: 'blur(10px)' }}
      as="nav"
      zIndex={1}
    >
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
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          justify="space-between"
          px={5}
          fontSize={22}
        >
          <HoverBox>
            <SmoothLink section="about">About Me</SmoothLink>
          </HoverBox>
          <HoverBox>
            <SmoothLink section="skills">Skills</SmoothLink>
          </HoverBox>
          <HoverBox>
            <SmoothLink section="projects">Projects</SmoothLink>
          </HoverBox>
          <HoverBox>
            <SmoothLink section="contact">Contact Me</SmoothLink>
          </HoverBox>
        </Stack>

        <Box
          w="100vw"
          display={{ base: 'inline-block', md: 'none' }}
          align="right"
        >
          <Menu>
            <MenuButton
              as={IconButton}
              icon={<HamburgerIcon />}
              variant="outline"
              aria-label="sections"
              boxSize={20}
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
      <Box p={5} position="fixed" top={-1} display="inline-block">
        <ToggleTheme />
      </Box>
    </MotionBox>
  );
};

export default Navbar;
