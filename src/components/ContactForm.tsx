import {
  Center,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Box,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // const form = useRef();

  const handleSubmit = (e: { preventDefault: () => void }) => {
    if (name.length === 0) {
      alert("Name has left Blank!");
    } else if (mobile.length === 0) {
      alert("Mobile has left Blank!");
    } else if (email.length === 0) {
      alert("Email has left Blank!");
    } else {
      const url = "http://localhost/anurag/formsubmit.php";
      let fData = new FormData();
      fData.append("name", name);
      fData.append("mobile", mobile);
      fData.append("email", email);
      fData.append("message", message);
      axios
        .post(url, fData)
        .then((response) => alert(response.data))
        .catch((error) => alert(error));
    }
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        // form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Box pl={{ base: "2rem", md: 0 }} w={{ base: "100% ", md: "50%" }}>
      <Center justifyContent={{ base: "none", md: "center" }}>
        {/* <form ref={form}> */}
        <form style={{ display: "contents" }}>
          <FormControl width={{ base: "92%", md: "65%" }} textAlign={"center"}>
            <FormLabel mt={4}>Name</FormLabel>
            <Input
              type="name"
              name="name"
              placeholder="Your Name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <FormLabel mt={4} id="email">
              Email
            </FormLabel>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormLabel mt={4}>Phone</FormLabel>
            <Input
              type="number"
              name="mobile"
              placeholder="Phone"
              id="mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
            <FormLabel mt={4}>Your Message</FormLabel>
            <Textarea
              rows={4}
              resize="none"
              placeholder="Please enter your message here"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <Button
              display={"block"}
              left={{ base: "41%", md: 0 }}
              mt={4}
              backgroundColor="rgb(228 190 18)"
              type="submit"
              id="submit"
              value="Register"
              onClick={handleSubmit}
              transition={"0.5s ease-in-out"}
              _hover={{ backgroundColor: "yellow" }}
            >
              Submit
            </Button>
          </FormControl>
        </form>
      </Center>
    </Box>
  );
};

export default ContactForm;
