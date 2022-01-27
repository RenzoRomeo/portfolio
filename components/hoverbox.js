import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const HoverBox = ({ children, ...props }) => {
  return (
    <MotionBox
      whileHover={{ scale: 1.2, transition: { duration: 0.25 } }}
      cursor="pointer"
      {...props}
    >
      {children}
    </MotionBox>
  );
};

export default HoverBox;
