import { Box, List, ListItem, Text, ListIcon, Stack } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

const Skillbox = ({ title, children }) => (
  <Box bg="blackAlpha.200" borderRadius={10}  px={20} py={5}>
    <Text as="h1" fontWeight="bold" fontSize={25} pb={5}>{title}</Text>
    <List spacing={1}>
      {children.map((item, i) => (
        <ListItem key={i}>
          <Stack direction="row" align="center" justify="center">
            <ListIcon as={CheckCircleIcon} color="green.500" />
            {item}
          </Stack>
        </ListItem>
      ))}
    </List>
  </Box>
);

export default Skillbox;
