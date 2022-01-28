import { Box, Flex, Text, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const Skill = ({ title, side }) => (
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
    py={15}
  >
    <Flex
      align="center"
      justify="space-between"
      flexDir={side === 'left' ? 'row' : 'row-reverse'}
      px={125}
    >
      <Image w={150} p={2} src={`/images/${title}.png`} alt={title} />
      <Text fontSize={25} fontWeight="bold">
        {title}
      </Text>
    </Flex>
  </MotionBox>
);

export default Skill;
