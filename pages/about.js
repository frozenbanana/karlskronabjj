import { Container, Heading, Text } from "@chakra-ui/layout";
import Image from 'next/image';

export default function About() {
    return (
    <Container>
        <Image width="1920" height="1080" src='/cover.jpg' alt='Karlskrona Klubb bild' />
        <Text>Vi är Karlskronas första, äldsta och bästa BJJ klubb. Sedan 2020 tränar vi i ett av huset vid tyska bryggeriet (hitta hit) tillsammans med Karlskrona Karate Klubb. </Text>
    </Container>
    );
}