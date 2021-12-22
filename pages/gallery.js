import { Container, Box, Text, Flex } from "@chakra-ui/layout";
import Image from "next/image";
import Head from "next/head";


const galleryData = [{
  moment: "Julrullen 2021",
  images: ["julrull-ja.jpg", "julrull-fn.jpg", "julrull-aj.jpg", "julrull-xx.jpg"],
}];

const ImageList = ({ galleryPath, images }) => (
  <Flex direction="column" align="center">
    {images.map((imgSrc, idx) => (
    <Box key={`imgcon${idx}`}>
      <Image
        key={`img${idx}`}
        src={galleryPath + imgSrc}
        alt={`Karlskrona Gallery Image Nr.${idx}`}
        width="800px"
        height="520px"
      />
      </Box>
    ))}
  </Flex>
);

export default function Gallery() {
  const seo = {
    title: 'Karlskrona BJJ: Vårt Galleri',
    description: 'Se hur det kan se ut på klubben. Vi erbjuder två veckor gratis testperiod! Kom som du är med vanliga gymkläder.',
  }
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
            <Text
              maxW="100%"
              marginBottom="32px"
              textStyle="h2"
            >
              {gallery.moment}
            </Text>
            <ImageList galleryPath="/gallery/" images={gallery.images} />
          </Box>
        ))}
    </Container>
  );
}
