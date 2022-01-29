import Image from 'next/image';
import { Box, LinkBox, useColorModeValue } from '@chakra-ui/react';

import HoverBox from './hoverbox';

const Project = ({ title, thumbnail, repo, children }) => (
  <a
    href={`https://github.com/RenzoRomeo/${repo}`}
    target="_blank"
    rel="noreferrer"
  >
    <LinkBox cursor="pointer">
      <HoverBox
        scale={1.05}
        w="100%"
        borderColor={useColorModeValue('blackAlpha.500', 'whiteAlpha.500')}
        overflow="hidden"
      >
        <Image src={thumbnail} alt={title} loading="lazy" placeholder="blur" />
        <Box p={6} align="center">
          <Box display="flex" flexDir="column">
            <Box fontSize={30}>
              {title}
            </Box>
            <Box fontSize={15} textAlign="justify">
              {children}
            </Box>
          </Box>
        </Box>
      </HoverBox>
    </LinkBox>
  </a>
);

export default Project;
