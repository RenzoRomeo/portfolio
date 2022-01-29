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
        I study Software Engineering at UNMDP &#40;2020 - 2025&#41;
      </AboutItem>
      <AboutItem side="right" imageName="noimage">
        I started programming in 2019
      </AboutItem>
      <AboutItem side="left" imageName="noimage">
        I was born on december 2001
      </AboutItem>
      <AboutItem side="right" imageName="noimage">
        I am from Argentina
      </AboutItem>
    </Stack>
  </Box>
);

export default About;
