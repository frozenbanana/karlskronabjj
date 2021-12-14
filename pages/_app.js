import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/Layout";
import theme from '../styles/themes';


function MyApp({ Component, pageProps }) {
  //console.log(theme);
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
