import { Box, Stack, Text } from '@chakra-ui/react';
import Skillbox from './skillbox';

const SkillsList = ({}) => (
  <Box boxSize="fit-content">
    <Stack spacing={20}>
      <Skillbox title="Frontend">
        <Text>NextJS</Text>
        <Text>ReactJS</Text>
        <Text>ChakraUI</Text>
        <Text>TailwindCSS</Text>
      </Skillbox>

      <Skillbox title="Backend">
        <Text>NodeJS</Text>
        <Text>ExpressJS</Text>
        <Text>MongoDB</Text>
        <Text>PostreSQL</Text>
      </Skillbox>

      <Skillbox title="Programming">
        <Text>Python</Text>
        <Text>C / C++</Text>
      </Skillbox>
    </Stack>
  </Box>
);

export default SkillsList;
