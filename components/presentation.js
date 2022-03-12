import { Stack, Text } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

import SmoothLink from './smoothlink';
import HoverBox from './hoverbox';

const Presentation = () => (
  <Stack w="100%" h="100vh" align="center" justify="center" fontSize={100}>
    <Text>Hi, I am</Text>
    <Text
      bgGradient="linear(to-r, #ee0979, #ff6a00)"
      bgClip="text"
      fontWeight="bold"
    >
      Renzo
    </Text>

    <HoverBox>
      <SmoothLink section="projects">
        <ChevronDownIcon cursor="pointer" />
      </SmoothLink>
    </HoverBox>
  </Stack>
);

export default Presentation;
