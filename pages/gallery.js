import { Container, Box, Text, Flex } from "@chakra-ui/layout";
import Image from "next/image";
import Head from "next/head";
import julrullJa from "../public/gallery/julrull-ja.jpg";
import julrullFn from "../public/gallery/julrull-fn.jpg";
import julrullAj from "../public/gallery/julrull-aj.jpg";
import julrullXx from "../public/gallery/julrull-xx.jpg";

const galleryData = [
  {
    moment: "Julrullen 2021",
    images: [julrullJa, julrullFn, julrullAj, julrullXx],
  },
];

const ImageList = ({ images }) => (
  <Flex direction="column" align="center">
    {images.map((img, idx) => (
      <Box key={`imgcon${idx}`} marginBottom="32px">
        <Image
          key={`img${idx}`}
          src={img}
          alt={`Karlskrona Gallery Image Nr.${idx}`}
          width="1920"
          height="1080"
        />
      </Box>
    ))}
  </Flex>
);

export default function Gallery() {
  const seo = {
    title: "Karlskrona BJJ: Vårt Galleri",
    description:
      "Se hur det kan se ut på klubben. Vi erbjuder två veckor gratis testperiod! Kom som du är med vanliga gymkläder.",
  };
  return (
    <Container maxW="container.xl">
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
      </Head>
      {galleryData.map((gallery, idx) => (
        <Box key={`gallery${idx}`}>
          <Text maxW="100%" marginTop="16px" marginBottom="64px" textStyle="h2">
            {gallery.moment}
          </Text>
          <ImageList images={gallery.images} />
        </Box>
      ))}
    </Container>
  );
}
