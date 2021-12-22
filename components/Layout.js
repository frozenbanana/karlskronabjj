import { Container } from "@chakra-ui/layout";
import styles from '../styles/Layout.module.css';
import Script from 'next/script';
import Head from "next/head";
import Footer from "./Footer";
import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta property="og:image" content='/cover.png' />
        <meta name="image" content='/cover.png' />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="index, nofollow"/>
      </Head>
      <Container maxW='container.xl'>
        <Nav />
        {children}
        <Footer className={styles.footer} />
      </Container>
    </>
  );
}
