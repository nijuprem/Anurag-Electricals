import {
  Card,
  CardBody,
  Stack,
  Heading,
  Image,
  Text,
  ListItem,
  UnorderedList,
  Flex,
  Center,
  Box,
} from "@chakra-ui/react";
import { Link } from "react-scroll";
import service from "../data/service";

const Services = () => {
  return (
    <Box mt="1rem" id="services">
      <Center>
        <Heading as={"h3"} size="xl">
          Services
        </Heading>
      </Center>
      <Flex flexWrap={"wrap"} mt={5} justifyContent={"center"}>
        {service.map(({ name, img, list }, index) => (
          <Card
            transition={"0.5s ease-in-out"}
            _hover={{
              transform: "scale(1.05)",
              border: "4px solid rgb(228 190 18)",
            }}
            maxW="md"
            h={{ lg: "32rem" }}
            margin={5}
            width={{ xl: "30%" }}
            bgColor={"inherit"}
            color={"white"}
            border={"2px solid"}
            borderColor={"rgb(228 190 18)"}
            paddingBottom={5}
            key={index}
          >
            <CardBody position={"relative"}>
              <Image
                height={{ lg: "16rem", sm: "13rem" }}
                width={{ xl: "100%", lg: "20rem", sm: "18rem" }}
                src={img}
                alt={name}
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Center>
                  <Heading size="md">{name}</Heading>
                </Center>
                <UnorderedList>
                  {list.map((data, index) => (
                    <ListItem
                      mt={"0.25rem"}
                      key={index}
                      fontSize={{ base: "15px", md: "s" }}
                    >
                      {data}
                    </ListItem>
                  ))}
                </UnorderedList>
                <Center>
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={700}
                  >
                    <Text
                      color="rgb(228 190 18)"
                      fontSize="2xl"
                      position={"absolute"}
                      bottom="-0.45rem"
                      cursor={"pointer"}
                      left={{ md: "38%", sm: "36%" }}
                    >
                      Contact
                    </Text>
                  </Link>
                </Center>
              </Stack>
            </CardBody>
          </Card>
        ))}
      </Flex>
    </Box>
  );
};

export default Services;
