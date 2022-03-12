import { SimpleGrid } from '@chakra-ui/react';

import Project from './project';

import chatThumb from '../public/images/projects/chat.png';
import ecommerceThumb from '../public/images/projects/ecommerce.png';
import huluThumb from '../public/images/projects/hulu.png';
import spotifyThumb from '../public/images/projects/spotify.png';
import asteroidsThumb from '../public/images/projects/asteroids.png';
import raycasterThumb from '../public/images/projects/raycaster.png';

const Projects = () => (
  <SimpleGrid columns={[1, 1, 2]} spacing={10} p={10} pb={5} borderRadius={15}>
    <Project
      title="Real Time Chat App"
      thumbnail={chatThumb}
      link="https://github.com/RenzoRomeo/chat-app-next"
      tags={['Typescript', 'Next.js', 'Chakra UI', 'Socket.io', 'Firebase']}
    ></Project>
    <Project
      title="Ecommerce Site"
      thumbnail={ecommerceThumb}
      link="https://github.com/RenzoRomeo/ecommerce"
      tags={['Typescript', 'Next.js', 'Chakra UI', 'Redux']}
    ></Project>
    <Project
      title="Spotify Clone"
      thumbnail={spotifyThumb}
      link="https://github.com/RenzoRomeo/spotify-clone"
      tags={['Next.js', 'Next.Auth', 'Tailwind CSS', 'Recoil']}
    ></Project>
    <Project
      title="Hulu Clone"
      thumbnail={huluThumb}
      link="https://github.com/RenzoRomeo/hulu-clone"
      tags={['Next.js', 'Tailwind CSS']}
    ></Project>
    <Project
      title="Asteroids Clone"
      thumbnail={asteroidsThumb}
      link="https://github.com/RenzoRomeo/asteroids"
      tags={['C++', 'SFML']}
    ></Project>
    <Project
      title="Raycaster"
      thumbnail={raycasterThumb}
      link="https://github.com/RenzoRomeo/raycaster"
      tags={['C++', 'SFML']}
    ></Project>
  </SimpleGrid>
);

export default Projects;
