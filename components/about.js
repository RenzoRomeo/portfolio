import { Box, Stack } from '@chakra-ui/react';

import AboutItem from './aboutitem';

const About = () => (
  <Box width="100%">
    <Stack
      h="100%"
      borderRadius={10}
      align="center"
      textAlign="justify"
      py={10}
      px={5}
      spacing={{ base: 20, md: 5 }}
      fontSize={25}
      bg="blackAlpha.200"
    >
      <AboutItem side="left" imageName="noimage">
        2021 - Became a freelance full-stack developer.
      </AboutItem>
      <AboutItem side="right" imageName="noimage">
        2020 - Started studying Software Engineering at UNMDP &#40;2025&#41;
      </AboutItem>
      <AboutItem side="left" imageName="noimage">
        2019 - Started Programming.
      </AboutItem>
      <AboutItem side="right" imageName="noimage">
        2001 - Born in Mar del Plata, Argentina.
      </AboutItem>
    </Stack>
  </Box>
);

export default About;
