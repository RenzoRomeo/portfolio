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
      animate={{ opacity: shouldShow ? 1 : 0 }}
      initial={{ opacity: 0 }}
      w="100%"
      position="fixed"
      as="nav"
      zIndex={1}
    >
      <Container
        maxW="container.lg"
        bg={{ base: '', md: 'blackAlpha.200' }}
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

        <Box display={{ base: 'inline-block', md: 'none' }} alignSelf="right">
          <Menu>
            <MenuButton
              as={IconButton}
              icon={<HamburgerIcon />}
              variant="outline"
              aria-label="sections"
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
      <Box align="right" p={5} position="fixed" zIndex={1} top={3} right={2}>
        <ToggleTheme />
      </Box>
    </MotionBox>
  );
};

export default Navbar;
