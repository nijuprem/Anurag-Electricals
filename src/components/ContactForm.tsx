import {
  Center,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Box,
} from "@chakra-ui/react";

const ContactForm = () => {
  return (
    <Box pl={{ base: "2rem", md: 0 }} w={{ base: "100% ", md: "50%" }}>
      <Center justifyContent={{ base: "none", md: "center" }}>
        <FormControl width={{ base: "92%", md: "65%" }} textAlign={"center"}>
          <FormLabel mt={4}>Name</FormLabel>
          <Input type="name" name="name" placeholder="Your Name" />
          <FormLabel mt={4}>Email</FormLabel>
          <Input type="email" name="email" placeholder="Email" />
          <FormLabel mt={4}>Phone</FormLabel>
          <Input type="number" name="phone" placeholder="Phone" />
          <FormLabel mt={4}>Your Message</FormLabel>
          <Textarea
            rows={4}
            resize="none"
            placeholder="Please enter your message here"
          />

          <Button
            display={"block"}
            left={{ base: "41%", md: 0 }}
            mt={4}
            colorScheme="yellow"
            type="submit"
          >
            Submit
          </Button>
        </FormControl>
      </Center>
    </Box>
  );
};

export default ContactForm;
