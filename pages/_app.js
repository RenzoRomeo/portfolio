import '../styles/globals.css';
import Head from 'next/head';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

function MyApp({ Component, pageProps }) {
  library.add(fab, faEnvelope);
  return (
    <ChakraProvider>
      <Head>
        <title>Renzo Romeo</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
