import { ChakraProvider } from '@chakra-ui/react';

const MyApp = (props) => {
  const { Component, pageProps } = props;
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default MyApp;
