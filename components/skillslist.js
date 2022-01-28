import { Box, Stack, Text } from '@chakra-ui/react';
import Skillbox from './skillbox';

const SkillsList = ({}) => (
  <Box w="100%">
    <Stack spacing={30}>
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

      {/*       <Skill title="Python" side="left" />
      <Skill title="NextJS" side="right" />
      <Skill title="C++" side="left" />
      <Skill title="Javascript" side="right" /> */}
    </Stack>
  </Box>
);

export default SkillsList;
