import { Heading } from '@chakra-ui/react';

const Title = ({ children }) => (
  <Heading
    boxSize="fit-content"
    as="h1"
    mb={20}
    pb={1}
    fontSize={50}
    bgGradient="linear(to-r, #ee0979, #ff6a00)"
    bgClip="text"
  >
    {children}
  </Heading>
);

export default Title;
