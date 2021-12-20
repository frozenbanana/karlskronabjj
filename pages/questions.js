import { Container, Box, Text, Flex } from "@chakra-ui/layout";

const questionsData = [
    {
        question: 'Behöver man särskilda kläder?',
        answer: "Nejdå! Kom med vanliga gymkläder. Det viktigaste är att det inte finns dragkedjor eller annat som kan skada dig, andra eller mattan under sparring."
    },

    {
        question: 'Kan jag börja mitt i en termin som nybörjare?',
        answer: "Absolut! Det är bara att komma. När det finns flera nya på passet delar vi upp teknikdelen av träningen så att ni nya får en passade introduktion."
    },

    {
        question: "Finns det möjlighet att byta om i lokalen?",
        answer: "Ja, vi har omklädningsrum för herrar och damer med dusch."
    },
    {
        question: "Finns det något annat jag bör tänka på?",
        answer: "Se till att vara frisk och ren innan du kommer och kom minst 15 minuter innan träningen börjar."
    }
];

export default function Questions() {
    return (
    <Container maxW="container.xl">
        <Flex direction="column" justifyContent='space-evenly' align="right">
        {questionsData.map( (q,idx) => (
                    <Box key={`q${idx}`} maxW="100%" marginBottom="32px">
                        <Text textStyle="h3">{q.question}</Text>
                        <Text textStyle="p">{q.answer}</Text>
                    </Box>)) 
            }
        </Flex>
    </Container>
    );
}