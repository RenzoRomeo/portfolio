import { AnimatePresence, motion } from 'framer-motion';
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

const ToggleTheme = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        style={{ display: 'inline-block' }}
        key={useColorModeValue('light', 'dark')}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <IconButton
          aria-label="Toggle theme"
          bgGradient="linear(to-r, #ee0979, #ff6a00)"
          bgClip="icon"
          icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
          borderRadius={5}
          onClick={toggleColorMode}
          boxSize={{ base: 10, md: 10 }}
          color={useColorModeValue('black', 'white')}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default ToggleTheme;
