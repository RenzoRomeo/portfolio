import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

function MyApp({ Component, pageProps }) {
  library.add(fab, faEnvelope);
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
