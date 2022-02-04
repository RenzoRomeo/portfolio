import { Button } from '@chakra-ui/react';

import HoverBox from './hoverbox';
import SmoothLink from './smoothlink';

const NavbarButton = ({ section, title, pressed, onClick, ...props }) => {
  return (
    <HoverBox>
      <SmoothLink section={section}>
        <Button
          w="100%"
          isActive={pressed === section}
          onClick={() => onClick(section)}
          {...props}
        >
          {title}
        </Button>
      </SmoothLink>
    </HoverBox>
  );
};

export default NavbarButton;
