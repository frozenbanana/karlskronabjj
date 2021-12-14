import { Flex, AspectRatio, Image, Link } from "@chakra-ui/react";
import { Button, Text } from "@chakra-ui/react";
import NextLink from "next/link";

const NavLink = (props) => (
  <NextLink href={props.href} passHref>
      <Link textStyle="a">{props.text.toUpperCase()}</Link>
  </NextLink>
);

export default function Nav() {
  return (
    <Flex justifyContent='flex-start' alignItems='center' marginTop="16px">
      <AspectRatio ratio={1} minW="200px" maxW="200px" maxH="200px" marginRight="8px">
        <Image src="logo.jpg" alt="logo"></Image>
      </AspectRatio>
      <Flex grow="1" justifyContent="space-evenly">
        <NavLink href="/" text="hem" />
        <NavLink href="/gallery" text="galleri" />
        <NavLink href="/contact" text="kontakt" />
        <NavLink href="/questions" text="frågor" />
      </Flex>
    </Flex>
  );
}
