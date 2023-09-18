import { Box, Center, Flex, Heading, Image, Text } from "@chakra-ui/react";

interface Abouts {
  title: String;
  info: String;
  work: String;
  goals: String;
  contractor: String;
  gst: String;
  image: string;
}

interface Props {
  details: Abouts;
}

function AboutUs({ details }: Props) {
  const { title, info, work, goals, contractor, gst, image } = details;
  return (
    <Box mt="4rem" id="about">
      <Center>
        <Heading color={"white"}>About Us</Heading>
      </Center>
      <Flex h={{ md: "30rem" }} m={"1rem"}>
        <Box m={{ md: "3rem" }} w={"130%"}>
          <Heading as={"h3"} size="md" textAlign={"center"}>
            {title}
          </Heading>
          <Text mt={"1.5rem"} fontSize={{ base: "15px", md: "s" }}>
            {info}
          </Text>
          <Text mt={"1.5rem"} fontSize={{ base: "15px", md: "s" }}>
            {work}
          </Text>
          <Text mt={"1.5rem"} fontSize={{ base: "15px", md: "s" }}>
            {goals}
          </Text>
          <Text
            mt={"1.5rem"}
            textAlign={"center"}
            fontSize={{ base: "15px", md: "s" }}
          >
            Govt. Licensed Contractor: <b>{contractor}</b>
          </Text>
          <Text
            mt={"1.5rem"}
            textAlign={"center"}
            fontSize={{ base: "15px", md: "s" }}
          >
            GST IN: <b>{gst}</b>
          </Text>
        </Box>
        <Box w={"100%"} mr={"2rem"} display={{ base: "none", xl: "block" }}>
          {" "}
          <Center>
            <Image src={image} borderRadius={"1rem"} />
          </Center>
        </Box>
      </Flex>
    </Box>
  );
}

export default AboutUs;
