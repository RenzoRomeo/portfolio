import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const AboutItem = ({ side, imageName, children }) => (
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
      flexDir={{ base: 'column', md: side === 'left' ? 'row' : 'row-reverse' }}
      px={50}
    >
      <Image
        w={125}
        h={125}
        p={2}
        borderWidth={2}
        borderColor="whiteAlpha.900"
        src={`/images/${imageName}.png`}
        alt={imageName}
        borderRadius="full"
      />
      <Text align="center">{children}</Text>
    </Flex>
  </MotionBox>
);

export default AboutItem;
