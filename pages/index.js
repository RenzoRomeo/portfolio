import Head from 'next/head';
import { useState, useEffect } from 'react';
import { Box, SimpleGrid, Stack, useColorModeValue } from '@chakra-ui/react';
import { Container } from '@chakra-ui/react';

import SkillsList from '../components/skillslist';
import Navbar from '../components/navbar';
import Presentation from '../components/presentation';
import Section from '../components/section';
import Project from '../components/project';
import Title from '../components/title';

import BackToTop from '../components/backtotop';
import AboutItem from '../components/aboutitem';

import huluThumb from '../public/images/projects/hulu.png';
import spotifyThumb from '../public/images/projects/spotify.png';
import asteroidsThumb from '../public/images/projects/asteroids.png';
import raycasterThumb from '../public/images/projects/raycaster.png';

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
      w="100%"
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

            <Box width="100%">
              <Stack
                h="100%"
                borderRadius={10}
                align="center"
                textAlign="justify"
                py={10}
                px={5}
                spacing={{ base: 20, md: 5 }}
                fontSize={25}
                bg="blackAlpha.200"
              >
                <AboutItem side="left" imageName="noimage">
                  I am 20 years old
                </AboutItem>
                <AboutItem side="right" imageName="noimage">
                  I am from Argentina
                </AboutItem>
                <AboutItem side="left" imageName="noimage">
                  I started programming in 2019
                </AboutItem>
                <AboutItem side="right" imageName="noimage">
                  I study Software Engineering at UNMDP &#40;2020 - 2025&#41;
                </AboutItem>
              </Stack>
            </Box>
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

          <SimpleGrid
            columns={[1, 1, 2]}
            spacing={10}
            bg="blackAlpha.200"
            p={10}
            borderRadius={15}
          >
            <Project
              title="Spotify Clone"
              thumbnail={spotifyThumb}
              repo="spotify-clone"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum,
              quaerat quam vel sed eos ut est porro soluta error aspernatur
              ipsam. In vel suscipit labore totam delectus, optio quam dicta? Ab
              esse neque quasi inventore similique dolores earum, laudantium
              obcaecati, hic, aut nostrum minima adipisci totam? Ullam facere
              nesciunt vel.
            </Project>
            <Project title="Hulu Clone" thumbnail={huluThumb} repo="hulu-clone">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum,
              quaerat quam vel sed eos ut est porro soluta error aspernatur
              ipsam. In vel suscipit labore totam delectus, optio quam dicta? Ab
              esse neque quasi inventore similique dolores earum, laudantium
              obcaecati, hic, aut nostrum minima adipisci totam? Ullam facere
              nesciunt vel.
            </Project>
            <Project
              title="Asteroids clone"
              thumbnail={asteroidsThumb}
              repo="asteroids"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum,
              quaerat quam vel sed eos ut est porro soluta error aspernatur
              ipsam. In vel suscipit labore totam delectus, optio quam dicta? Ab
              esse neque quasi inventore similique dolores earum, laudantium
              obcaecati, hic, aut nostrum minima adipisci totam? Ullam facere
              nesciunt vel.
            </Project>
            <Project
              title="Raycaster"
              thumbnail={raycasterThumb}
              repo="raycaster"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum,
              quaerat quam vel sed eos ut est porro soluta error aspernatur
              ipsam. In vel suscipit labore totam delectus, optio quam dicta? Ab
              esse neque quasi inventore similique dolores earum, laudantium
              obcaecati, hic, aut nostrum minima adipisci totam? Ullam facere
              nesciunt vel.
            </Project>
          </SimpleGrid>
        </Section>

        <Section id="contact">
          <Title as="h1" mb={20} fontSize={50}>
            Contact Me
          </Title>
        </Section>
      </Container>

      <BackToTop shouldShow={shouldShow} />
    </Box>
  );
}
