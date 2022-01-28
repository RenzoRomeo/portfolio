import NextLink from 'next/link';
import Image from 'next/image';
import { Box, LinkBox, useColorModeValue } from '@chakra-ui/react';

import HoverBox from './hoverbox';

const Project = ({ title, thumbnail, children }) => (
  <NextLink href="https://github.com/RenzoRomeo" passHref>
    <LinkBox cursor="pointer">
      <HoverBox
        scale={1.05}
        w="100%"
        borderWidth="1px"
        borderRadius="lg"
        borderColor={useColorModeValue('blackAlpha.500', 'whiteAlpha.500')}
        overflow="hidden"
      >
        <Image src={thumbnail} alt={title} loading="lazy" placeholder="blur" />

        <Box p={6} align="center">
          <Box display="flex" flexDir="column">
            <Box fontSize={25} fontWeight="bold" pb={7}>
              {title}
            </Box>
            <Box fontSize={15} textAlign="justify">
              {children}
            </Box>
          </Box>
        </Box>
      </HoverBox>
    </LinkBox>
  </NextLink>
);

export default Project;
