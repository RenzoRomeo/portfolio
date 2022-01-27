import { chakra, shouldForwardProp } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: prop =>
    shouldForwardProp(prop) || ['transition'].includes(prop)
});

const Section = ({ children, delay = 0, ...props }) => (
  <StyledDiv
    initial="hidden"
    whileInView="visible"
    w="100%"
    viewport={{ once: true }}
    variants={{
      visible: { opacity: 1, y: 0 },
      hidden: { opacity: 0, y: -20 }
    }}
    transition={{ duration: 0.5, delay }}
    align="center"
    p={4}
    borderRadius={5}
    my={20}
    fontSize={20}
    {...props}
  >
    {children}
  </StyledDiv>
);

export default Section;
