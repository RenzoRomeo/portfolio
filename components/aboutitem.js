import { Box, Flex, Text, Icon, useBreakpointValue } from '@chakra-ui/react';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDownIcon
} from '@chakra-ui/icons';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const AboutItem = ({ side, children }) => {
  return (
    <MotionBox
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      w="100%"
      variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: side === 'left' ? -20 : 20 }
      }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <Flex
        align="center"
        justify="space-between"
        flexDir={{
          base: 'column',
          md: side === 'left' ? 'row' : 'row-reverse'
        }}
        px={50}
        py={6}
      >
        <Icon
          as={useBreakpointValue({
            base: ChevronDownIcon,
            md: side === 'right' ? ChevronLeftIcon : ChevronRightIcon
          })}
          boxSize={75}
          color="green.500"
        />
        <Text align="center">{children}</Text>
      </Flex>
    </MotionBox>
  );
};

export default AboutItem;
