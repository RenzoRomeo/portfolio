import { Box, Stack } from '@chakra-ui/react';

import Skill from './skill';

const SkillsList = ({}) => (
  <Box w="100%">
    <Stack spacing={30}>
      <Skill title="NextJS" side="left" />
      <Skill title="Javascript" side="right" />
      <Skill title="Python" side="left" />
      <Skill title="C++" side="right" />
    </Stack>
  </Box>
);

export default SkillsList;
