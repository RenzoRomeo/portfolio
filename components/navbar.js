import {
  Box,
  Container,
  Stack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  useColorModeValue
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
      as="nav"
      zIndex={1}
    >
      <Container
        maxW="container.lg"
        bg={{
          base: '',
          md: useColorModeValue('whiteAlpha.900', 'blackAlpha.900')
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

        <Box
          w="100%"
          display={{ base: 'inline-block', md: 'none' }}
          align="left"
        >
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
      <Box p={5} display="inline-block">
        <ToggleTheme />
      </Box>
    </MotionBox>
  );
};

export default Navbar;
