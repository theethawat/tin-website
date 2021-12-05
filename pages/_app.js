import "../styles/globals.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Head from "next/head";
const theme = extendTheme({
  colors: {
    brand: {
      50: "#e9f8f7",
      100: "#cbf7f0",
      200: "#97f2de",
      300: "#56eac8",
      400: "#29e4b7",
      500: "#06c780",
      600: "#06af65",
      700: "#0c9156",
      800: "#107249",
      900: "#105d3e",
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Head>
        <link rel='icon' href='/logo.png' />
      </Head> */}
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>{" "}
    </>
  );
}

export default MyApp;
