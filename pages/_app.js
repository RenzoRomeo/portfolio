import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

function MyApp({ Component, pageProps }) {
  library.add(fab);
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
