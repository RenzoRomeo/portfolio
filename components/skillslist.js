import { Box, Stack, Text } from '@chakra-ui/react';
import Skillbox from './skillbox';

const SkillsList = ({}) => (
  <Box w="100%">
    <Stack spacing={30}>
      <Skillbox title="Frontend">
        <Text>asd</Text>
        <Text>asd</Text>
        <Text>asd</Text>
        <Text>asd</Text>
      </Skillbox>

      <Skillbox title="Backend">
        <Text>asd</Text>
        <Text>asd</Text>
        <Text>asd</Text>
        <Text>asd</Text>
      </Skillbox>

      <Skillbox title="Backend">
        <Text>asd</Text>
        <Text>asd</Text>
        <Text>asd</Text>
        <Text>asd</Text>
      </Skillbox>

      {/*       <Skill title="Python" side="left" />
      <Skill title="NextJS" side="right" />
      <Skill title="C++" side="left" />
      <Skill title="Javascript" side="right" /> */}
    </Stack>
  </Box>
);

export default SkillsList;
