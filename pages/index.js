import {
  Container,
  Flex,
  Box,
  AspectRatio,
  Image,
  Text,
} from "@chakra-ui/react";
import dynamic from "next/dynamic";
import useMediaQuery from "../hooks/useMediaQuery";
const DynamicScrollingCanvas = dynamic(
  () => import("../components/ScrollingCanvas"),
  { ssr: false }
);

const Section = (props) => {
  const h2Text = props.textData.slice(0, 1);
  const pTexts = props.textData.slice(1);
  const isColumn = props.flexDir == "column";
  const isReversed = props.flexDir == "row-reverse";
  const childWidth = isColumn ? "100%" : "50%";
  return (
    <Flex
      flexDir={props.flexDir}
      marginTop="16px"
      justifyContent="space-between"
      style={{ columnGap: props.splitMargin }}
    >
      <Box
        width={childWidth}
        flexDir="column"
        padding="8px 0"
        textAlign={isReversed ? "right" : "left"}
      >
        <Text textStyle="h2">{h2Text}</Text>
        {pTexts.map((pText, idx) => (
          <Text key={`p_${idx}`} textStyle="p">
            {pText}
          </Text>
        ))}
      </Box>
      <AspectRatio width={childWidth} maxW={childWidth} ratio={16 / 9}>
        {props.mediaComponent || (
          <Image src={props.imgSrc} alt={props.imgAlt} objectFit="cover" />
        )}
      </AspectRatio>
    </Flex>
  );
};

const HeroSection = () => {
  const images = [];
  for (let i = 1; i < 123; i++)
    images.push(`heroImages/bjjhero-${i.toString().padStart(3, "0")}.jpg`);

  return (
    <Section
      flexDir="column"
      textData={[
        "välkommen till karlskrona BJJ",
        "SPORT, GRAPPLING & SJÄLVFÖRSVAR",
      ]}
      imgSrc="https://bit.ly/naruto-sage"
      imgAlt="naruto"
      mediaComponent={
        <DynamicScrollingCanvas width="1920" height="1080" images={images} />
      }
    />
  );
};

const FindUsSection = ({flexDir}) => (
  <Section
    flexDir={flexDir}
    textData={["Hitta hit", "SALTSJÖBADSVÄGEN 1C", "371 32", "KARLSKRONA"]}
    imgSrc="map.jpg"
    imgAlt="map to karlskrona BJJ"
    splitMargin="16px"
  />
);

const SchedualSection= ({flexDir}) => (
  <Section
    flexDir={flexDir}
    textData={[
      "Schema",
      "TISDAG 19.00 - 21.00",
      "TORSDAG 19.00 - 21.00",
      "LÖRDAG 09.30 - 11.00",
    ]}
    imgSrc="https://bit.ly/naruto-sage"
    imgAlt="naruto"
    splitMargin="8px"
  />
);

const PriceSection = ({flexDir}) => (
  <Section
    flexDir={flexDir}
    textData={[
      "medlemskap",
      "student 800 SEK / TERMIN",
      "vuxen 1000 sek / termin",
      "ungdom 500 SEK / TERMIN",
    ]}
    imgSrc="https://bit.ly/naruto-sage"
    imgAlt="naruto"
    splitMargin="8px"
  />
);

export default function Home() {
  const isDesktop = useMediaQuery('(min-width: 960px)');
  return (
    <Container maxW="container.xl">
      <HeroSection />
      <FindUsSection flexDir={isDesktop ? 'row' : 'column'}/>
      <SchedualSection flexDir={isDesktop ? 'row-reverse' : 'column'}/>
      <PriceSection flexDir={isDesktop ? 'row' : 'column'}/>
    </Container>
  );
}
