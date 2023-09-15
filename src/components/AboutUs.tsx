import { Box, Center, Flex, Heading, Text } from "@chakra-ui/react";

interface Abouts {
  title: String;
  info: String;
  work: String;
  goals: String;
  image: String;
  contractor: String;
  gst: String;
}

interface Props {
  details: Abouts;
}

function AboutUs({ details }: Props) {
  const { title, info, work, goals, contractor, gst, image } = details;
  return (
    <>
      <Center>
        <Heading mt={"2.5rem"} color={"white"}>
          About Us
        </Heading>
      </Center>
      <Flex h={"30rem"} m={"1rem"}>
        <Box m="3rem" w={"130%"}>
          <Heading as={"h3"} size="md">
            {title}
          </Heading>
          <Text mt={"1.5rem"} fontSize={"s"}>
            {info}
          </Text>
          <Text mt={"1.5rem"} fontSize={"s"}>
            {work}
          </Text>
          <Text mt={"1.5rem"} fontSize={"s"}>
            {goals}
          </Text>
          <Text mt={"1.5rem"} fontSize={"s"}>
            Govt. Licensed Contractor: <b>{contractor}</b>
          </Text>
          <Text mt={"1.5rem"} fontSize={"s"}>
            GST IN: <b>{gst}</b>
          </Text>
        </Box>
        <Box w={"100%"}>
          {" "}
          <Center>
            <Text>{image}</Text>
          </Center>
        </Box>
      </Flex>
    </>
  );
}

export default AboutUs;
