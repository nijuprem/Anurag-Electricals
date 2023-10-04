import { PhoneIcon, EmailIcon } from "@chakra-ui/icons";
import { Box, Center, Flex, HStack, Heading, Text } from "@chakra-ui/react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <Box mt="3rem" id="contact">
      <Center>
        <Heading as={"h3"} size="xl" color="rgb(228 190 18)">
          Contact Us
        </Heading>
      </Center>
      <Flex mt={{ sm: "0rem", md: "2rem" }} flexWrap={"wrap"}>
        <Box
          p={8}
          w={{ md: "50%", base: "100%" }}
          borderRight={{ md: "2px" }}
          borderColor={{ md: "rgb(228 190 18)" }}
        >
          <Heading
            display={{ sm: "none", md: "block" }}
            mt={"1rem"}
            as={"h3"}
            size="lg"
          >
            Anurag Electricals
          </Heading>
          <Heading
            mt={"1rem"}
            as={"h4"}
            size="md"
            fontSize={{ base: "15px", md: "s" }}
          >
            Contact Person: Anurag Bhoir
          </Heading>
          <Text mt={"1rem"} fontSize={{ base: "15px", md: "s" }}>
            <b>Address:</b> House No 102, First Floor, Shree Shivshakti Vihar,
            Nagothane Pezari Road, Nagothana, Raigad, Maharashtra - 402106
          </Text>

          <HStack mt={"1rem"}>
            <PhoneIcon />
            <Text fontSize={{ base: "15px", md: "s" }}>+91-9834287422</Text>
          </HStack>
          <Text mt={"1rem"} fontSize={{ base: "15px", md: "s" }}>
            <b>Address 2:</b> Room no. 301, Ashtavinayak housing society, Plot
            no- 13, Sector 02, Karanjade, Panvel - 410206
          </Text>
          <HStack mt={"1rem"}>
            <PhoneIcon />
            <Text fontSize={{ base: "15px", md: "s" }}>+91-8149633296</Text>
          </HStack>
          <HStack mt={"0.5rem"}>
            <EmailIcon />
            <Text fontSize={{ base: "15px", md: "s" }}>
              <a href="mailto:banurag199@gmail.com">banurag199@gmail.com</a>
            </Text>
          </HStack>
        </Box>
        <ContactForm />
      </Flex>
    </Box>
  );
};

export default Contact;
