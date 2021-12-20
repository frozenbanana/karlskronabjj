import { Container, Box, Text, Flex } from "@chakra-ui/layout";
import Image from "next/image";



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
  return (
    <Container maxW="container.xl">
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
