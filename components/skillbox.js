import { Box, Text, Stack } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

import HoverBox from './hoverbox';

const Skillbox = ({ title, children }) => (
  <Box bg="blackAlpha.200" borderRadius={10} px={20} py={5}>
    <Text as="h1" fontWeight="bold" fontSize={25} pb={5}>
      {title}
    </Text>
    <Box mx={20} px={20} pl={20} ml={20}>
      <Stack spacing={1} direction="column">
        {children.map((item, i) => (
          <HoverBox key={i}>
            <Stack direction="row" align="center">
              <CheckCircleIcon color="green.500" />
              {item}
            </Stack>
          </HoverBox>
        ))}
      </Stack>
    </Box>
  </Box>
);

export default Skillbox;
