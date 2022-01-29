import Head from 'next/head';
import { useState, useEffect } from 'react';
import {
  Box,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react';
import { Container } from '@chakra-ui/react';

import About from '../components/about';
import SkillsList from '../components/skillslist';
import Projects from '../components/projects';
import Contact from '../components/contact';
import Navbar from '../components/navbar';
import Presentation from '../components/presentation';
import Section from '../components/section';
import Title from '../components/title';

import BackToTop from '../components/backtotop';

export default function Home() {
  const [shouldShow, setShouldShow] = useState(false);

  const handleScroll = () => {
    const yPos = window.scrollY;
    setShouldShow(yPos > 500);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, false);
    return () => {
      window.removeEventListener('scroll', handleScroll, false);
    };
  }, []);

  return (
    <Box
      w={{ base: 'container.md', md: '100vw' }}
      bgGradient={useColorModeValue(
        'linear(to-t, #7F7FD5, #86A8E7, #91EAE4)',
        'linear(to-b, #0f0c29, #302b63)'
      )}
      pb={15}
    >
      <Navbar shouldShow={shouldShow} />

      <Presentation id="presentation" />

      <Container maxW="container.xl" align="center">
        <Head>
          <title>Renzo Romeo</title>
        </Head>

        <SimpleGrid columns={[1, 1, 2]} boxSize="fit-content">
          <Section id="about" from="left" h="100%">
            <Title>About Me</Title>
            <About />
          </Section>

          <Section id="skills" from="right" h="100%">
            <Title as="h1" mb={20} fontSize={50}>
              Skills
            </Title>
            <SkillsList />
          </Section>
        </SimpleGrid>

        <Section id="projects">
          <Title as="h1" fontSize={50} mb={20}>
            Projects
          </Title>
          <Projects />
        </Section>

        <Section id="contact">
          <Title as="h1" mb={20} fontSize={50}>
            Contact Me
          </Title>
          <Contact />
        </Section>
      </Container>

      <BackToTop shouldShow={shouldShow} />
    </Box>
  );
}
