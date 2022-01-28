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
        <Text>Python &#40;DJango&#41;</Text>
        <Text>ExpressJS</Text>
        <Text>MongoDB</Text>
        <Text>PostgreSQL</Text>
      </Skillbox>

      <Skillbox title="Programming">
        <Text>Python &#40;Scripting / Scraping&#41;</Text>
        <Text>C / C++</Text>
      </Skillbox>
    </Stack>
  </Box>
);

export default SkillsList;
