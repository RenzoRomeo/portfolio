import { SimpleGrid, Text } from '@chakra-ui/react';
import Skillbox from './skillbox';

const SkillsList = ({}) => (
  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={20}>
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
      <Text>PostgreSQL</Text>
    </Skillbox>

    <Skillbox title="Programming">
      <Text>Python</Text>
      <Text>C / C++</Text>
      <Text>Java</Text>
      <Text>Javascript</Text>
    </Skillbox>

    <Skillbox title="DevOps">
      <Text>AWS</Text>
      <Text>Docker</Text>
      <Text>Azure</Text>
    </Skillbox>
  </SimpleGrid>
);

export default SkillsList;
