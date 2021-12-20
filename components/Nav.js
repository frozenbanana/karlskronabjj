import { Flex, AspectRatio, Image, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from 'next/router';

const NavLink = (props) => {
  const router = useRouter();

  const isActive = router.pathname == props.href;

  return (
  <NextLink href={props.href} passHref>
      <Link textStyle="a" style={isActive ? {fontWeight: 'bold'} : {} } color="gray">{props.text.toUpperCase()}&gt;</Link>
  </NextLink>
);
  }

export default function Nav() {

  return (
    <Flex justifyContent="space-between" margin="16px 0px" align="center">
      <AspectRatio ratio={1} minW="200px" maxW="200px" maxH="200px" marginRight="8px">
        <Image src="logo.jpg" alt="logo"></Image>
      </AspectRatio>
      <Flex direction={ {base: 'column', lg: "row"} }
        grow="1" justifyContent="space-evenly" align="center">
        <NavLink href="/" text="hem" />
        <NavLink href="/gallery" text="galleri" />
        <NavLink href="/questions" text="frågor" />
      </Flex>
    </Flex>
  );
}
