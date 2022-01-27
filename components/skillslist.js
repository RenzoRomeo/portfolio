import { Box, Stack } from '@chakra-ui/react';

import Skill from './skill';

import nextThumb from '../public/images/next.png';
import jsThumb from '../public/images/javascript.png';
import pythonThumb from '../public/images/python.png';
import cppThumb from '../public/images/c++.png';

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
