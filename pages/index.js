import Head from 'next/head';
import { useState, useEffect } from 'react';
import { Box, SimpleGrid, Heading, useColorModeValue } from '@chakra-ui/react';
import { Container } from '@chakra-ui/react';

import SkillsList from '../components/skillslist';
import Navbar from '../components/navbar';
import Presentation from '../components/presentation';
import Section from '../components/section';
import Project from '../components/project';

import thumb from '../public/images/renzo.jpg';
import BackToTop from '../components/backtotop';
import ToggleTheme from '../components/toggleTheme';

export default function Home() {
  const [shouldShow, setShouldShow] = useState(false);
  const [yPos, setYPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const yPos = window.scrollY;
      setYPos(yPos);
    };

    window.addEventListener('scroll', handleScroll, false);

    setShouldShow(yPos > 500);

    return () => {
      window.removeEventListener('scroll', handleScroll, false);
    };
  }, [yPos]);

  return (
    <Box
      w="100%"
      bgGradient={useColorModeValue(
        'linear(to-t, #7F7FD5, #86A8E7, #91EAE4)',
        'linear(to-b, #0f0c29, #302b63, #24243e)'
      )}
      py={15}
    >
      <Box
        w="100%"
        align="right"
        p={5}
        position="fixed"
        zIndex={2}
        top={2}
        right={2}
      >
        <ToggleTheme />
      </Box>

      <Navbar shouldShow={shouldShow} />

      <Presentation id="presentation" />

      <Container maxW="container.xl" align="center">
        <Head>
          <title>Renzo Romeo</title>
        </Head>

        <SimpleGrid columns={[1, 1, 2]}>
          <Section id="about">
            <Heading as="h1" mb={20} fontSize={50}>
              About Me
            </Heading>

            <Box p={5} align="center" textAlign="justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              aperiam repudiandae dolore inventore natus laudantium delectus.
              Obcaecati eligendi voluptas, non repudiandae numquam ad debitis
              rem nobis? Quidem, cupiditate sit inventore, fuga deleniti, illo
              voluptatibus autem eaque fugit cumque labore eveniet non odio sint
              voluptatum odit rem. Laborum mollitia ea tempora ullam labore vel
              aspernatur veniam ex provident, quas magnam sequi libero velit
              eaque eveniet quasi, necessitatibus facilis quaerat aut. Et cumque
              laudantium nobis repellendus voluptatem hic tempore accusamus
              voluptates corrupti. Tempora natus cupiditate consequuntur
              incidunt illo repudiandae nisi voluptatum ad obcaecati nulla non
              ab officiis, tempore quia ducimus veniam. Nemo nostrum qui
              accusamus pariatur, explicabo neque quod eligendi non quam iusto
              tempora error odit. Cupiditate vitae nam dignissimos fugit maxime,
              quasi excepturi, illum ratione aut perspiciatis reprehenderit
              eaque quam velit labore, nemo sint doloremque! Unde ipsa autem
              quasi omnis explicabo officiis, illum suscipit reprehenderit eum,
              nam labore temporibus voluptates enim quam vitae hic eveniet
              blanditiis ullam recusandae dolores ratione magni. Nesciunt ad
              veritatis accusantium necessitatibus similique ex rerum quasi odit
              aliquid molestiae voluptatum optio perspiciatis aliquam qui
              repudiandae tempora atque quibusdam, non provident sapiente iste
              nemo doloribus blanditiis. Animi, quod sunt similique laborum
              dolorum doloribus quasi fuga nesciunt. Ipsam, soluta!
            </Box>
          </Section>

          <Section id="skills">
            <Heading as="h1" mb={50} fontSize={50}>
              Skills
            </Heading>
            <SkillsList />
          </Section>
        </SimpleGrid>

        <Section id="projects">
          <Heading as="h1" fontSize={50} mb={20}>
            Projects
          </Heading>

          <SimpleGrid columns={[1, 1, 2]} spacing={10}>
            <Project title="Test" thumbnail={thumb}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum,
              quaerat quam vel sed eos ut est porro soluta error aspernatur
              ipsam. In vel suscipit labore totam delectus, optio quam dicta? Ab
              esse neque quasi inventore similique dolores earum, laudantium
              obcaecati, hic, aut nostrum minima adipisci totam? Ullam facere
              nesciunt vel.
            </Project>
            <Project title="Test" thumbnail={thumb}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum,
              quaerat quam vel sed eos ut est porro soluta error aspernatur
              ipsam. In vel suscipit labore totam delectus, optio quam dicta? Ab
              esse neque quasi inventore similique dolores earum, laudantium
              obcaecati, hic, aut nostrum minima adipisci totam? Ullam facere
              nesciunt vel.
            </Project>
            <Project title="Test" thumbnail={thumb}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum,
              quaerat quam vel sed eos ut est porro soluta error aspernatur
              ipsam. In vel suscipit labore totam delectus, optio quam dicta? Ab
              esse neque quasi inventore similique dolores earum, laudantium
              obcaecati, hic, aut nostrum minima adipisci totam? Ullam facere
              nesciunt vel.
            </Project>
            <Project title="Test" thumbnail={thumb}>
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
          <Heading as="h1" mb={20} fontSize={50}>
            Contact Me
          </Heading>
        </Section>
      </Container>

      <BackToTop shouldShow={shouldShow} />
    </Box>
  );
}
