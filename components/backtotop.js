import { ChevronUpIcon } from '@chakra-ui/icons';
import { animateScroll } from 'react-scroll';
import { Box } from '@chakra-ui/react';

import HoverBox from './hoverbox';

const BackToTop = ({ shouldShow }) => (
  <Box w="100%" align="right" p={5} position="fixed" bottom={2} right={2}>
    <HoverBox
      animate={{ opacity: shouldShow ? 1 : 0, scale: shouldShow ? 1 : 0 }}
      initial={{ opacity: 0 }}
      onClick={() => animateScroll.scrollToTop()}
      w={16}
      h={16}
    >
      <ChevronUpIcon
        bgGradient="linear(to-r, #ee0979, #ff6a00)"
        bgClip="icon"
        w={16}
        h={16}
        borderRadius="full"
      />
    </HoverBox>
  </Box>
);

export default BackToTop;
