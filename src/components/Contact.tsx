import { PhoneIcon, EmailIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";

const Contact = () => {
  return (
    <div>
      <Center>
        <Heading as={"h3"} size="xl">
          Contact Us
        </Heading>
      </Center>
      <Flex mt={"2rem"}>
        <Box p={8} w={"50%"} borderRight={"2px"} borderColor="rgb(228 190 18)">
          <Heading mt={"1rem"} as={"h3"} size="lg">
            Anurag Electricals
          </Heading>
          <Heading mt={"1rem"} as={"h4"} size="md">
            Contact Person: Anurag Bhoir
          </Heading>
          <Text mt={"1rem"}>
            <b>Address:</b> House No 102,First Floor,Shree Shivshakti
            Vihar,Nagothane Pezari Road,Nagothana,Raigad Raigad - 402106,
            Maharashtra, India
          </Text>
          <HStack mt={"1rem"}>
            <PhoneIcon />
            <Text>+91-8062245122</Text>
          </HStack>
          <HStack mt={"0.5rem"}>
            <EmailIcon />
            <Text>abc@abc.com</Text>
          </HStack>
        </Box>
        <Box p={5} width={"50%"}>
          <Center>
            <FormControl width={"65%"} textAlign={"center"}>
              <FormLabel mt={4}>Name</FormLabel>
              <Input type="name" name="name" placeholder="Your Name" />
              <FormLabel mt={4}>Email</FormLabel>
              <Input type="email" name="email" placeholder="Email" />
              <FormLabel mt={4}>Phone</FormLabel>
              <Input type="number" name="phone" placeholder="Phone" />
              <FormLabel mt={4}>Your Message</FormLabel>
              <Textarea placeholder="Please enter your message here" />

              <Button
                display={"block"}
                mt={4}
                colorScheme="yellow"
                type="submit"
              >
                Submit
              </Button>
            </FormControl>
          </Center>
        </Box>
      </Flex>
    </div>
  );
};

export default Contact;
