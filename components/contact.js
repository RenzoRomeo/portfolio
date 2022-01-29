import { Stack } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import HoverBox from '../components/hoverbox';

const Contact = () => (
  <Stack
    direction="row"
    justify="space-around"
    w="container.sm"
    p={5}
    borderRadius={5}
  >
    <HoverBox>
      <a href="https://github.com/RenzoRomeo" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={['fab', 'github']} size="4x" />
      </a>
    </HoverBox>
    <HoverBox>
      <a
        href="https://www.linkedin.com/in/renzo-romeo"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={['fab', 'linkedin']} size="4x" />
      </a>
    </HoverBox>
  </Stack>
);

export default Contact;
