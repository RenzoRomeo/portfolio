import { Box, useColorModeValue } from '@chakra-ui/react';
import Image from 'next/image';

const Project = ({ title, thumbnail, children }) => (
  <Box
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
  </Box>
);

export default Project;
