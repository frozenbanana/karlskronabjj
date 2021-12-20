import {
    Flex,
    Box,
    AspectRatio,
    Image,
    Text,
  } from "@chakra-ui/react";

const Section = (props) => {
  const h2Text = props.textData.slice(0, 1);
  const pTexts = props.textData.slice(1);
  const isColumn = props.flexDir == "column";
  const isReversed = props.flexDir == "row-reverse";
  const childWidth = isColumn ? "100%" : "50%";
  return (
    <Flex
      flexDir={props.flexDir}
      marginBottom={ {base: '64px', lg: '16px'} }
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
          <Text key={`p_${idx}`} textStyle="subhead">
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

export default Section;