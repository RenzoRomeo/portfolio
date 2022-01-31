import { SimpleGrid } from '@chakra-ui/react';

import Project from './project';

import huluThumb from '../public/images/projects/hulu.png';
import spotifyThumb from '../public/images/projects/spotify.png';
import asteroidsThumb from '../public/images/projects/asteroids.png';
import raycasterThumb from '../public/images/projects/raycaster.png';

const Projects = () => (
  <SimpleGrid
    columns={[1, 1, 2]}
    spacing={10}
    p={10}
    pb={5}
    borderRadius={15}
  >
    <Project
      title="Spotify Clone"
      thumbnail={spotifyThumb}
      repo="spotify-clone"
    ></Project>
    <Project
      title="Hulu Clone"
      thumbnail={huluThumb}
      repo="hulu-clone"
    ></Project>
    <Project
      title="Asteroids Clone"
      thumbnail={asteroidsThumb}
      repo="asteroids"
    ></Project>
    <Project
      title="Raycaster"
      thumbnail={raycasterThumb}
      repo="raycaster"
    ></Project>
  </SimpleGrid>
);

export default Projects;
