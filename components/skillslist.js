import { SimpleGrid, Text } from '@chakra-ui/react';
import Skillbox from './skillbox';

const SkillsList = ({}) => (
  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={20}>
    <Skillbox title="Frontend">
      <Text>NextJS</Text>
      <Text>React</Text>
      <Text>React Native</Text>
      <Text>Redux</Text>
      <Text>Typescript</Text>
    </Skillbox>

    <Skillbox title="Backend">
      <Text>DJango</Text>
      <Text>NodeJS</Text>
      <Text>ExpressJS</Text>
      <Text>MongoDB</Text>
      <Text>PostgreSQL</Text>
    </Skillbox>

    <Skillbox title="Programming">
      <Text>Python</Text>
      <Text>C</Text>
      <Text>C++</Text>
      <Text>Java</Text>
      <Text>Javascript</Text>
    </Skillbox>

    <Skillbox title="Other Tools">
      <Text>AWS</Text>
      <Text>Docker</Text>
      <Text>GIT</Text>
      <Text>Linux</Text>
      <Text>Firebase</Text>
    </Skillbox>
  </SimpleGrid>
);

export default SkillsList;
